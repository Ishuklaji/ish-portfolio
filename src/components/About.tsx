import { education, personal } from "@/lib/content";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="About" title="Who I am" />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <p className="leading-relaxed text-foreground/85">{personal.aboutBio}</p>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="h-full">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-muted">
              Education
            </h3>
            <ul className="space-y-5">
              {education.map((item) => (
                <li key={item.school} className="border-l-2 border-accent-soft pl-4">
                  <p className="text-xs text-accent">{item.period}</p>
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="text-sm text-muted">{item.school}</p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
