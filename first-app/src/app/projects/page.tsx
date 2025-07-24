// src/app/projects/page.tsx

import { projects } from "@/libs/const";

export const metadata = {
  title: "Projects",
  description: "Explore Faisal's featured frontend and backend projects.",
};

export default function ProjectsPage() {


  return (
    <section className="space-y-6 animate-fade-in">
      <h1 className="text-4xl font-bold text-purple-300">🛠 Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-black border border-purple-600 p-6 rounded-2xl shadow-xl hover:shadow-purple-500 transition-all hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-bold text-purple-400">{proj.title}</h2>
            <p className="text-gray-400 mt-2 text-sm">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-purple-300 border border-purple-500 px-4 py-1 rounded-full hover:bg-purple-600 hover:text-white transition"
            >
              View Repo ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}