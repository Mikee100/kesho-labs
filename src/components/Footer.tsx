import Link from "next/link";
import { Github, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
              <Logo className="h-6 w-6" />
              Kesho Labs
            </p>
            <p className="mt-2 max-w-xs text-sm text-zinc-500 leading-relaxed">
              <em>Kesho</em> is Swahili for tomorrow. Software studio in
              Nairobi, Kenya.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                Studio
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-500">
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                Products
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-500">
                <li>
                  <Link
                    href="/projects/adeera"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Adeera
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/kesholabs-pos"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Kesho Labs POS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/fiesta-house-attire"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Fiesta House Attire
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/caseproz"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    CaseProz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-600 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kesho Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mikee100"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:mikekariuki10028@gmail.com"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
