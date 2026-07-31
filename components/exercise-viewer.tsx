"use client";

import { useState, useMemo } from "react";
import { Check, X, RefreshCw, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ChoiceQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

interface FillQuestion {
  id: string;
  text: string;
  correctAnswer: string;
}

interface MatchPair {
  id: string;
  left: string;
  right: string;
}

type Exercise =
  | {
      id: string;
      type: "choice";
      title: string;
      instruction: string;
      text?: string;
      questions: ChoiceQuestion[];
    }
  | {
      id: string;
      type: "fill";
      title: string;
      instruction: string;
      text?: string;
      questions: FillQuestion[];
    }
  | {
      id: string;
      type: "match";
      title: string;
      instruction: string;
      text?: string;
      pairs: MatchPair[];
    };

interface Topic {
  id: string;
  title: string;
  description: string;
  exerciseIds: string[];
}

const typeLabels: Record<string, string> = {
  choice: "Выбор ответа",
  fill: "Заполнение",
  match: "Сопоставление",
};

const typeColors: Record<string, string> = {
  choice: "bg-blue-50 text-blue-700",
  fill: "bg-purple-50 text-purple-700",
  match: "bg-amber-50 text-amber-700",
};

function ChoiceExercise({
  exercise,
}: {
  exercise: Exercise & { type: "choice" };
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const allAnswered = exercise.questions.every(
    (q) => answers[q.id] && answers[q.id].trim() !== ""
  );

  const results = useMemo(() => {
    if (!checked) return null;
    const correct = exercise.questions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length;
    return {
      correct,
      total: exercise.questions.length,
      details: exercise.questions.map((q) => ({
        id: q.id,
        isCorrect: answers[q.id] === q.correctAnswer,
        correctAnswer: q.correctAnswer,
      })),
    };
  }, [checked, answers, exercise.questions]);

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
        {exercise.instruction}
      </p>

      {exercise.text && (
        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm whitespace-pre-line leading-relaxed">
            {exercise.text}
          </p>
        </div>
      )}

      <div className="space-y-4">
        {exercise.questions.map((q) => (
          <div key={q.id} className="space-y-2">
            <p className="text-sm font-medium">{q.text}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt) => {
                const isSelected = answers[q.id] === opt;
                let btnClass =
                  "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-colors ";

                if (checked) {
                  if (opt === q.correctAnswer) {
                    btnClass +=
                      "border-green-400 bg-green-50 text-green-700 font-medium ring-1 ring-green-300";
                  } else if (isSelected && opt !== q.correctAnswer) {
                    btnClass +=
                      "border-red-300 bg-red-50 text-red-600 font-medium";
                  } else {
                    btnClass +=
                      "border-muted-foreground/20 text-muted-foreground";
                  }
                } else if (isSelected) {
                  btnClass +=
                    "border-indigo-400 bg-indigo-50 text-indigo-700 font-medium ring-1 ring-indigo-200";
                } else {
                  btnClass +=
                    "border-border hover:border-muted-foreground/30 hover:bg-muted cursor-pointer";
                }

                return (
                  <button
                    key={opt}
                    onClick={() => {
                      if (checked) return;
                      setAnswers((prev) => ({ ...prev, [q.id]: opt }));
                    }}
                    className={btnClass}
                    disabled={checked}
                  >
                    {opt}
                    {checked && opt === q.correctAnswer && (
                      <Check className="h-3.5 w-3.5 text-green-600" />
                    )}
                    {checked && isSelected && opt !== q.correctAnswer && (
                      <X className="h-3.5 w-3.5 text-red-500" />
                    )}
                  </button>
                );
              })}
            </div>
            {checked && (
              <div
                className={`flex items-center gap-1.5 text-xs ${
                  results?.details.find((d) => d.id === q.id)?.isCorrect
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {results?.details.find((d) => d.id === q.id)?.isCorrect ? (
                  <>
                    <Check className="h-3 w-3" />
                    Верно
                  </>
                ) : (
                  <>
                    <X className="h-3 w-3" />
                    Правильный ответ: {q.correctAnswer}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-2">
        {!checked ? (
          <Button
            size="sm"
            className="gap-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none hover:from-indigo-600 hover:to-purple-700"
            onClick={() => setChecked(true)}
            disabled={!allAnswered}
          >
            <Check className="h-4 w-4" />
            Проверить
          </Button>
        ) : (
          <div className="flex items-center gap-3 w-full">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span
                className={
                  results && results.correct === results.total
                    ? "text-green-600"
                    : results && results.correct >= results.total / 2
                      ? "text-amber-600"
                      : "text-red-600"
                }
              >
                {results?.correct} / {results?.total}
              </span>
              <span className="text-muted-foreground font-normal">
                правильных
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 ml-auto"
              onClick={handleReset}
            >
              <RefreshCw className="h-4 w-4" />
              Попробовать снова
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function FillExercise({ exercise }: { exercise: Exercise & { type: "fill" } }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const allAnswered = exercise.questions.every(
    (q) => answers[q.id] && answers[q.id].trim() !== ""
  );

  const results = useMemo(() => {
    if (!checked) return null;
    const correct = exercise.questions.filter((q) => {
      const userAnswer = (answers[q.id] || "").trim().toLowerCase();
      const correctAnswer = q.correctAnswer.trim().toLowerCase();
      return userAnswer === correctAnswer;
    }).length;
    return {
      correct,
      total: exercise.questions.length,
      details: exercise.questions.map((q) => ({
        id: q.id,
        isCorrect:
          (answers[q.id] || "").trim().toLowerCase() ===
          q.correctAnswer.trim().toLowerCase(),
        correctAnswer: q.correctAnswer,
      })),
    };
  }, [checked, answers, exercise.questions]);

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
        {exercise.instruction}
      </p>

      <div className="space-y-4">
        {exercise.questions.map((q) => {
          const detail = results?.details.find((d) => d.id === q.id);
          return (
            <div key={q.id} className="space-y-1.5">
              <p className="text-sm font-medium">{q.text}</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={answers[q.id] || ""}
                  onChange={(e) => {
                    if (checked) return;
                    setAnswers((prev) => ({
                      ...prev,
                      [q.id]: e.target.value,
                    }));
                  }}
                  disabled={checked}
                  placeholder="Введите ответ..."
                  className={`flex h-9 rounded-lg border px-3 text-sm bg-transparent outline-none transition-colors w-full max-w-xs ${
                    checked
                      ? detail?.isCorrect
                        ? "border-green-400 bg-green-50 text-green-700 ring-1 ring-green-300"
                        : "border-red-300 bg-red-50 text-red-600"
                      : "border-border focus:border-indigo-400"
                  }`}
                />
                {checked && !detail?.isCorrect && (
                  <span className="text-xs text-red-500">
                    {q.correctAnswer}
                  </span>
                )}
                {checked && detail?.isCorrect && (
                  <Check className="h-4 w-4 text-green-600 shrink-0" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 pt-2">
        {!checked ? (
          <Button
            size="sm"
            className="gap-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none hover:from-indigo-600 hover:to-purple-700"
            onClick={() => setChecked(true)}
            disabled={!allAnswered}
          >
            <Check className="h-4 w-4" />
            Проверить
          </Button>
        ) : (
          <div className="flex items-center gap-3 w-full">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span
                className={
                  results && results.correct === results.total
                    ? "text-green-600"
                    : results && results.correct >= results.total / 2
                      ? "text-amber-600"
                      : "text-red-600"
                }
              >
                {results?.correct} / {results?.total}
              </span>
              <span className="text-muted-foreground font-normal">
                правильных
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 ml-auto"
              onClick={handleReset}
            >
              <RefreshCw className="h-4 w-4" />
              Попробовать снова
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function MatchExercise({
  exercise,
}: {
  exercise: Exercise & { type: "match" };
}) {
  const rights = exercise.pairs.map((p) => p.right);
  const [shuffledRight] = useState<string[]>(rights);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const allAnswered = exercise.pairs.every(
    (p) => answers[p.id] && answers[p.id].trim() !== ""
  );

  const results = useMemo(() => {
    if (!checked) return null;
    const correct = exercise.pairs.filter(
      (p) => answers[p.id] === p.right
    ).length;
    return {
      correct,
      total: exercise.pairs.length,
      details: exercise.pairs.map((p) => ({
        id: p.id,
        isCorrect: answers[p.id] === p.right,
        correctAnswer: p.right,
      })),
    };
  }, [checked, answers, exercise.pairs]);

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
        {exercise.instruction}
      </p>

      <div className="space-y-3">
        {exercise.pairs.map((pair) => {
          const detail = results?.details.find((d) => d.id === pair.id);
          return (
            <div
              key={pair.id}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 rounded-lg border p-3 transition-colors ${
                checked
                  ? detail?.isCorrect
                    ? "border-green-300 bg-green-50/50"
                    : "border-red-200 bg-red-50/50"
                  : "border-border"
              }`}
            >
              <span className="text-sm font-medium min-w-[200px]">
                {pair.left}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block shrink-0" />
              <div className="flex-1">
                <select
                  value={answers[pair.id] || ""}
                  onChange={(e) => {
                    if (checked) return;
                    setAnswers((prev) => ({
                      ...prev,
                      [pair.id]: e.target.value,
                    }));
                  }}
                  disabled={checked}
                  className={`flex h-9 w-full rounded-lg border px-3 text-sm bg-transparent outline-none transition-colors ${
                    checked
                      ? detail?.isCorrect
                        ? "border-green-400 bg-green-50 text-green-700"
                        : "border-red-300 bg-red-50 text-red-600"
                      : "border-border focus:border-indigo-400"
                  }`}
                >
                  <option value="" disabled>
                    Выберите...
                  </option>
                  {shuffledRight.map((r, idx) => (
                    <option key={`${pair.id}-${idx}`} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              {checked && (
                <div className="shrink-0">
                  {detail?.isCorrect ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <X className="h-4 w-4 text-red-500" />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 pt-2">
        {!checked ? (
          <Button
            size="sm"
            className="gap-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none hover:from-indigo-600 hover:to-purple-700"
            onClick={() => setChecked(true)}
            disabled={!allAnswered}
          >
            <Check className="h-4 w-4" />
            Проверить
          </Button>
        ) : (
          <div className="flex items-center gap-3 w-full">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span
                className={
                  results && results.correct === results.total
                    ? "text-green-600"
                    : results && results.correct >= results.total / 2
                      ? "text-amber-600"
                      : "text-red-600"
                }
              >
                {results?.correct} / {results?.total}
              </span>
              <span className="text-muted-foreground font-normal">
                правильных
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 ml-auto"
              onClick={handleReset}
            >
              <RefreshCw className="h-4 w-4" />
              Попробовать снова
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <Card className="card-pragma">
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <h3 className="text-base font-bold leading-tight">
              {exercise.title}
            </h3>
          </div>
          <Badge
            className={`shrink-0 text-xs px-2.5 py-0.5 font-medium border-none ${
              typeColors[exercise.type]
            }`}
          >
            {typeLabels[exercise.type]}
          </Badge>
        </div>

        {exercise.type === "choice" && <ChoiceExercise exercise={exercise} />}
        {exercise.type === "fill" && <FillExercise exercise={exercise} />}
        {exercise.type === "match" && <MatchExercise exercise={exercise} />}
      </CardContent>
    </Card>
  );
}

export function ExerciseViewer({
  topics,
  exercises,
}: {
  topics: Topic[];
  exercises: Exercise[];
}) {
  const getExercisesForTopic = (topicId: string) => {
    const topic = topics.find((t) => t.id === topicId);
    if (!topic) return [];
    return topic.exerciseIds
      .map((id) => exercises.find((e) => e.id === id))
      .filter(Boolean) as Exercise[];
  };

  return (
    <div className="space-y-16">
      {topics.map((topic) => {
        const topicExercises = getExercisesForTopic(topic.id);
        if (topicExercises.length === 0) return null;
        const IconComponent = BookOpen;
        return (
          <div key={topic.id} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm">
                <IconComponent className="size-7 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{topic.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              {topicExercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
