"use client";

import { useState } from "react";
import {
  Eye,
  Check,
  X,
  BookOpen,
  Headphones,
  PenTool,
  MessageSquare,
  FileText,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { DemoMaterial } from "@/lib/data";

const typeIcons = {
  task: FileText,
  test: BookOpen,
  lesson: PenTool,
};

const typeLabels: Record<string, string> = {
  task: "Задание",
  test: "Тест",
  lesson: "Урок",
};

const sectionIcons: Record<string, typeof BookOpen> = {
  Чтение: BookOpen,
  Аудирование: Headphones,
  "Грамматика и лексика": PenTool,
  "Устная часть": MessageSquare,
  Письмо: FileText,
  "Пробный тест": BookOpen,
  "Демо-урок": PenTool,
};

function TaskContent({ material }: { material: DemoMaterial }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setShowResults(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Инструкция</h3>
        <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
          {material.taskContent.instruction}
        </p>
      </div>

      {material.taskContent.text && (
        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm whitespace-pre-line leading-relaxed">
            {material.taskContent.text}
          </p>
        </div>
      )}

      <div className="space-y-4">
        {material.taskContent.questions.map((q) => (
          <div key={q.id} className="space-y-2">
            <p className="text-sm font-medium">{q.text}</p>
            {q.options ? (
              <div className="flex flex-wrap gap-2">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelect(q.id, opt)}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                        isSelected
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "hover:border-muted-foreground/30 hover:bg-muted"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-lg border p-3">
                <textarea
                  className="w-full min-h-[80px] resize-y text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                  placeholder="Напишите свой ответ здесь..."
                  value={answers[q.id] || ""}
                  onChange={(e) => handleSelect(q.id, e.target.value)}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setShowResults(true);
          }}
        >
          <Check className="h-4 w-4" />
          Проверить
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setAnswers({});
            setShowResults(false);
          }}
        >
          <X className="h-4 w-4" />
          Сбросить
        </Button>
      </div>

      {showResults && (
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm font-medium text-primary">
            Ответы записаны! На полном курсе вы получите проверку с
            комментариями преподавателя.
          </p>
        </div>
      )}
    </div>
  );
}

export function DemoMaterialCard({ material }: { material: DemoMaterial }) {
  const Icon = sectionIcons[material.sectionTitle] || typeIcons[material.type];
  const [open, setOpen] = useState(false);

  const accentMap: Record<string, string> = {
    Чтение: "card-pragma card-pragma-accent-blue",
    Аудирование: "card-pragma card-pragma-accent-pink",
    "Грамматика и лексика": "card-pragma card-pragma-accent-purple",
    "Устная часть": "card-pragma card-pragma-accent-orange",
    Письмо: "card-pragma card-pragma-accent-green",
    "Пробный тест": "card-pragma card-pragma-accent-blue",
    "Демо-урок": "card-pragma card-pragma-accent-pink",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card
        className={`${accentMap[material.sectionTitle] || "card-pragma"} flex flex-col`}
      >
        <CardContent className="flex flex-col gap-4 pt-6 flex-1">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100">
              <Icon className="size-5 text-indigo-600" />
            </div>
            <div className="min-w-0 space-y-1">
              <h3 className="text-base font-bold leading-tight">
                {material.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {material.sectionTitle}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {material.description}
          </p>

          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="text-xs bg-indigo-50 text-indigo-700 border-none"
            >
              {typeLabels[material.type]}
            </Badge>
            {material.isNew && (
              <Badge className="badge-new px-2 py-0.5 text-[10px]">
                Новинка
              </Badge>
            )}
          </div>

          <div className="mt-auto pt-2">
            <DialogTrigger
              render={
                <Button
                  variant="default"
                  size="sm"
                  className="w-full gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none hover:from-indigo-600 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
                >
                  <Eye className="size-4" />
                  Посмотреть задание
                </Button>
              }
            />
          </div>
        </CardContent>
      </Card>

      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge
              variant="secondary"
              className="text-xs bg-indigo-50 text-indigo-700 border-none"
            >
              {typeLabels[material.type]}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {material.sectionTitle}
            </span>
          </div>
          <DialogTitle>{material.title}</DialogTitle>
          <DialogDescription>{material.description}</DialogDescription>
        </DialogHeader>
        <TaskContent material={material} />
      </DialogContent>
    </Dialog>
  );
}

export function DemoSections({ materials }: { materials: DemoMaterial[] }) {
  const sections = [...new Set(materials.map((m) => m.sectionTitle))];

  return (
    <div className="space-y-12">
      {sections.map((section) => {
        const sectionMaterials = materials.filter(
          (m) => m.sectionTitle === section
        );
        const Icon = sectionIcons[section] || FileText;
        return (
          <div key={section} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm">
                <Icon className="size-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{section}</h2>
                <p className="text-sm text-muted-foreground">
                  {sectionMaterials.length}{" "}
                  {sectionMaterials.length === 1 ? "материал" : "материала"}
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectionMaterials.map((material) => (
                <DemoMaterialCard key={material.id} material={material} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
