// Мок-данные для статического режима (без БД)
// Используются когда USE_DATABASE=false или БД недоступна

import {
  Service,
  TrialLesson,
  GroupRegistration,
  SeminarRegistration,
  GermanRegistration,
} from "./models";

export const mockServices: Service[] = [
  {
    id: "mock-service-1",
    name: "API Gateway",
    description: "Шлюз для микросервисной архитектуры",
    status: "active",
    url: "https://api.example.com",
    createdAt: new Date("2024-01-15").toISOString(),
    updatedAt: new Date("2024-01-15").toISOString(),
  },
  {
    id: "mock-service-2",
    name: "Auth Service",
    description: "Сервис аутентификации и авторизации",
    status: "active",
    url: "https://auth.example.com",
    createdAt: new Date("2024-02-01").toISOString(),
    updatedAt: new Date("2024-02-01").toISOString(),
  },
  {
    id: "mock-service-3",
    name: "ML Pipeline",
    description: "Пайплайн для обработки данных с AI",
    status: "deploying",
    url: undefined,
    createdAt: new Date("2024-03-10").toISOString(),
    updatedAt: new Date("2024-03-10").toISOString(),
  },
];

export const mockTrialLessons: TrialLesson[] = [
  {
    id: "mock-trial-1",
    name: "Анна Петрова",
    contact: "anna@example.com",
    comment: "Хочу подготовиться к ЕГЭ за 9 месяцев",
    createdAt: new Date("2025-06-01").toISOString(),
  },
];

export const mockGroupRegistrations: GroupRegistration[] = [
  {
    id: "mock-group-1",
    name: "Иван Иванов",
    contact: "ivan@example.com",
    comment: "Хочу в группу полного курса",
    createdAt: new Date("2025-06-10").toISOString(),
  },
];

export const mockSeminarRegistrations: SeminarRegistration[] = [
  {
    id: "mock-seminar-1",
    name: "Елена Смирнова",
    contact: "elena@example.com",
    comment: "Хочу узнать о подготовке к ЕГЭ",
    createdAt: new Date("2025-07-01").toISOString(),
  },
];

export const mockGermanRegistrations: GermanRegistration[] = [
  {
    id: "mock-german-1",
    name: "Ольга Немецкая",
    contact: "olga@example.com",
    format: "individual",
    comment: "Хочу изучать немецкий с нуля",
    createdAt: new Date("2025-07-01").toISOString(),
  },
];
