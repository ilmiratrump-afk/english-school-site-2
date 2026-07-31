import {
  FileText,
  ArrowRight,
  Star,
  BookOpen,
  Globe,
  Pencil,
} from "lucide-react";
import Link from "next/link";
import { demoMaterials } from "@/lib/data";
import { DemoSections } from "@/components/demo-task-viewer";
import { AnimatedSection } from "@/components/animated-section";

export default function DemoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-orange-500 to-emerald-500 min-h-[55vh] flex items-center">
        <div
          className="deco-circle deco-circle-lg deco-circle-gold animate-float"
          style={{ top: "5%", left: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-green animate-float-delayed"
          style={{ bottom: "10%", right: "8%" }}
        />
        <div
          className="deco-circle deco-circle-sm deco-circle-purple animate-pulse-soft"
          style={{ top: "30%", right: "25%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-yellow animate-float-delayed"
          style={{ bottom: "20%", left: "15%" }}
        />
        <div
          className="deco-triangle deco-triangle-md deco-triangle-green animate-wiggle"
          style={{ top: "15%", right: "10%" }}
        />
        <div className="pattern-grid absolute inset-0 opacity-[0.08]" />
        <div
          className="sticker sticker-book animate-float"
          style={{ top: "20%", right: "8%" }}
        >
          <BookOpen className="h-6 w-6 text-white/30" />
        </div>
        <div
          className="sticker sticker-pencil animate-float-delayed"
          style={{ bottom: "20%", left: "8%" }}
        >
          <Pencil className="h-5 w-5 text-white/25" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="hero-title text-white drop-shadow-lg">
                Демо-материалы и тесты
              </h1>
              <p className="hero-subtitle text-amber-100 max-w-lg mx-auto">
                Попробуйте задания ЕГЭ прямо сейчас. Примеры из всех разделов
                экзамена, пробный тест и демо-урок.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-section-bg-alt-2 relative overflow-hidden py-16 sm:py-16 sm:py-20">
        <div
          className="deco-circle deco-circle-md deco-circle-orange animate-pulse-soft"
          style={{ top: "10%", right: "5%" }}
        />
        <div
          className="deco-circle deco-circle-sm deco-circle-green"
          style={{ bottom: "15%", left: "8%" }}
        />
        <div
          className="deco-ring deco-ring-md deco-ring-purple animate-float"
          style={{ top: "40%", left: "10%" }}
        />
        <div className="pattern-dots-lg absolute inset-0 opacity-[0.03]" />
        <div
          className="sticker sticker-globe animate-float"
          style={{ top: "20%", left: "5%" }}
        >
          <Globe className="h-5 w-5 text-amber-400" />
        </div>
        <div
          className="sticker sticker-book animate-float-delayed"
          style={{ bottom: "20%", right: "8%" }}
        >
          <BookOpen className="h-5 w-5 text-orange-300" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5">
                <BookOpen className="h-4 w-4 text-amber-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  Попробуй свои силы
                </span>
              </div>
              <h2 className="section-title">
                Разделы <span className="text-pragma-gradient">экзамена</span>
              </h2>
              <p className="section-subtitle text-muted-foreground max-w-lg mx-auto">
                Ознакомьтесь с заданиями из всех разделов ЕГЭ по английскому
                языку
              </p>
            </div>
            <DemoSections materials={demoMaterials} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="scale"
        className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500"
      >
        <div
          className="deco-circle deco-circle-lg deco-circle-orange animate-float"
          style={{ top: "-15%", left: "-8%" }}
        />
        <div
          className="deco-circle deco-circle-lg deco-circle-green animate-float-delayed"
          style={{ bottom: "-10%", right: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-purple animate-pulse-soft"
          style={{ top: "30%", right: "15%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-yellow animate-float"
          style={{ top: "10%", right: "25%" }}
        />
        <div
          className="deco-triangle deco-triangle-sm deco-triangle-green animate-float-delayed"
          style={{ bottom: "25%", left: "10%" }}
        />
        <div className="pattern-grid absolute inset-0 opacity-[0.06]" />
        <div
          className="sticker sticker-globe animate-float"
          style={{ top: "20%", left: "10%" }}
        >
          <Globe className="h-5 w-5 text-white/30" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="section-title text-white drop-shadow-lg">
                Готовы к полноценной подготовке?
              </h2>
              <p className="text-base sm:text-lg text-amber-100 leading-relaxed max-w-lg mx-auto">
                На полном курсе вас ждут проверка заданий преподавателем,
                подробный разбор ошибок, пробные экзамены ежемесячно и
                индивидуальный план подготовки. Начните заниматься уже сегодня!
              </p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-orange-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-[0.98]"
            >
              Выбрать курс
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
