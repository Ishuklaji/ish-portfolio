import { personal } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind.
        </p>
        <p className="flex gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            github
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            linkedin
          </a>
          <a href={`mailto:${personal.email}`} className="hover:text-accent">
            email
          </a>
        </p>
      </div>
    </footer>
  );
}
