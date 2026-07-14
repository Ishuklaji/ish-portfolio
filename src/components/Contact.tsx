"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { personal } from "@/lib/content";
import { Card } from "./Card";
import { ContactModal } from "./ContactModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const whatsappNumber = personal.phone.replace(/\D/g, "");
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  `Hi ${personal.name.split(" ")[0]}, I saw your portfolio and would like to connect!`
)}`;

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, "")}` },
  { label: "GitHub", value: `github.com/${personal.githubHandle}`, href: personal.github },
  { label: "LinkedIn", value: `linkedin.com/in/${personal.linkedinHandle}`, href: personal.linkedin },
];

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="Contact" title="Let's work together" />
      </Reveal>

      <Reveal>
        <Card>
          <p className="mb-6 text-foreground/85">
            Currently based in {personal.location} and open to new opportunities.
            Reach out through any of the channels below.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm transition-colors hover:border-accent"
              >
                <span className="text-muted">{link.label}</span>
                <span className="font-medium text-foreground">{link.value}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Send me a message
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <FaWhatsapp className="text-base" />
              Chat on WhatsApp
            </a>
          </div>
        </Card>
      </Reveal>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
