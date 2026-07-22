import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Custom Software for Your Business",
  description:
    "Need a POS system, SaaS platform, or e-commerce website in Kenya? Contact Kesho Labs via WhatsApp, email, or the form — we usually reply within a day.",
  alternates: { canonical: "/contact" },
};

const WHATSAPP_NUMBER = "254721840961";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Kesho Labs — I'd like to talk about a software project for my business."
);

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        Contact
      </p>
      <h1 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
        Tell us what you&apos;re building.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        A platform, a POS, a store, or something that doesn&apos;t exist yet —
        we&apos;d love to hear about it. We usually reply within a day.
      </p>

      <div className="mt-8">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-300"
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>

      <div className="mt-14 grid gap-14 border-t border-zinc-200 pt-12 dark:border-zinc-800 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Or send a message.
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        {/* Side info */}
        <div className="space-y-10 lg:col-span-2">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Email
            </h2>
            <a
              href="mailto:mikekariuki10028@gmail.com?subject=Project%20inquiry%20—%20Kesho%20Labs"
              className="mt-2 inline-block break-all text-sm text-zinc-600 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:decoration-white transition-colors"
            >
              mikekariuki10028@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Code
            </h2>
            <a
              href="https://github.com/Mikee100"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm text-zinc-600 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:decoration-white transition-colors"
            >
              github.com/Mikee100 <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Based in
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Nairobi, Kenya — working with businesses everywhere.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Helpful to include
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <li>What your business does.</li>
              <li>The problem you want solved.</li>
              <li>Systems you already use.</li>
              <li>Rough timeline and budget, if known.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
