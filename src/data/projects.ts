export type Screenshot = {
  label: string;
  /** Path under /public, e.g. "/screenshots/kesholabs-pos/checkout-catalog.png" */
  src?: string;
};

export type Video = {
  title: string;
  description: string;
  /** YouTube video ID if hosted on YouTube. */
  youtubeId?: string;
  /** Path to self-hosted video file under /public, e.g. "/videos/kesholabs-pos/making-a-sale.webm" */
  src?: string;
  /** Poster image path under /public */
  poster?: string;
};

export type CaseStudy = {
  problem: string;
  built: string;
  result: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  summary: string;
  caseStudy: CaseStudy;
  description: string[];
  liveUrl?: string;
  features: { title: string; description: string }[];
  stack: string[];
  screenshots: Screenshot[];
  videos: Video[];
  highlights: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "adeera",
    name: "Adeera Business OS",
    tagline: "Multi-tenant cloud platform for retail, restaurants & service businesses",
    category: "SaaS Platform",
    summary:
      "A multi-tenant operating system giving businesses unified control over sales, multi-location inventory, billing, role permissions, and real-time analytics.",
    caseStudy: {
      problem:
        "Retail shops, restaurants, and service businesses run their days across spreadsheets, notebooks, and disconnected apps — sales in one place, stock in another, staff permissions nowhere. Off-the-shelf software built for one type of business rarely fits the next.",
      built:
        "One multi-tenant platform with business blueprints: a retail shop, a restaurant, and a spa each get their own configuration of modules, dashboards, and staff roles — served from a single engine with strict data isolation, Stripe-based subscriptions, and real-time analytics.",
      result:
        "One codebase now operates as three different business systems. New business types can be onboarded by configuration rather than custom development, and every tenant gets enterprise-grade permissions and billing from day one.",
    },
    description: [
      "Adeera is engineered around a blueprint architecture: retail shops, restaurants, and service spaces receive custom configurations of modules, dashboards, and role permissions served from one multi-tenant engine.",
      "The backend guarantees tenant isolation, capability authorization, audit logging, Stripe-integrated multi-tier subscriptions, and rollback management for enterprise reliability.",
    ],
    liveUrl: "https://adeera.vercel.app",
    features: [
      {
        title: "Multi-tenant isolation",
        description: "Strict tenant data separation and capability checks at every API layer.",
      },
      {
        title: "Business blueprints",
        description: "Pre-configured setups for retail, restaurant, and spa/service workflows.",
      },
      {
        title: "Real-time inventory & sales",
        description: "Track variations, stock updates, and sales performance dynamically.",
      },
      {
        title: "Role-based access",
        description: "Fine-grained permissions for staff, managers, and superadmins.",
      },
      {
        title: "Stripe billing & plans",
        description: "Automated subscription gating with module-level feature permissions.",
      },
      {
        title: "Enterprise analytics",
        description: "Custom widgets highlighting real-time revenue, margins, and volume.",
      },
    ],
    stack: [
      "Next.js 15",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Stripe",
    ],
    screenshots: [
      { label: "Tenant Dashboard", src: "/screenshots/adeera/dashboard.png" },
      { label: "Multi-Branch Sales Trends", src: "/screenshots/adeera/dashboard-trends.png" },
      { label: "Sales Targets & Top Products", src: "/screenshots/adeera/sales-targets.png" },
      { label: "Profit Insights & Sales Heatmap", src: "/screenshots/adeera/profit-insights.png" },
      { label: "Product Catalog & Attributes", src: "/screenshots/adeera/inventory.png" },
      { label: "Sales History & Receipts", src: "/screenshots/adeera/sales-history.png" },
      { label: "Business Analytics Overview", src: "/screenshots/adeera/analytics.png" },
      { label: "Business Reports Center", src: "/screenshots/adeera/reports.png" },
      { label: "Credit Management", src: "/screenshots/adeera/credit.png" },
      { label: "Plan Usage & Settings", src: "/screenshots/adeera/settings.png" },
    ],
    videos: [
      {
        title: "Adeera Business OS Architecture & Tour",
        description:
          "A quick walk-through: the tenant dashboard, sales trends, and business analytics.",
        src: "/videos/adeera/architecture-tour.mp4",
        poster: "/videos/adeera/architecture-tour-poster.png",
      },
      {
        title: "Setting Up Retail & Service Blueprints",
        description:
          "Configuring product attributes, variations, and catalog structure.",
        src: "/videos/adeera/setup-tour.mp4",
        poster: "/videos/adeera/setup-tour-poster.png",
      },
      {
        title: "Extended Platform Walkthrough",
        description:
          "A longer tour covering reports, credit management, and plan settings.",
        src: "/videos/adeera/extended-tour.mp4",
        poster: "/videos/adeera/extended-tour-poster.png",
      },
    ],
    highlights: [
      { label: "Business types", value: "3+" },
      { label: "Architecture", value: "Multi-tenant" },
      { label: "Status", value: "Live SaaS" },
    ],
  },
  {
    slug: "kesholabs-pos",
    name: "Kesho Labs POS",
    tagline: "High-speed desktop checkout app for Windows counters",
    category: "Desktop Application",
    summary:
      "A fast, hardware-connected desktop point-of-sale built for real retail counters: keyboard shortcuts, barcode scanning, thermal receipt printing, offline resilience, and automatic updates.",
    caseStudy: {
      problem:
        "A busy counter can't run on a cloud dashboard. Cashiers need speed a browser tab can't give them, receipts have to print instantly on real hardware, and the till can't stop working every time the internet does.",
      built:
        "A dedicated Windows desktop app built for the counter: keyboard-first checkout, barcode scanner support, direct thermal receipt printing, and a local database that keeps sales flowing offline and syncs to the cloud when the connection returns.",
      result:
        "A sale takes seconds from scan to printed receipt — there's a recording of a full checkout in under 30 seconds in the demos. Thirteen-plus releases have shipped through silent background auto-updates, so counters are never interrupted for an upgrade.",
    },
    description: [
      "Kesho Labs POS is a standalone counter-facing checkout app. Built with Electron, React, and TypeScript, it delivers a smooth desktop UI designed for high-volume sales transactions.",
      "Ships with an automated CI release pipeline: one-click Windows installer, dual update channels (stable and beta), and instant background auto-updates.",
      "Direct hardware integration powers thermal receipt printers, cash drawers, and USB/Bluetooth barcode scanners out of the box.",
    ],
    liveUrl: "https://github.com/Mikee100/Adeera-sales-app/releases",
    features: [
      {
        title: "Keyboard-first checkout",
        description: "Instant item lookup and quick payment workflows built for high cashier speed.",
      },
      {
        title: "Barcode scanning",
        description: "Add items automatically with hardware barcode scanner integration.",
      },
      {
        title: "Thermal receipt printing",
        description: "Direct ESC/POS receipt generation and printer triggers.",
      },
      {
        title: "Automatic background updates",
        description: "Seamless silent auto-updates over stable and beta release channels.",
      },
      {
        title: "Automated CI release pipeline",
        description: "GitHub Actions workflow building one-click Windows installers.",
      },
      {
        title: "Backend cloud synchronization",
        description: "Syncs inventory, product pricing, and sales data with the cloud.",
      },
    ],
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Webpack",
      "GitHub Actions",
    ],
    screenshots: [
      { label: "Checkout & Catalog View", src: "/screenshots/kesholabs-pos/checkout-catalog.png" },
      { label: "Barcode Scanning & Search", src: "/screenshots/kesholabs-pos/barcode-search.png" },
      { label: "Building a Sale (Cart)", src: "/screenshots/kesholabs-pos/cart-built.png" },
      { label: "Payment & Change Calculator", src: "/screenshots/kesholabs-pos/payment-modal.png" },
      { label: "Receipt Confirmation", src: "/screenshots/kesholabs-pos/receipt-confirmation.png" },
      { label: "Inventory & Stock Levels", src: "/screenshots/kesholabs-pos/inventory.png" },
      { label: "Daily Sales & Revenue Reports", src: "/screenshots/kesholabs-pos/reports.png" },
    ],
    videos: [
      {
        title: "Making a sale in under 30 seconds",
        description:
          "From scanning items to quick cash checkout and printing receipt.",
        src: "/videos/kesholabs-pos/making-a-sale.webm",
        poster: "/videos/kesholabs-pos/making-a-sale-poster.png",
      },
      {
        title: "Managing stock & inventory",
        description:
          "Tracking stock alerts, adjusting quantities, and adding products.",
        src: "/videos/kesholabs-pos/inventory-tour.webm",
        poster: "/videos/kesholabs-pos/inventory-tour-poster.png",
      },
      {
        title: "Reports & shift totals",
        description:
          "Viewing daily revenue, tax collected, and shift transaction details.",
        src: "/videos/kesholabs-pos/reports-tour.webm",
        poster: "/videos/kesholabs-pos/reports-tour-poster.png",
      },
    ],
    highlights: [
      { label: "Releases shipped", value: "13+" },
      { label: "Platform", value: "Windows" },
      { label: "Auto-updates", value: "Enabled" },
    ],
  },
  {
    slug: "fiesta-house-attire",
    name: "Fiesta House Attire",
    tagline: "Digital experience platform for Nairobi's premier maternity studio",
    category: "E-commerce & Web Platform",
    summary:
      "A complete digital studio presence featuring curated portfolio lookbooks, a browsable maternity gown atelier, clear pricing tiers, and an online shop with direct WhatsApp booking integration.",
    caseStudy: {
      problem:
        "A premier maternity studio with beautiful work but no real home for it online — portfolio scattered across social media, pricing explained one DM at a time, and an exclusive gown collection clients couldn't browse before walking in.",
      built:
        "A complete digital studio: curated lookbook galleries, a browsable gown atelier, four transparent pricing tiers, an online shop, and one-tap WhatsApp booking — plus a blog that brings in search traffic.",
      result:
        "Clients now arrive already knowing the gowns, the packages, and the price — and book a session in a single WhatsApp tap. The studio's full experience lives at its own address instead of inside a social feed.",
    },
    description: [
      "Fiesta House Attire is a luxury maternity photography atelier in Nairobi. The platform translates the physical studio experience online through interactive lookbooks and designer gown galleries.",
      "Displays transparent pricing packages (Standard through Gold) listing session duration, edited photos, and gown inclusions. Clients can book directly via an integrated cart or one-tap WhatsApp link.",
      "Built as a lightweight, fast SPA with Tailwind CSS, shadcn/ui design tokens, and an integrated motherhood blog powering SEO search traffic.",
    ],
    liveUrl: "https://app.fiestahouseattire.com",
    features: [
      {
        title: "Curated lookbook galleries",
        description: "Themed portfolio collections covering maternity, couple, and studio shoots.",
      },
      {
        title: "Designer gown atelier",
        description: "Interactive showcase of exclusive maternity dresses available for sessions.",
      },
      {
        title: "Tiered package pricing",
        description: "Four transparent package levels listing session time, photos, and gown counts.",
      },
      {
        title: "WhatsApp session booking",
        description: "Direct one-tap WhatsApp integration turning page visits into booked sessions.",
      },
      {
        title: "Online shop & gift cards",
        description: "E-commerce checkout allowing clients to purchase packages or gift vouchers.",
      },
      {
        title: "Motherhood & studio blog",
        description: "Content marketing hub driving organic SEO traffic.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Vercel",
    ],
    screenshots: [
      { label: "Studio Homepage", src: "/screenshots/fiesta-house-attire/home.png" },
      { label: "Portfolio Lookbooks", src: "/screenshots/fiesta-house-attire/portfolio.png" },
      { label: "Gown Atelier Collection", src: "/screenshots/fiesta-house-attire/gowns.png" },
      { label: "Packages & Tiered Pricing", src: "/screenshots/fiesta-house-attire/pricing.png" },
    ],
    videos: [
      {
        title: "Studio website walkthrough",
        description:
          "A full tour of the homepage, portfolio lookbooks, and gown atelier.",
        src: "/videos/fiesta-house-attire/site-walkthrough.webm",
        poster: "/videos/fiesta-house-attire/site-walkthrough-poster.png",
      },
      {
        title: "Booking a maternity package",
        description:
          "Exploring pricing tiers, selecting a package, and completing WhatsApp booking.",
        src: "/videos/fiesta-house-attire/booking-flow.webm",
        poster: "/videos/fiesta-house-attire/booking-flow-poster.png",
      },
    ],
    highlights: [
      { label: "Type", value: "Client Platform" },
      { label: "Pricing tiers", value: "4 Tiers" },
      { label: "Status", value: "Live Production" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
