import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Clock,
  Target,
  Check,
  Sparkles,
  Calendar,
  Monitor,
  Pencil,
  Globe,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  site,
  advantages,
  teachers,
  pricingPlans,
  methodology,
  ctaSection,
} from "@/lib/data";
import { GroupRegistrationForm } from "@/components/group-registration-form";
import { SeminarRegistrationForm } from "@/components/seminar-registration-form";
import { AnimatedSection } from "@/components/animated-section";

const advantageIcons = [Target, BookOpen, Clock, Users];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 min-h-[90vh] flex items-center">
        <div
          className="deco-circle deco-circle-lg deco-circle-orange animate-float"
          style={{ top: "10%", right: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-lg deco-circle-green animate-float-delayed"
          style={{ bottom: "5%", left: "-8%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-purple animate-pulse-soft"
          style={{ top: "30%", left: "15%" }}
        />
        <div
          className="deco-circle deco-circle-sm deco-circle-gold"
          style={{ bottom: "25%", right: "20%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-yellow animate-float"
          style={{ top: "60%", right: "15%" }}
        />
        <div
          className="deco-triangle deco-triangle-md deco-triangle-green animate-float-delayed"
          style={{ top: "15%", left: "8%" }}
        />
        <div className="pattern-grid absolute inset-0 opacity-[0.08]" />
        <div
          className="sticker sticker-book animate-float"
          style={{ top: "15%", right: "8%" }}
        >
          <BookOpen className="h-6 w-6 text-white/30" />
        </div>
        <div
          className="sticker sticker-globe animate-float-delayed"
          style={{ bottom: "20%", right: "12%" }}
        >
          <Globe className="h-5 w-5 text-white/25" />
        </div>
        <div
          className="sticker sticker-pencil animate-wiggle"
          style={{ top: "40%", left: "5%" }}
        >
          <Pencil className="h-5 w-5 text-white/25" />
        </div>
        <div className="relative container mx-auto px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-6">
              <h1 className="hero-title text-white drop-shadow-lg">
                {site.name}
              </h1>
              <p className="hero-subtitle text-amber-100 font-medium">
                {site.tagline}
              </p>
              <p className="text-lg text-amber-200/90 max-w-xl mx-auto leading-relaxed">
                {site.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="#cta"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-orange-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-[0.98]"
              >
                {site.cta}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30"
              >
                Наши курсы
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-pragma-gradient-section relative overflow-hidden py-24">
        <div
          className="deco-circle deco-circle-md deco-circle-purple animate-pulse-soft"
          style={{ top: "10%", left: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-sm deco-circle-green"
          style={{ bottom: "15%", right: "10%" }}
        />
        <div
          className="deco-ring deco-ring-md deco-ring-orange animate-float-delayed"
          style={{ top: "50%", right: "20%" }}
        />
        <div className="pattern-dots-sm absolute inset-0 opacity-[0.04]" />
        <div
          className="sticker sticker-globe animate-float"
          style={{ top: "20%", left: "5%" }}
        >
          <Globe className="h-5 w-5 text-orange-300" />
        </div>
        <div
          className="sticker sticker-pencil animate-float-delayed"
          style={{ bottom: "25%", right: "8%" }}
        >
          <Pencil className="h-5 w-5 text-amber-400" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            <div className="text-center space-y-4">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 border-none"
              >
                Преимущества
              </Badge>
              <h2 className="section-title">
                Почему выбирают{" "}
                <span className="text-pragma-gradient">нас</span>
              </h2>
              <p className="section-subtitle text-muted-foreground max-w-lg mx-auto">
                Четыре причины, по которым школьники и родители доверяют нам
                подготовку к ЕГЭ
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item, index) => {
                const Icon = advantageIcons[index];
                const accentClasses = [
                  "card-pragma card-pragma-accent-blue",
                  "card-pragma card-pragma-accent-pink",
                  "card-pragma card-pragma-accent-green",
                  "card-pragma card-pragma-accent-orange",
                ];
                return (
                  <Card
                    key={item.title}
                    size="sm"
                    className={accentClasses[index]}
                  >
                    <CardContent className="flex flex-col items-center text-center gap-3 pt-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 shadow-sm">
                        <Icon className="h-7 w-7 text-orange-600" />
                      </div>
                      <h3 className="font-bold text-base">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="left"
        className="relative overflow-hidden py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
      >
        <div
          className="deco-circle deco-circle-lg deco-circle-orange animate-float"
          style={{ top: "-10%", right: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-yellow animate-float-delayed"
          style={{ bottom: "5%", left: "10%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-green animate-pulse-soft"
          style={{ top: "20%", left: "-10%" }}
        />
        <div
          className="deco-triangle deco-triangle-sm deco-triangle-orange animate-wiggle"
          style={{ bottom: "25%", right: "15%" }}
        />
        <div className="pattern-dots-lg absolute inset-0 opacity-[0.03]" />
        <div
          className="sticker sticker-glasses animate-float"
          style={{ top: "30%", right: "8%" }}
        >
          <Globe className="h-6 w-6 text-orange-300" />
        </div>
        <div
          className="sticker sticker-pencil animate-float-delayed"
          style={{ bottom: "15%", left: "5%" }}
        >
          <BookOpen className="h-5 w-5 text-amber-400" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
              <div className="shrink-0">
                <Image
                  src={teachers[0].photo}
                  alt={teachers[0].name}
                  width={160}
                  height={160}
                  className="h-40 w-40 md:h-48 md:w-48 rounded-full object-cover shadow-xl ring-4 ring-white/80"
                />
              </div>
              <div className="space-y-6 text-center md:text-left flex-1">
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                  {teachers[0].greeting}
                </p>
                <div className="space-y-4">
                  {teachers[0].steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 text-sm font-bold text-orange-600">
                        {index + 1}
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-[0.98]"
                  >
                    Выбрать курс
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#cta"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-orange-600 shadow-lg ring-1 ring-orange-200 transition-all hover:shadow-xl hover:scale-105 active:scale-[0.98]"
                  >
                    Предзаписаться в группу
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="left"
        className="relative overflow-hidden py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
      >
        <div
          className="deco-circle deco-circle-md deco-circle-orange animate-pulse-soft"
          style={{ top: "5%", right: "10%" }}
        />
        <div
          className="deco-circle deco-circle-sm deco-circle-yellow animate-float-delayed"
          style={{ bottom: "10%", left: "5%" }}
        />
        <div
          className="deco-ring deco-ring-md deco-ring-purple animate-float"
          style={{ top: "30%", left: "15%" }}
        />
        <div className="pattern-dots-sm absolute inset-0 opacity-[0.04]" />
        <div
          className="sticker sticker-book animate-float"
          style={{ top: "15%", left: "8%" }}
        >
          <BookOpen className="h-5 w-5 text-orange-300" />
        </div>
        <div
          className="sticker sticker-globe animate-float-delayed"
          style={{ bottom: "20%", right: "8%" }}
        >
          <Globe className="h-5 w-5 text-amber-400" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 border-none"
              >
                Методика
              </Badge>
              <h2 className="section-title">{methodology.title}</h2>
              <p className="section-subtitle text-muted-foreground max-w-2xl mx-auto">
                {methodology.description}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {methodology.steps.map((step, index) => (
                <Card
                  key={step.title}
                  className="card-pragma card-pragma-accent-purple"
                >
                  <CardContent className="flex flex-col items-start gap-4 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-xl font-bold text-orange-600 shadow-sm">
                      {index + 1}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="right"
        className="relative overflow-hidden py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
      >
        <div
          className="deco-circle deco-circle-lg deco-circle-purple animate-float"
          style={{ top: "-10%", left: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-green animate-float-delayed"
          style={{ bottom: "10%", right: "5%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-orange animate-pulse-soft"
          style={{ top: "30%", right: "15%" }}
        />
        <div
          className="deco-triangle deco-triangle-sm deco-triangle-green animate-wiggle"
          style={{ bottom: "20%", left: "10%" }}
        />
        <div className="pattern-dots-sm absolute inset-0 opacity-[0.04]" />
        <div
          className="sticker sticker-glasses animate-float"
          style={{ top: "20%", right: "5%" }}
        >
          <BookOpen className="h-5 w-5 text-purple-400" />
        </div>
        <div
          className="sticker sticker-pencil animate-float-delayed"
          style={{ bottom: "30%", left: "8%" }}
        >
          <Pencil className="h-5 w-5 text-orange-400" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 border-none"
              >
                Бесплатно
              </Badge>
              <h2 className="section-title">
                Бесплатный семинар по подготовке к&nbsp;ЕГЭ
              </h2>
              <p className="section-subtitle text-muted-foreground max-w-2xl mx-auto">
                Приглашаем на бесплатный онлайн-семинар, где разберём реальные
                задания ЕГЭ, покажем эффективные стратегии решения и ответим на
                ваши вопросы
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div className="space-y-6">
                <Card className="card-pragma">
                  <CardContent className="flex flex-col gap-5 pt-6">
                    <h3 className="text-xl font-bold">Детали семинара</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                          <Calendar className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Дата</p>
                          <p className="font-semibold">1 августа 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                          <Clock className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Время</p>
                          <p className="font-semibold">17:00 МСК</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                          <Monitor className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Формат
                          </p>
                          <p className="font-semibold">Онлайн, 60 минут</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                          <BookOpen className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Для кого
                          </p>
                          <p className="font-semibold">
                            Ученики 10–11 классов и их родители
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-pragma card-pragma-accent-orange">
                  <CardContent className="flex flex-col gap-3 pt-6">
                    <h3 className="font-bold">Что вас ждёт:</h3>
                    <ul className="space-y-2">
                      {[
                        "Разбор реальных заданий ЕГЭ по английскому",
                        "Эффективные стратегии выполнения",
                        "Типичные ошибки и как их избежать",
                        "Ответы на вопросы в прямом эфире",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100">
                            <Check className="h-3 w-3 text-amber-600" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-xl">
                <CardContent className="pt-6 bg-white rounded-xl">
                  <div className="mb-4 text-center">
                    <h3 className="text-lg font-bold">Записаться на семинар</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Заполните форму — мы пришлём ссылку на подключение
                    </p>
                  </div>
                  <SeminarRegistrationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="right"
        className="bg-section-bg-alt-1 relative overflow-hidden py-24"
      >
        <div
          className="deco-circle deco-circle-md deco-circle-green animate-pulse-soft"
          style={{ top: "20%", right: "5%" }}
        />
        <div
          className="deco-ring deco-ring-sm deco-ring-yellow animate-float"
          style={{ bottom: "15%", left: "10%" }}
        />
        <div
          className="deco-triangle deco-triangle-sm deco-triangle-orange animate-float-delayed"
          style={{ top: "10%", right: "15%" }}
        />
        <div className="pattern-dots-sm absolute inset-0 opacity-[0.04]" />
        <div
          className="sticker sticker-book animate-float"
          style={{ top: "25%", left: "8%" }}
        >
          <BookOpen className="h-5 w-5 text-orange-300" />
        </div>
        <div
          className="sticker sticker-globe animate-float-delayed"
          style={{ bottom: "20%", right: "8%" }}
        >
          <Globe className="h-5 w-5 text-amber-400" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            <div className="text-center space-y-4">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 border-none"
              >
                Цены
              </Badge>
              <h2 className="section-title">
                Форматы и <span className="text-pragma-gradient">цены</span>
              </h2>
              <p className="section-subtitle text-muted-foreground max-w-lg mx-auto">
                Выберите удобный формат занятий
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 max-w-4xl mx-auto">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative ${plan.popular ? "pricing-card-popular rounded-xl" : "card-pragma"}`}
                >
                  {plan.popular && (
                    <Badge className="badge-popular absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs">
                      <Sparkles className="mr-1 h-3 w-3" />
                      Популярный
                    </Badge>
                  )}
                  {plan.isNew && (
                    <Badge className="badge-new absolute -top-3 right-4 px-3 py-1 text-xs">
                      Новинка
                    </Badge>
                  )}
                  <CardContent className="flex flex-col gap-6 pt-8">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="stat-value text-pragma-gradient">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100">
                            <Check className="h-3 w-3 text-orange-600" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#cta"
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-lg transition-all hover:shadow-xl active:scale-[0.98] ${
                        plan.popular
                          ? "btn-pragma text-white"
                          : "bg-gradient-to-r from-amber-50 to-orange-50 text-orange-700 hover:from-amber-100 hover:to-orange-100 ring-1 ring-orange-200"
                      }`}
                    >
                      Выбрать
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="cta"
        className="relative overflow-hidden py-24 bg-pragma-gradient"
      >
        <div
          className="deco-circle deco-circle-lg deco-circle-yellow animate-float"
          style={{ top: "-15%", right: "-8%" }}
        />
        <div
          className="deco-circle deco-circle-lg deco-circle-green animate-float-delayed"
          style={{ bottom: "-10%", left: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-purple animate-pulse-soft"
          style={{ top: "40%", left: "10%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-yellow animate-float-delayed"
          style={{ top: "10%", right: "20%" }}
        />
        <div
          className="deco-triangle deco-triangle-md deco-triangle-green animate-float"
          style={{ bottom: "20%", right: "15%" }}
        />
        <div className="pattern-grid absolute inset-0 opacity-[0.06]" />
        <div
          className="sticker sticker-globe animate-float"
          style={{ top: "25%", left: "8%" }}
        >
          <Globe className="h-6 w-6 text-white/30" />
        </div>
        <div
          className="sticker sticker-book animate-float-delayed"
          style={{ bottom: "20%", right: "10%" }}
        >
          <BookOpen className="h-5 w-5 text-white/25" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
              <Users className="h-10 w-10 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="section-title text-white drop-shadow-lg">
                {ctaSection.title}
              </h2>
              <p className="text-lg text-amber-100 leading-relaxed max-w-lg mx-auto">
                {ctaSection.description}
              </p>
            </div>
            <Card className="text-left border-none shadow-2xl">
              <CardContent className="pt-6 bg-white rounded-xl">
                <GroupRegistrationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
