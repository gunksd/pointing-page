import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import type { Project, SocialLink } from "@/types";

interface MainContentProps {
  title: string;
  projects: Project[];
  socialLinks: SocialLink[];
}

function HeroTitle({ title }: { title: string }) {
  const chars = Array.from(title);
  return (
    <h1
      className="font-serif-display text-white font-black leading-[0.92] text-[clamp(2.6rem,7vw,5.2rem)]"
      style={{ letterSpacing: "-0.02em" }}
      aria-label={title}
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          className="char-rise"
          aria-hidden="true"
          style={{ animationDelay: `${0.3 + i * 0.06}s` }}
        >
          {ch}
        </span>
      ))}
    </h1>
  );
}

export default function MainContent({
  title,
  projects,
  socialLinks,
}: MainContentProps) {
  return (
    <div className="relative w-full">
      {/* HERO */}
      <header className="min-h-dvh flex flex-col justify-center items-start px-[8vw] md:pl-[15vw]">
        <div
          className="flex items-center gap-2 mb-8 char-rise"
          style={{ animationDelay: "0.1s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
            style={{ color: "var(--gold)" }}
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
          <span
            className="text-xs uppercase tracking-[0.35em]"
            style={{ color: "var(--gold-soft)" }}
          >
            Awan · 个人主页
          </span>
        </div>

        <HeroTitle title={title} />

        <p
          className="mt-8 text-base md:text-lg max-w-md char-rise"
          style={{ color: "var(--ink-dim)", animationDelay: "1.2s" }}
        >
          热爱可抵岁月漫长 —— 愿我们顶峰相见。
        </p>

        <div
          className="mt-14 flex items-center gap-3 char-rise"
          style={{ animationDelay: "1.4s" }}
        >
          <span className="h-px w-10" style={{ background: "var(--gold)" }} />
          <span
            className="text-xs tracking-[0.3em]"
            style={{ color: "var(--ink-faint)" }}
          >
            向下滚动
          </span>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 md:px-4">
        <About />
        <Projects title="Projects" projects={projects} />
        <SocialLinks links={socialLinks} />
        <Footer />
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-white tracking-tight">
        {children}
      </h2>
      <span
        className="flex-1 h-px"
        style={{ background: "var(--hair-soft)" }}
      />
    </div>
  );
}

function About() {
  const lines = [
    "嗨，你好，我是 Awan。",
    "想要改变现在的世界，哪怕只是一点点。",
    "热爱新鲜感，拥抱世界的进步，追求更高的精神自由。",
    "希望和你成为好朋友！",
  ];
  return (
    <Reveal className="mt-28 md:mt-40">
      <SectionLabel>About Me</SectionLabel>
      <div className="mb-4 space-y-1.5">
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-lg md:text-xl leading-8 text-white/85 font-serif-display"
          >
            {line}
          </p>
        ))}
      </div>
      <p
        className="mt-6 text-sm tracking-wide"
        style={{ color: "var(--ink-faint)" }}
      >
        We&apos;re making the world better. Till the forever.
      </p>
    </Reveal>
  );
}

function Projects({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <Reveal className="mt-28 md:mt-36">
      <SectionLabel>{title}</SectionLabel>
      <div style={{ borderTop: "1px solid var(--hair-soft)" }}>
        {projects.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group flex items-center gap-6 py-6 transition-colors duration-300"
            style={{ borderBottom: "1px solid var(--hair-soft)" }}
          >
            <span
              className="text-xs tabular-nums w-8 shrink-0 transition-colors duration-300"
              style={{ color: "var(--ink-faint)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-xl md:text-2xl font-serif-display font-bold text-white transition-colors duration-300 group-hover:text-[var(--gold)]">
                {item.name}
              </div>
              <div
                className="text-sm mt-1 truncate"
                style={{ color: "var(--ink-dim)" }}
              >
                {item.description}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              style={{ color: "var(--gold)" }}
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}

function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <Reveal className="mt-28 md:mt-36">
      <SectionLabel>Find Me</SectionLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {links.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group relative flex items-center gap-3 p-4 rounded-lg overflow-hidden transition-all duration-300"
            style={{
              border: "1px solid var(--hair-soft)",
              background: "rgba(243,240,233,0.02)",
            }}
          >
            <span
              className="absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
              style={{ background: "var(--gold)" }}
            />
            <span
              className="shrink-0 transition-colors duration-300 text-white/70 group-hover:text-[var(--gold)]"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
            <span className="text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}

function Footer() {
  return (
    <footer
      className="mt-32 mb-10 pt-8"
      style={{ borderTop: "1px solid var(--hair-soft)" }}
    >
      <p
        className="text-center font-serif-display text-base md:text-lg text-white/70"
        style={{ letterSpacing: "0.02em" }}
      >
        清风暖色抚人心，敢为人先鸣不平。
      </p>
      <div
        className="mt-4 flex justify-center items-center gap-2 text-xs tracking-widest"
        style={{ color: "var(--ink-faint)" }}
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ background: "var(--gold-deep)" }}
        />
        <span>© 2025 Awan</span>
      </div>
    </footer>
  );
}
