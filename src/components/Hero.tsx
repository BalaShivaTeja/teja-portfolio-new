"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className="mb-4 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          className="mb-6 text-xl font-medium text-gray-600 dark:text-gray-400 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          className="mx-auto mb-8 max-w-xl text-base text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-900 p-3 text-white transition-transform hover:scale-110 dark:bg-white dark:text-gray-900"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 p-3 text-white transition-transform hover:scale-110"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white transition-transform hover:scale-110"
            aria-label="Send email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="mt-16 inline-block animate-bounce text-gray-400 transition-colors hover:text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={28} />
        </motion.a>
      </div>
    </section>
  );
}
