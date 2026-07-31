"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  germanRegistrationSchema,
  type GermanRegistrationFormData,
} from "@/lib/validation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FORMAT_OPTIONS = [
  { value: "individual", label: "Индивидуальные занятия" },
  { value: "club", label: "Разговорный клуб" },
  { value: "express", label: "Экспресс-курс" },
];

export function GermanRegistrationForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<
    Partial<Record<keyof GermanRegistrationFormData, string>>
  >({});
  const [pending, setPending] = useState(false);
  const [format, setFormat] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = new FormData(e.currentTarget);
    const data: GermanRegistrationFormData = {
      name: (form.get("name") as string) || "",
      contact: (form.get("contact") as string) || "",
      format,
      comment: (form.get("comment") as string) || "",
    };

    const parsed = germanRegistrationSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Partial<
        Record<keyof GermanRegistrationFormData, string>
      > = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof GermanRegistrationFormData;
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setPending(true);
    const id = toast.loading("Отправляем заявку...");

    try {
      const res = await fetch("/api/german-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Ошибка отправки");
      }

      toast.success(
        "Заявка отправлена! Мы свяжемся с вами для обсуждения деталей.",
        { id }
      );
      router.refresh();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Не удалось отправить заявку",
        { id }
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="format">Формат занятий *</Label>
        <Select
          value={format}
          onValueChange={(value: string | null) => {
            if (value) setFormat(value);
          }}
          disabled={pending}
        >
          <SelectTrigger
            id="format"
            className={errors.format ? "border-destructive" : ""}
          >
            <SelectValue placeholder="Выберите формат" />
          </SelectTrigger>
          <SelectContent>
            {FORMAT_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.format && (
          <p className="text-sm text-destructive">{errors.format}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Имя *</Label>
        <Input
          id="name"
          name="name"
          placeholder="Ваше имя"
          disabled={pending}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact">Телефон или email *</Label>
        <Input
          id="contact"
          name="contact"
          placeholder="+7 (999) 123-45-67 или email@example.com"
          disabled={pending}
        />
        {errors.contact && (
          <p className="text-sm text-destructive">{errors.contact}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="comment">Комментарий</Label>
        <Textarea
          id="comment"
          name="comment"
          placeholder="Ваши пожелания, уровень, цели"
          rows={3}
          disabled={pending}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2"
        disabled={pending}
      >
        {pending ? (
          "Отправляем..."
        ) : (
          <>
            <Send className="h-4 w-4" />
            Записаться
          </>
        )}
      </Button>
    </form>
  );
}
