export default function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect
        width="64"
        height="64"
        rx="14"
        className="fill-zinc-900 dark:fill-white"
      />
      <path
        d="M24 17v30M42 19L27 32.5 42 45"
        fill="none"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-white dark:stroke-zinc-900"
      />
    </svg>
  );
}
