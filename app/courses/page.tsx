import Link from "next/link";
import {
  Clock,
  Calendar,
  Check,
  ArrowRight,
  Sparkles,
  BookOpen,
  Star,
  Globe,
  Pencil,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";

const categoryIcons = [BookOpen, BookOpen, Sparkles, Clock, BookOpen];
const cardAccents = [
  "card-pragma card-pragma-accent-blue",
  "card-pragma card-pragma-accent-pink",
  "card-pragma card-pragma-accent-orange",
  "card-pragma card-pragma-accent-green",
  "card-pragma card-pragma-accent-purple",
];

export default function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-purple-600 to-amber-500 min-h-[55vh] flex items-center">
        <div
          className="deco-circle deco-circle-lg deco-circle-orange animate-float"
          style={{ top: "5%", right: "-3%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-green animate-float-delayed"
          style={{ bottom: "10%", left: "5%" }}
        />
        <div
          className="deco-circle deco-circle-sm deco-circle-purple animate-pulse-soft"
          style={{ top: "25%", left: "30%" }}
        />
        <div
          className="deco-ring deco-ring-md deco-ring-yellow animate-float"
          style={{ top: "60%", right: "25%" }}
        />
        <div
          className="deco-triangle deco-triangle-sm deco-triangle-green animate-float-delayed"
          style={{ top: "20%", left: "10%" }}
        />
        <div className="pattern-grid absolute inset-0 opacity-[0.08]" />
        <div
          className="sticker sticker-globe animate-float"
          style={{ top: "15%", right: "8%" }}
        >
          <Globe className="h-6 w-6 text-white/30" />
        </div>
        <div
          className="sticker sticker-book animate-float-delayed"
          style={{ bottom: "20%", left: "8%" }}
        >
          <BookOpen className="h-5 w-5 text-white/25" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="hero-title text-white drop-shadow-lg">
                Курсы подготовки к ЕГЭ
              </h1>
              <p className="hero-subtitle text-amber-100 max-w-lg mx-auto">
                Выберите подходящий формат обучения и начните подготовку к
                экзамену уже сегодня
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-pragma-gradient-section relative overflow-hidden py-16 sm:py-20">
        <div
          className="deco-circle deco-circle-md deco-circle-purple animate-pulse-soft"
          style={{ top: "15%", right: "5%" }}
        />
        <div
          className="deco-circle deco-circle-sm deco-circle-green"
          style={{ bottom: "20%", left: "8%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-orange animate-float-delayed"
          style={{ top: "30%", left: "-5%" }}
        />
        <div className="pattern-dots-sm absolute inset-0 opacity-[0.04]" />
        <div
          className="sticker sticker-pencil animate-float"
          style={{ top: "20%", left: "5%" }}
        >
          <Pencil className="h-5 w-5 text-orange-300" />
        </div>
        <div
          className="sticker sticker-globe animate-float-delayed"
          style={{ bottom: "15%", right: "8%" }}
        >
          <Globe className="h-5 w-5 text-amber-400" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 border-none"
              >
                Программы
              </Badge>
              <h2 className="section-title">
                Все <span className="text-pragma-gradient">программы</span>{" "}
                обучения
              </h2>
              <p className="section-subtitle text-muted-foreground max-w-lg mx-auto">
                Выберите программу, которая подходит именно вам
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => {
                const Icon = categoryIcons[index % categoryIcons.length];
                const accent = cardAccents[index % cardAccents.length];
                return (
                  <Card
                    key={course.id}
                    className={`relative flex flex-col ${course.popular ? "pricing-card-popular rounded-xl" : accent}`}
                  >
                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                      {course.popular && (
                        <Badge className="badge-popular px-3 py-1 text-xs">
                          <Sparkles className="mr-1 h-3 w-3" />
                          Популярное
                        </Badge>
                      )}
                      {course.isNew && (
                        <Badge className="badge-new px-3 py-1 text-xs">
                          Новинка
                        </Badge>
                      )}
                    </div>
                    <CardContent className="flex flex-col gap-5 pt-8 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 shrink-0 shadow-sm">
                          <Icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <h3 className="text-lg font-bold leading-tight">
                            {course.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1.5 text-amber-700">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-3 py-1.5 text-orange-700">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{course.lessons}</span>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {course.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100">
                              <Check className="h-3 w-3 text-green-600" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-2">
                        <div className="mb-4 flex items-baseline gap-1">
                          <span className="stat-value text-pragma-gradient">
                            {course.price}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {course.period}
                          </span>
                        </div>
                        <Link
                          href="/#cta"
                          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-lg transition-all hover:shadow-xl active:scale-[0.98] ${
                            course.popular
                              ? "btn-pragma text-white"
                              : "bg-gradient-to-r from-amber-50 to-orange-50 text-orange-700 hover:from-amber-100 hover:to-orange-100 ring-1 ring-orange-200"
                          }`}
                        >
                          Записаться
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="scale"
        className="relative overflow-hidden py-20 bg-pragma-gradient-alt"
      >
        <div
          className="deco-circle deco-circle-lg deco-circle-yellow animate-float"
          style={{ top: "-20%", right: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-purple animate-float-delayed"
          style={{ bottom: "5%", left: "10%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-yellow animate-pulse-soft"
          style={{ top: "50%", left: "20%" }}
        />
        <div
          className="deco-triangle deco-triangle-md deco-triangle-orange animate-float"
          style={{ top: "15%", right: "10%" }}
        />
        <div className="pattern-grid absolute inset-0 opacity-[0.06]" />
        <div
          className="sticker sticker-globe animate-float"
          style={{ top: "25%", left: "8%" }}
        >
          <Globe className="h-5 w-5 text-white/30" />
        </div>
        <div
          className="sticker sticker-book animate-float-delayed"
          style={{ bottom: "20%", right: "10%" }}
        >
          <BookOpen className="h-5 w-5 text-white/25" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="section-title text-white drop-shadow-lg">
                Не уверены, какой курс выбрать?
              </h2>
              <p className="text-base sm:text-lg text-amber-100 leading-relaxed max-w-lg mx-auto">
                Запишитесь на бесплатное пробное занятие — мы определим ваш
                уровень и поможем подобрать программу
              </p>
            </div>
            <Link
              href="/#cta"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-orange-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-[0.98]"
            >
              Записаться на пробный
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
