import Link from "next/link";
import {
  Play,
  Clock,
  Lock,
  BookOpen,
  ArrowRight,
  Film,
  Globe,
  Pencil,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { lectures } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";

export default function LecturesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-500 to-emerald-500 min-h-[55vh] flex items-center">
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
        <div className="relative container mx-auto px-4 py-16 sm:py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
              <Film className="h-10 w-10 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="hero-title text-white drop-shadow-lg">
                Видеолекции
              </h1>
              <p className="hero-subtitle text-amber-100 max-w-lg mx-auto">
                Полный разбор всех тем ЕГЭ в формате видеоуроков. Смотрите в
                любое удобное время.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-pragma-gradient-section relative overflow-hidden py-16 sm:py-16 sm:py-20">
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
                Платная опция
              </Badge>
              <h2 className="section-title">
                Все <span className="text-pragma-gradient">видеолекции</span>
              </h2>
              <p className="section-subtitle text-muted-foreground max-w-lg mx-auto">
                {lectures.length} уроков по всем разделам ЕГЭ. Доступны в любом
                курсе обучения.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {lectures.map((lecture, index) => {
                const accentVariants = [
                  "card-pragma card-pragma-accent-blue",
                  "card-pragma card-pragma-accent-pink",
                  "card-pragma card-pragma-accent-orange",
                  "card-pragma card-pragma-accent-green",
                  "card-pragma card-pragma-accent-purple",
                ];
                const accent = accentVariants[index % accentVariants.length];
                return (
                  <Card
                    key={lecture.id}
                    className={`relative flex flex-col ${accent}`}
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group overflow-hidden rounded-t-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute inset-0 pattern-dots-sm opacity-[0.08]" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-white/30 transition-transform group-hover:scale-110">
                        <Play className="h-6 w-6 text-white ml-0.5" />
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <div className="inline-flex items-center gap-1 rounded-md bg-black/50 backdrop-blur-sm px-2 py-1 text-xs text-white/90">
                          <Clock className="h-3 w-3" />
                          {lecture.duration}
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-orange-500/70 backdrop-blur-sm text-white border-none text-xs">
                          {lecture.section}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="flex flex-col gap-4 pt-5 flex-1">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold leading-tight">
                          {lecture.topic}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {lecture.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-2">
                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1.5 text-amber-700 text-xs font-medium">
                          <Lock className="h-3.5 w-3.5" />
                          Доступно в курсе
                        </div>
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
        className="relative overflow-hidden py-16 sm:py-20 bg-pragma-gradient-alt"
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
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="section-title text-white drop-shadow-lg">
                Получите полный доступ к лекциям
              </h2>
              <p className="text-base sm:text-lg text-amber-100 leading-relaxed max-w-lg mx-auto">
                Все видеолекции доступны при покупке любого курса. Запишитесь
                сейчас и смотрите уроки в любое время.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-orange-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-[0.98]"
              >
                Выбрать курс
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/#cta"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500/20 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl ring-1 ring-white/30 transition-all hover:bg-orange-500/30 hover:shadow-2xl hover:scale-105 active:scale-[0.98]"
              >
                Записаться на пробный
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
