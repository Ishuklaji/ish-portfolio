import Image from "next/image";
import { projects } from "@/lib/content";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="Projects" title="Things I've built" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <Card className="flex h-full flex-col overflow-hidden !p-0">
              {project.image ? (
                <div className="relative h-48 w-full border-b border-border bg-surface-2">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(min-width: 640px) 480px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex h-48 w-full items-center justify-center border-b border-border bg-gradient-to-br from-accent-soft to-surface-2">
                  <span className="text-2xl font-semibold text-accent">{project.name}</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  <span className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted">
                    Live
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-accent">{project.tagline}</p>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-foreground/75">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Live demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
                  >
                    Source
                  </a>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
