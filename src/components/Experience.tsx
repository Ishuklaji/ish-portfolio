import { experience } from "@/lib/content";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </Reveal>

      <div className="space-y-5">
        {experience.map((job, i) => (
          <Reveal key={job.company + job.period} delay={i * 0.05}>
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold text-foreground">{job.role}</h3>
                <span className="text-xs text-muted">{job.period}</span>
              </div>
              <p className="mb-3 text-sm font-medium text-accent">{job.company}</p>
              <ul className="space-y-2">
                {job.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2 text-sm leading-relaxed text-foreground/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
