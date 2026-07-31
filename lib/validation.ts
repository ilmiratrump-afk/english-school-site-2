import { z } from "zod";

export const trialLessonSchema = z.object({
  name: z.string().min(1, "Имя обязательно").max(100),
  contact: z.string().min(1, "Контакт обязателен").max(200),
  comment: z.string().max(2000).optional().default(""),
});

export type TrialLessonFormData = z.infer<typeof trialLessonSchema>;

export const groupRegistrationSchema = z.object({
  name: z.string().min(1, "Имя обязательно").max(100),
  contact: z.string().min(1, "Контакт обязателен").max(200),
  comment: z.string().max(2000).optional().default(""),
});

export type GroupRegistrationFormData = z.infer<typeof groupRegistrationSchema>;

export const seminarRegistrationSchema = z.object({
  name: z.string().min(1, "Имя обязательно").max(100),
  contact: z.string().min(1, "Контакт обязателен").max(200),
  comment: z.string().max(2000).optional().default(""),
});

export type SeminarRegistrationFormData = z.infer<
  typeof seminarRegistrationSchema
>;

export const germanRegistrationSchema = z.object({
  name: z.string().min(1, "Имя обязательно").max(100),
  contact: z.string().min(1, "Контакт обязателен").max(200),
  format: z.string().min(1, "Выберите формат занятий").max(100),
  comment: z.string().max(2000).optional().default(""),
});

export type GermanRegistrationFormData = z.infer<
  typeof germanRegistrationSchema
>;
