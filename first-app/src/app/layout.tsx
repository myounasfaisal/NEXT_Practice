// src/app/layout.tsx
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "Faisal | Developer Portfolio",
    template: "%s | Faisal",
  },
  description: "Full-stack developer building beautiful web apps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Navbar />
        <main className="min-h-screen max-w-5xl mx-auto px-4 py-10 animate-fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
