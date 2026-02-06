"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-50 px-6 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 sm:left-1/2 sm:-translate-x-0.5" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative flex flex-col sm:flex-row sm:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-blue-600 bg-white dark:bg-gray-900 sm:left-1/2 sm:-translate-x-1.5" />

              {/* Card */}
              <div
                className={`ml-12 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                <span className="mb-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  {exp.period}
                </span>
                <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
