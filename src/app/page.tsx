/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import VideoCard from "@/components/VideoCard";

const process = [
  {
    step: "01",
    title: "Understand",
    description:
      "We start with how your business actually operates — the counter, the stockroom, the bookings — not a feature wishlist.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We map the workflows and design screens around the people who'll use them every day.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Full stack, end-to-end: UI, database, APIs, and automated releases. No hand-offs, no gaps.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "We ship, monitor, and keep improving. Every product we run is updated continuously in production.",
  },
];

const stripShots = [
  { src: "/screenshots/kesholabs-pos/payment-modal.png", alt: "Kesho Labs POS — payment" },
  { src: "/screenshots/kesholabs-pos/reports.png", alt: "Kesho Labs POS — sales reports" },
  { src: "/screenshots/fiesta-house-attire/home.png", alt: "Fiesta House Attire — homepage" },
  { src: "/screenshots/kesholabs-pos/inventory.png", alt: "Kesho Labs POS — inventory" },
  { src: "/screenshots/fiesta-house-attire/pricing.png", alt: "Fiesta House Attire — pricing" },
];

const capabilities = [
  {
    title: "Cloud platforms",
    description:
      "Business operating systems that give you one place to run sales, inventory, staff, and billing — from any device.",
  },
  {
    title: "Desktop point-of-sale",
    description:
      "Fast checkout software for real counters: barcode scanning, receipt printing, and it keeps working when the internet doesn't.",
  },
  {
    title: "Websites & e-commerce",
    description:
      "Brand sites and online shops that load fast, rank on search, and turn visitors into customers.",
  },
];

export default function Home() {
  const featuredVideos = projects
    .flatMap((p) =>
      p.videos.map((v) => ({ ...v, projectName: p.name, projectSlug: p.slug }))
    )
    .filter((v) => v.src || v.youtubeId)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-12 md:pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Software studio · Nairobi
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.08]">
          We build the software your business runs on.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Cloud platforms, point-of-sale systems, and online stores — designed,
          built, and shipped end-to-end.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-300 transition-colors"
          >
            See our work <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Get in touch →
          </Link>
        </div>

        {/* Hero visual — real product, plain frame */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <img
            src="/screenshots/kesholabs-pos/checkout-catalog.png"
            alt="Kesho Labs POS — checkout screen"
            className="w-full object-cover object-top"
          />
        </div>
      </section>

      {/* Work */}
      <section className="mx-auto max-w-5xl px-6 pt-28 md:pt-36">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
            Three products, live in production.
          </h2>
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            All projects →
          </Link>
        </div>

        <div className="mt-14 space-y-20">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Client proof — NOTE: replace quote with the client's real words before deploying */}
      <section className="mx-auto max-w-5xl px-6 pt-28 md:pt-36">
        <div className="border-y border-zinc-200 py-14 dark:border-zinc-800 md:py-16">
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="text-xl font-medium leading-relaxed tracking-tight text-zinc-900 dark:text-white md:text-2xl">
              &ldquo;Clients now browse our gowns, see clear pricing, and book
              directly on WhatsApp. The website works as hard as the
              studio does.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-zinc-500">
              Fiesta House Attire — maternity studio, Nairobi
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Videos */}
      {featuredVideos.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pt-28 md:pt-36">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
              See it in action.
            </h2>
            <Link
              href="/videos"
              className="shrink-0 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              All demos →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredVideos.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
        </section>
      )}

      {/* What we build */}
      <section className="mx-auto max-w-5xl px-6 pt-28 md:pt-36">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          What we build.
        </h2>

        <div className="mt-10 grid gap-x-12 gap-y-10 border-t border-zinc-200 pt-10 dark:border-zinc-800 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <div key={i}>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-5xl px-6 pt-28 md:pt-36">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          How we work.
        </h2>

        <div className="mt-10 grid gap-x-10 gap-y-10 border-t border-zinc-200 pt-10 dark:border-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step}>
              <p className="text-xs font-medium text-zinc-400 dark:text-zinc-600">
                {p.step}
              </p>
              <h3 className="mt-2 text-base font-semibold text-zinc-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshot strip — auto-scrolling marquee, pauses on hover */}
      <section className="marquee mt-28 md:mt-36 overflow-hidden">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((half) => (
            <div key={half} className="flex gap-4 pr-4" aria-hidden={half === 1}>
              {stripShots.map((s) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={half === 0 ? s.alt : ""}
                  className="h-52 w-auto shrink-0 rounded-xl border border-zinc-200 object-cover object-top dark:border-zinc-800 md:h-64"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-28 md:py-36">
        <div className="border-t border-zinc-200 pt-20 text-center dark:border-zinc-800">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
            Tell us what your business needs — we&apos;ll tell you how we&apos;d
            build it.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-300 transition-colors"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
