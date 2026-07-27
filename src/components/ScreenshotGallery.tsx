"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import type { Screenshot } from "@/data/projects";

export default function ScreenshotGallery({
  screenshots,
  projectName,
}: {
  screenshots: Screenshot[];
  projectName: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % screenshots.length);
    }
  }, [selectedIndex, screenshots.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + screenshots.length) % screenshots.length
      );
    }
  }, [selectedIndex, screenshots.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((s, idx) => (
          <figure key={idx}>
            <button
              onClick={() => s.src && setSelectedIndex(idx)}
              disabled={!s.src}
              className="block w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-colors enabled:hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:enabled:hover:border-zinc-600"
              aria-label={s.src ? `View ${s.label} fullscreen` : s.label}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                {s.src ? (
                  <Image
                    src={s.src}
                    alt={`${projectName} — ${s.label}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading={idx < 3 ? "eager" : "lazy"}
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-400 dark:text-zinc-600">
                    <ImageIcon className="h-5 w-5" />
                    <span className="text-xs">{s.label}</span>
                  </div>
                )}
              </div>
            </button>
            <figcaption className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-md p-4 md:p-8">
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
            <p className="text-sm text-zinc-400">
              <span className="text-white font-medium">
                {screenshots[selectedIndex].label}
              </span>{" "}
              · {selectedIndex + 1} of {screenshots.length}
            </p>
            <button
              onClick={() => setSelectedIndex(null)}
              className="rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex max-h-[80vh] w-full max-w-5xl items-center justify-center">
            {screenshots[selectedIndex].src && (
              // eslint-disable-next-line @next/next/no-img-element -- unknown intrinsic size, rendered only on user interaction
              <img
                src={screenshots[selectedIndex].src}
                alt={screenshots[selectedIndex].label}
                className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
              />
            )}
          </div>

          {screenshots.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
