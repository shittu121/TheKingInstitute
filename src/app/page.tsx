// import Image from "next/image";
// font-[family-name:var(--font-source-mono)]
import { AuroraBackgroundHero } from "@/components/Hero";
import { CardsPointer } from "@/components/Cards";
import { CourseTimelines } from "@/components/CourseTimeline";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-sulphur-sans)] text-center text-[30px]">
      <div className="">
      <AuroraBackgroundHero />
      </div>
      <div className="my-10">
        <CardsPointer />
      </div>
      <div className="my-10">
        <CourseTimelines />
      </div>
    </div>
  );
}
