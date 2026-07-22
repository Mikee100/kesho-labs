import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — A Software Studio in Nairobi, Kenya",
  description:
    "Kesho means tomorrow in Swahili. Kesho Labs is a Nairobi software studio building SaaS platforms, POS systems, and web products that run real businesses.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Ship real things",
    description:
      "Every product on this site is deployed and in use. We measure ourselves by working software, not slide decks.",
  },
  {
    title: "Engineer for the long run",
    description:
      "Multi-tenancy, permissions, payments, updates — the unglamorous parts done right are what make software last.",
  },
  {
    title: "Build for our market",
    description:
      "African businesses deserve software designed for how they actually operate — not imported assumptions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-16 md:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          About
        </p>
        <h1 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
          Kesho means tomorrow.
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Kesho Labs is a software studio based in Nairobi, Kenya. We build
            the systems businesses run on: SaaS platforms, point-of-sale
            software, and web products — designed, engineered, and deployed end
            to end.
          </p>
          <p>
            The studio grew out of building Adeera, a Business OS for retail,
            restaurants, and service businesses, together with its desktop POS
            and client projects like Fiesta House Attire. Everything we&apos;ve
            built is live and in production.
          </p>
          <p>
            We work as one small, full-stack team — which means the same people
            who design your product also build the backend, wire up payments,
            and ship the deploys. No hand-offs, no gaps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-24 md:pt-28">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          What we believe.
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-10 border-t border-zinc-200 pt-10 dark:border-zinc-800 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-5xl px-6 pt-24 md:pt-28">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          Who&apos;s behind it.
        </h2>
        <div className="mt-10 flex flex-col gap-8 border-t border-zinc-200 pt-10 dark:border-zinc-800 sm:flex-row sm:items-start">
          {/* Swap this initials circle for a real photo:
              add /public/founder.jpg and replace the span with
              <img src="/founder.jpg" alt="Mike Kariuki" className="h-24 w-24 rounded-full object-cover" /> */}
          <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-2xl font-semibold text-white dark:bg-white dark:text-zinc-900">
            MK
          </span>
          <div>
            <p className="text-lg font-semibold text-zinc-900 dark:text-white">
              Mike Kariuki
            </p>
            <p className="text-sm text-zinc-500">Founder & Engineer</p>
            <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Mike designs and builds every system Kesho Labs ships — from the
              database models to the checkout screens. He started the studio to
              prove that software built in Nairobi can run real businesses,
              every day, in production.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 md:py-28">
        <div className="border-t border-zinc-200 pt-16 text-center dark:border-zinc-800">
          <h2 className="mx-auto max-w-lg text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
            Want to build something with us?
          </h2>
          <div className="mt-6">
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
