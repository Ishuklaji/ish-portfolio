import { skills } from "@/lib/content";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="Skills" title="What I work with" />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04}>
            <Card className="h-full">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <Card className="mt-5">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
            Languages
          </h3>
          <div className="flex flex-wrap gap-6">
            {skills.languages.map((lang) => (
              <span key={lang.name} className="text-sm text-foreground/90">
                <span className="font-medium text-foreground">{lang.name}</span>
                <span className="text-muted"> — {lang.level}</span>
              </span>
            ))}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
