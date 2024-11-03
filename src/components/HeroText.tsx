"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function HeroTypewriter() {
  const words = [
    {
      text: "Real-World",
      className: "text-blue-500 dark:text-blue-500 break-words",
    },
    {
      text: "Skills.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="text-[200px] font-bold flex justify-center dark:text-white text-center">
      <TypewriterEffectSmooth words={words} className="text-[100px] text-center" />
    </div>
  );
}
