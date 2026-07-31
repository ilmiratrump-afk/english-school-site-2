"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  seminarRegistrationSchema,
  type SeminarRegistrationFormData,
} from "@/lib/validation";

export function SeminarRegistrationForm() {
  const [errors, setErrors] = useState<
    Partial<Record<keyof SeminarRegistrationFormData, string>>
  >({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = new FormData(e.currentTarget);
    const data: SeminarRegistrationFormData = {
      name: (form.get("name") as string) || "",
      contact: (form.get("contact") as string) || "",
      comment: (form.get("comment") as string) || "",
    };

    const parsed = seminarRegistrationSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Partial<
        Record<keyof SeminarRegistrationFormData, string>
      > = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof SeminarRegistrationFormData;
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
      const res = await fetch("/api/seminar-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Ошибка отправки");
      }

      toast.success(
        "Вы записаны на семинар! Мы пришлём ссылку на подключение за час до начала.",
        { id }
      );
      e.currentTarget.reset();
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
        <Label htmlFor="seminar-name">Имя *</Label>
        <Input
          id="seminar-name"
          name="name"
          placeholder="Ваше имя"
          disabled={pending}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="seminar-contact">Телефон или email *</Label>
        <Input
          id="seminar-contact"
          name="contact"
          placeholder="+7 (999) 123-45-67 или email@example.com"
          disabled={pending}
        />
        {errors.contact && (
          <p className="text-sm text-destructive">{errors.contact}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="seminar-comment">Комментарий</Label>
        <Textarea
          id="seminar-comment"
          name="comment"
          placeholder="Есть ли вопросы по семинару?"
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
            Записаться на семинар
          </>
        )}
      </Button>
    </form>
  );
}
