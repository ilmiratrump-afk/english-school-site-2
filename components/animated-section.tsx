import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "up" | "left" | "right" | "scale";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  as?: "section" | "div";
  id?: string;
}

const animationClasses: Record<AnimationType, string> = {
  up: "animate-in fade-in slide-in-from-bottom-4",
  left: "animate-in fade-in slide-in-from-left-4",
  right: "animate-in fade-in slide-in-from-right-4",
  scale: "animate-in fade-in zoom-in-95",
};

export function AnimatedSection({
  children,
  className,
  animation = "up",
  delay = 0,
  as: Tag = "section",
  id,
}: AnimatedSectionProps) {
  return (
    <Tag
      id={id}
      className={cn(animationClasses[animation], "duration-700", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
