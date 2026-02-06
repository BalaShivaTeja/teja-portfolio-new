import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
          Built with Next.js, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
