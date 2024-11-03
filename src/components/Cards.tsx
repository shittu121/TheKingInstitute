"use client";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

// Updated CardsPointer function to map over the different course contents
export function CardsPointer() {
  return (
    <div className="">
        {/* Add heading */}
       <h1 className="text-4xl font-bold text-center my-8">Courses We Offer</h1>
       <div className="w-full px-6  max-w-4xl lg:mx-auto md:mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
      {courseContents.map((content, idx) => (
        <FollowerPointerCard
          key={idx}
          title={
            <TitleComponent title={content.author} avatar={content.authorAvatar} />
          }
        >
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-300 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full h-64 bg-gray-100 rounded-t-2xl overflow-hidden relative">
              <Image
                src={content.image}
                alt={content.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 group-hover:rounded-2xl transform transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold my-4 text-lg text-zinc-700">{content.title}</h2>
              <p className="font-normal text-sm text-zinc-500">{content.description}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-sm text-gray-500">{content.date}</span>
                <div className="px-4 py-2 bg-black text-white font-bold rounded-xl text-xs cursor-pointer">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      ))}
       </div>
    </div>
  );
}

// Content array for each course, including Web Development, Frontend, Backend, and Full Stack Development
const courseContents = [
  {
    slug: "web-development-overview",
    author: "The King Institute",
    date: "Available Now",
    title: "Web Development Overview",
    description:
      "Learn the fundamentals of web development, covering both front-end and back-end technologies.",
    image: "/logo.png", // Add your relevant image paths
    authorAvatar: "/logo.png",
  },
  {
    slug: "frontend-development",
    author: "The King Institute",
    date: "Starting Soon",
    title: "Frontend Development",
    description:
      "Master the art of frontend development, working with HTML, CSS, JavaScript, and modern frameworks like React.",
    image: "/logo.png", // Add your relevant image paths
    authorAvatar: "/logo.png",
  },
  {
    slug: "backend-development",
    author: "The King Institute",
    date: "Starting Soon",
    title: "Backend Development",
    description:
      "Get hands-on experience with backend development using Node.js, Express, databases, and API integration.",
    image: "/logo.png", // Add your relevant image paths
    authorAvatar: "/logo.png",
  },
  {
    slug: "fullstack-development",
    author: "The King Institute",
    date: "Enroll Now",
    title: "Full Stack Development",
    description:
      "Become a full-stack developer by mastering both frontend and backend development skills.",
    image: "/logo.png", // Add your relevant image paths
    authorAvatar: "/logo.png",
  },
];

// Title component for the author and avatar
const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
  <div className="flex space-x-2 items-center">
    <Image src={avatar} height={20} width={20} alt="thumbnail" className="rounded-full border-2 border-white" />
    <p>{title}</p>
  </div>
);
