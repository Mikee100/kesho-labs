/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const primaryScreenshot = project.screenshots.find((s) => s.src);

  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Info */}
      <div className="flex-1">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 dark:text-white dark:decoration-zinc-700 dark:hover:decoration-white transition-colors"
          >
            View project
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Live site <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Visual */}
      <div className="flex-1 w-full">
        <Link
          href={`/projects/${project.slug}`}
          className="block overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 transition-colors hover:border-zinc-400 dark:hover:border-zinc-600"
        >
          <div className="relative aspect-[16/10] w-full bg-zinc-50 dark:bg-zinc-900">
            {primaryScreenshot?.src ? (
              <img
                src={primaryScreenshot.src}
                alt={project.name}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-sm font-medium text-zinc-400 dark:text-zinc-600">
                  {project.name}
                </span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
