// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-600 text-gray-400 text-center py-6 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} Faisal. Built with 💜 using Next.js + TailwindCSS.
      </p>
    </footer>
  );
}

