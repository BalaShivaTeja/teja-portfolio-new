"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="mb-10 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m always open to new opportunities and interesting projects.
          Feel free to reach out!
        </motion.p>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          className="mb-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Send size={20} />
          Say Hello
        </motion.a>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400"
            aria-label="Email"
          >
            <Mail size={18} />
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
