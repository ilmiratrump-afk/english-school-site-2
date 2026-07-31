import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  User,
  Users,
  Zap,
  Check,
  Sparkles,
  BookOpen,
  Award,
  Globe,
  Pencil,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { germanTeacher, germanFormats } from "@/lib/data";
import { GermanRegistrationForm } from "@/components/german-registration-form";
import { AnimatedSection } from "@/components/animated-section";

const formatIcons = [User, Users, Zap];

export default function GermanPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5" />
        </div>
        <div
          className="sticker sticker-globe animate-float"
          style={{ top: "20%", right: "10%" }}
        >
          <Globe className="h-6 w-6 text-white/30" />
        </div>
        <div
          className="sticker sticker-book animate-float-delayed"
          style={{ bottom: "25%", left: "8%" }}
        >
          <BookOpen className="h-5 w-5 text-white/25" />
        </div>
        <div className="relative container mx-auto px-4 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge className="inline-flex bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              Новое направление
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
                FlowDeutsch
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-amber-100">
                Немецкий язык для взрослых
              </p>
              <p className="text-lg text-amber-100/90 max-w-xl mx-auto leading-relaxed">
                Индивидуальные занятия, разговорный клуб и экспресс-курсы — с
                нуля до уверенного общения
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="#formats"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-amber-700 shadow-lg transition-all hover:bg-amber-50 hover:shadow-xl"
              >
                Выбрать формат
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-gradient-to-b from-amber-50/50 to-white relative overflow-hidden py-24">
        <div
          className="sticker sticker-pencil animate-float"
          style={{ top: "20%", right: "8%" }}
        >
          <Pencil className="h-5 w-5 text-amber-400" />
        </div>
        <div
          className="sticker sticker-globe animate-float-delayed"
          style={{ bottom: "20%", left: "8%" }}
        >
          <Globe className="h-5 w-5 text-orange-300" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
              <div className="shrink-0">
                <Image
                  src={germanTeacher.photo}
                  alt={germanTeacher.name}
                  width={160}
                  height={160}
                  className="h-40 w-40 md:h-48 md:w-48 rounded-full object-cover shadow-xl ring-4 ring-amber-200/60"
                />
              </div>
              <div className="space-y-6 text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {germanTeacher.greeting}
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 border-amber-200"
                  >
                    <BookOpen className="h-3 w-3 mr-1" />
                    МГЛУ
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 border-amber-200"
                  >
                    <Globe className="h-3 w-3 mr-1" />
                    Стажировка в Германии
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 border-amber-200"
                  >
                    <Award className="h-3 w-3 mr-1" />
                    20+ лет опыта
                  </Badge>
                </div>
                <div className="space-y-4">
                  {germanTeacher.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 text-sm font-bold text-amber-700">
                        {index + 1}
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="formats"
        animation="left"
        className="bg-white relative overflow-hidden py-24"
      >
        <div
          className="sticker sticker-book animate-float"
          style={{ top: "15%", left: "5%" }}
        >
          <BookOpen className="h-5 w-5 text-orange-300" />
        </div>
        <div
          className="sticker sticker-pencil animate-float-delayed"
          style={{ bottom: "20%", right: "8%" }}
        >
          <Pencil className="h-5 w-5 text-amber-400" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge
                variant="secondary"
                className="bg-amber-100 text-amber-800 border-amber-200"
              >
                Форматы обучения
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Выберите свой{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  формат
                </span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {germanFormats.map((format, index) => {
                const Icon = formatIcons[index];
                return (
                  <Card
                    key={format.id}
                    className="card-pragma group hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="flex flex-col gap-4 pt-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-amber-700" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">{format.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {format.description}
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {format.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-amber-700">
                          {format.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {format.period}
                        </span>
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
        id="registration"
        animation="right"
        className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 relative overflow-hidden py-24"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-white/5" />
        </div>
        <div
          className="sticker sticker-globe animate-float"
          style={{ top: "25%", right: "10%" }}
        >
          <Globe className="h-5 w-5 text-white/30" />
        </div>
        <div
          className="sticker sticker-book animate-float-delayed"
          style={{ bottom: "20%", left: "8%" }}
        >
          <BookOpen className="h-5 w-5 text-white/25" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-lg">
                Запишитесь на пробное занятие
              </h2>
              <p className="text-lg text-amber-100 leading-relaxed max-w-lg mx-auto">
                Выберите подходящий формат и мы свяжемся с вами для обсуждения
                деталей
              </p>
            </div>
            <Card className="text-left border-none shadow-2xl">
              <CardContent className="pt-6 bg-white rounded-xl">
                <GermanRegistrationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
