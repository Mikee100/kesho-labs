import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Demos — Watch Our POS & Business Software in Action",
  description:
    "Real screen recordings of Kesho Labs software: point-of-sale checkouts, inventory management, sales reports, and e-commerce booking flows.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  const projectsWithVideos = projects.filter((p) =>
    p.videos.some((v) => v.src || v.youtubeId)
  );

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        Demos
      </p>
      <h1 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        See the systems in action.
      </h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Real recordings — counter checkouts, stock management, shift reports,
        and booking flows.
      </p>

      <div className="mt-16 space-y-16">
        {projectsWithVideos.map((project) => (
          <section key={project.slug}>
            <div className="flex items-end justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {project.name}
              </h2>
              <Link
                href={`/projects/${project.slug}`}
                className="shrink-0 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                View project →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {project.videos
                .filter((v) => v.src || v.youtubeId)
                .map((video, idx) => (
                  <VideoCard key={idx} video={video} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
