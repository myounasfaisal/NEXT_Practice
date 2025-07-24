// src/app/contact/page.tsx
export const metadata = {
  title: "Contact | Faisal",
  description: "Contact Faisal for freelance or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <section className="space-y-6 max-w-xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold text-purple-300">📬 Contact Me</h1>
      <p className="text-gray-300">
        Got a project or just want to say hi? Reach out via email or use the form below.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-black border border-purple-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-black border border-purple-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          rows={4}
          placeholder="Your Message"
          className="w-full p-3 bg-black border border-purple-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-purple-500 text-black rounded-md hover:bg-purple-600 transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
