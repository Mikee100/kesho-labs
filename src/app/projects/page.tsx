import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — SaaS, POS & E-commerce in Production",
  description:
    "Software built by Kesho Labs in Nairobi: a multi-tenant SaaS business platform, a Windows desktop POS system, and an e-commerce platform — all live in production.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        Projects
      </p>
      <h1 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        Everything here is live and in production.
      </h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
        No mockups, no pitch decks — real systems operating for real
        businesses.
      </p>

      <div className="mt-16 space-y-20">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
