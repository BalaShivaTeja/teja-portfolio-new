"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 px-6 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Gradient overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="text-gray-400 transition-colors hover:text-blue-600"
                    aria-label={`View ${project.title} project`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
