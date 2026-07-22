import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-40 text-center">
      <p className="text-6xl font-semibold tracking-tight text-zinc-300 dark:text-zinc-700">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        This page doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-300 transition-colors"
      >
        Back home
      </Link>
    </section>
  );
}
