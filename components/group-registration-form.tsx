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
  groupRegistrationSchema,
  type GroupRegistrationFormData,
} from "@/lib/validation";

export function GroupRegistrationForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<
    Partial<Record<keyof GroupRegistrationFormData, string>>
  >({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = new FormData(e.currentTarget);
    const data: GroupRegistrationFormData = {
      name: (form.get("name") as string) || "",
      contact: (form.get("contact") as string) || "",
      comment: (form.get("comment") as string) || "",
    };

    const parsed = groupRegistrationSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Partial<
        Record<keyof GroupRegistrationFormData, string>
      > = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof GroupRegistrationFormData;
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
      const res = await fetch("/api/group-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Ошибка отправки");
      }

      toast.success(
        "Заявка отправлена! Мы свяжемся с вами для уточнения деталей.",
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
          placeholder="Какой формат вам интересен? Есть ли пожелания по расписанию?"
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
            Предзаписаться в группу
          </>
        )}
      </Button>
    </form>
  );
}
