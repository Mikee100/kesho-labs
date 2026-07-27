"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Film } from "lucide-react";
import type { Video } from "@/data/projects";

export default function VideoPlayerModal({ video }: { video: Video }) {
  const [isOpen, setIsOpen] = useState(false);
  const playable = Boolean(video.src || video.youtubeId);

  return (
    <>
      <button
        onClick={() => playable && setIsOpen(true)}
        disabled={!playable}
        className="group block w-full text-left overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors enabled:hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:enabled:hover:border-zinc-600"
      >
        {/* Poster */}
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
          {video.poster ? (
            <Image
              src={video.poster}
              alt={video.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Film className="h-8 w-8 text-zinc-300 dark:text-zinc-700" />
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/30 transition-colors group-hover:bg-zinc-950/20">
            {playable ? (
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition-transform group-hover:scale-105">
                <Play className="h-6 w-6 ml-0.5 fill-current" />
              </span>
            ) : (
              <span className="rounded-full bg-zinc-900/80 px-4 py-2 text-xs text-zinc-300">
                Coming soon
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            {video.title}
          </h3>
          <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {video.description}
          </p>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-md p-4 md:p-8">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-zinc-950">
            <div className="flex items-center justify-between px-5 py-3.5">
              <h3 className="text-sm font-medium text-white">{video.title}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              {video.youtubeId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : video.src ? (
                <video
                  className="h-full w-full"
                  src={video.src}
                  poster={video.poster}
                  controls
                  autoPlay
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
