// src/app/about/page.tsx
export const metadata = {
  title: "About",
  description: "More about Faisal – background, skills, and values.",
};

export default function AboutPage() {
  return (
    <section className="space-y-6 animate-fade-in">
      <h1 className="text-4xl font-bold text-purple-300 ">🧠 <span className="text-purple-300 animate-pulse">About Me</span></h1>
      <p className="text-gray-300">
        I'm a passionate full-stack developer with a love for JavaScript, React, and Node.js. Currently learning Next.js to build blazing fast apps.
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>🚀 MERN Stack Expert</li>
        <li>🎯 Focused on performance and UX</li>
        <li>🌍 Based in Pakistan</li>
        <li>🧪 Learning Webflow & Tailwind daily</li>
      </ul>
    </section>
  );
}
