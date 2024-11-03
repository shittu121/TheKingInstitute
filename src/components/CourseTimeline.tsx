import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function CourseTimelines() {
  const data = [
    {
      title: "Month 1: Foundation",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In the first month, you&apos;ll dive into the basics, building a solid foundation in key concepts. We cover fundamental topics, including HTML, CSS, Bootstrap and basic JavaScript, laying the groundwork for the advanced material in the upcoming months.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/logo.png"
              alt="learning foundation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="/logo.png"
              alt="coding basics"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Month 2: Advanced Concepts",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The second month focuses on more advanced topics like TailwindCSS, JavaScript frameworks (e.g., React, Next.js, TypeScript, ShadCN UI, Framer Motion and Acerternity UI.), responsive design, and API integration. You&apos;ll start building real-world projects to apply your skills in a practical setting.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/logo.png"
              alt="react integration"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="/logo.png"
              alt="responsive design"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Month 3: Final Projects & Deployment",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In the final month, you&apos;ll focus on building a complete project from start to finish, covering deployment and optimization. By the end of the course, you&apos;ll have a portfolio-ready project to showcase your skills to potential employers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/logo.png"
              alt="final project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="/logo.png"
              alt="project deployment"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
