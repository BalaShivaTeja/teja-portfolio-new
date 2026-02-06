"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "10+ Years",
    description: "Professional experience in full-stack web development",
  },
  {
    icon: Code2,
    title: "MERN / MEAN",
    description: "Deep expertise across the JavaScript ecosystem",
  },
  {
    icon: GraduationCap,
    title: "Mentor & Lead",
    description: "Mentored teams and led architecture decisions",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-4 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="mx-auto mb-16 max-w-2xl text-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I craft high-performance web applications that delight users and drive
          business results. From pixel-perfect frontends to robust backend
          services, I bring ideas to life with clean, maintainable code.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition-all hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                <item.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
