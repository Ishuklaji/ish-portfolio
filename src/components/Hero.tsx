"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:flex-row lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="mb-3 text-sm font-medium text-accent">
          Hi, I&apos;m {personal.name.split(" ")[0]} — {personal.title}
        </p>
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {personal.name}
        </h1>
        <p className="mt-4 text-base text-muted sm:text-lg">{personal.tagline}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 lg:mx-0 mx-auto">
          {personal.summary}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="shrink-0"
      >
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-surface shadow-sm sm:h-56 sm:w-56">
          <Image
            src={personal.avatarUrl}
            alt={personal.name}
            fill
            sizes="224px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
