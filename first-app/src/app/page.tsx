import Link from "next/link";
import Image from "next/image";

// src/app/page.tsx
export const metadata = {
  title: "Home | Faisal",
  description: "Welcome to Faisal's portfolio site. Full-stack developer based in Pakistan.",
};

export default function HomePage() {
  return (
    <section className="text-center space-y-6 animate-fade-in">
      <h1 className="text-5xl font-bold text-purple-400">
        Hi, I'm <span className="text-purple-300 animate-pulse">M.Younas Faisal</span> 👋
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        I build clean, fast, and scalable web applications using the MERN stack and Next.js.
      </p>
      <Link
        href="/projects"
        className="inline-block px-6 py-3 mt-4 text-black bg-purple-400 hover:bg-purple-500 rounded-lg shadow-xl transition-transform transform hover:scale-105"
      >
        View My Projects →
      </Link>

      
      <div className="mt-10 flex justify-center">
        <Image
          src="/assets/main/HeroSectionImg.jpg"
          alt="Hero Section Image"
          width={500}
          height={400}
          className="rounded-xl shadow-lg border border-purple-600"
        />
      </div>
    </section>
  );
}