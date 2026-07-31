import Link from "next/link";
import { PenTool, ArrowRight, BookOpen, Globe, Pencil } from "lucide-react";
import { exercises, exerciseTopics } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";
import { ExerciseViewer } from "@/components/exercise-viewer";

export default function ExercisesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-orange-500 to-amber-500 min-h-[55vh] flex items-center">
        <div
          className="deco-circle deco-circle-lg deco-circle-purple animate-float"
          style={{ top: "5%", right: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-green animate-float-delayed"
          style={{ bottom: "10%", left: "5%" }}
        />
        <div
          className="deco-circle deco-circle-sm deco-circle-gold animate-pulse-soft"
          style={{ top: "30%", left: "25%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-yellow animate-float"
          style={{ bottom: "20%", right: "15%" }}
        />
        <div
          className="deco-triangle deco-triangle-md deco-triangle-green animate-float-delayed"
          style={{ top: "15%", left: "10%" }}
        />
        <div className="pattern-grid absolute inset-0 opacity-[0.08]" />
        <div
          className="sticker sticker-book animate-float"
          style={{ top: "15%", right: "8%" }}
        >
          <BookOpen className="h-6 w-6 text-white/30" />
        </div>
        <div
          className="sticker sticker-pencil animate-float-delayed"
          style={{ bottom: "25%", left: "8%" }}
        >
          <Pencil className="h-5 w-5 text-white/25" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
              <PenTool className="h-10 w-10 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="hero-title text-white drop-shadow-lg">
                Сборник упражнений
              </h1>
              <p className="hero-subtitle text-amber-100 max-w-lg mx-auto">
                Интерактивные упражнения для отработки навыков. Выбирайте тему и
                проверяйте свои знания сразу после ответа.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-pragma-gradient-section relative overflow-hidden py-16 sm:py-20">
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
          style={{ bottom: "20%", right: "8%" }}
        >
          <Pencil className="h-5 w-5 text-amber-400" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title">Темы упражнений</h2>
            <p className="text-muted-foreground mt-4">
              Выберите тему, чтобы начать практиковаться.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ExerciseViewer topics={exerciseTopics} exercises={exercises} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="scale"
        className="relative overflow-hidden py-20 bg-pragma-gradient-alt"
      >
        <div
          className="deco-circle deco-circle-lg deco-circle-yellow animate-float"
          style={{ top: "-10%", right: "-5%" }}
        />
        <div
          className="deco-circle deco-circle-md deco-circle-purple animate-float-delayed"
          style={{ bottom: "10%", left: "5%" }}
        />
        <div
          className="deco-ring deco-ring-lg deco-ring-yellow animate-pulse-soft"
          style={{ top: "20%", left: "15%" }}
        />
        <div
          className="deco-triangle deco-triangle-sm deco-triangle-orange animate-wiggle"
          style={{ bottom: "25%", right: "15%" }}
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
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="section-title text-white drop-shadow-lg">
                Готовы проверить себя?
              </h2>
              <p className="text-lg text-amber-100">
                {Array.isArray(exercises) && exercises.length > 0
                  ? `Доступно ${exercises.length} упражнений по ${exerciseTopics.length} темам.`
                  : "Упражнения скоро появятся."}
              </p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-orange-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-[0.98]"
            >
              Выбрать курс
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
