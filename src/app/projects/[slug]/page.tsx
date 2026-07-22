import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import VideoCard from "@/components/VideoCard";
import { SITE_URL, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.name} · Kesho Labs`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const screenshotsWithSrc = project.screenshots.filter((s) => s.src);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.name,
      description: project.summary,
      applicationCategory: "BusinessApplication",
      operatingSystem:
        project.slug === "adeera-pos" ? "Windows" : "Web browser",
      url: `${SITE_URL}/projects/${project.slug}`,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${SITE_URL}/projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.name,
          item: `${SITE_URL}/projects/${project.slug}`,
        },
      ],
    },
  ];

  return (
    <article className="mx-auto max-w-5xl px-6 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <section className="pt-12 md:pt-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          {project.category}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-300 transition-colors"
            >
              Visit live product <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </section>

      {/* Case study */}
      <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              The problem
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.caseStudy.problem}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              What we built
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.caseStudy.built}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              The result
            </p>
            <p className="mt-4 leading-relaxed text-zinc-900 dark:text-white">
              {project.caseStudy.result}
            </p>
          </div>
        </div>
      </section>

      {/* Technical overview */}
      <section className="mt-16 grid gap-12 border-t border-zinc-200 pt-12 dark:border-zinc-800 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Under the hood
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Built with
          </h2>
          <ul className="mt-4 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            {project.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Screenshots */}
      {screenshotsWithSrc.length > 0 && (
        <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Screenshots
          </h2>
          <div className="mt-8">
            <ScreenshotGallery
              screenshots={screenshotsWithSrc}
              projectName={project.name}
            />
          </div>
        </section>
      )}

      {/* Videos */}
      {project.videos.some((v) => v.src || v.youtubeId) && (
        <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Watch it in action
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {project.videos
              .filter((v) => v.src || v.youtubeId)
              .map((v, idx) => (
                <VideoCard key={idx} video={v} />
              ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          What it does
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((f, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next project */}
      <section className="mt-20">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Next project
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {next.name}
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1.5 group-hover:text-zinc-900 dark:group-hover:text-white" />
        </Link>
      </section>
    </article>
  );
}
