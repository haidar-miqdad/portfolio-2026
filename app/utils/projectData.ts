export const projects = [
  {
    id: 1,
    title: "Mekari Jurnal Middleware",
    description:
      "High-throughput middleware synchronizing bulk financial data between booking platforms and Mekari Jurnal.",
    techStack: ["Golang", "Goroutines", "REST API", "HMAC-SHA256"],
    repoUrl: "#",
    demoUrl: "#",
    details: {
      challenge:
        "The booking platform generated thousands of transactions daily. Syncing this to the accounting system (Mekari) synchronously caused main-thread blocking, timeouts, and data inconsistencies during peak hours.",
      solution:
        "Engineered a non-blocking middleware using Golang's Goroutines for concurrent processing. Implemented a worker-pool pattern to manage API rate limits and HMAC-SHA256 for secure, tamper-proof data transmission.",
    },
    images: [
      {
        src: "/img/projects/mekari.webp",
        alt: "Mekari Jurnal Middleware",
      },
      {
        src: "/img/projects/bookngo.webp",
        alt: "Mekari Jurnal Middleware",
      },
    ],
  },
  {
    id: 2,
    title: "Broskydive Booking System",
    description:
      "High-concurrency booking engine architected for zero downtime. Implements Mutex locking for data integrity.",
    techStack: ["Golang", "PostgreSQL", "Nuxt.js", "Redis"],
    repoUrl: "#",
    demoUrl: "#",
    details: {
      challenge:
        "Handling concurrent booking requests for limited skydive slots resulted in 'Double Booking' race conditions. The legacy system also suffered from downtime during high-traffic promo events.",
      solution:
        "Implemented Mutex Locking on the database transaction layer to guarantee atomicity. Deployed Redis for caching slot availability, reducing DB load by 70% and ensuring zero-downtime scalability.",
    },
    images: [
      {
        src: "/img/projects/skydive.webp",
        alt: "Broskydive Booking System",
      },
      {
        src: "/img/projects/skydive2.webp",
        alt: "Broskydive Booking System",
      },
    ],
  },
  {
    id: 3,
    title: "Iris-KEPK (Ethical Clearance)",
    description:
      "Digital transformation platform for research ethics at UMJ. Modernized legacy manual processes.",
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    repoUrl: "#",
    demoUrl: "#",
    details: {
      challenge:
        "The university relied on manual paper-based submissions for ethical clearance, leading to lost documents, opaque approval processes, and weeks of delay for researchers.",
      solution:
        "Developed a centralized full-stack dashboard. Digitized the entire workflow from submission to certification. Features include automated PDF generation, role-based access control (RBAC), and real-time status tracking.",
    },
    images: [],
  },
  {
    id: 4,
    title: "POS Taminum",
    description:
      "High-performance mobile Point of Sales (POS) application engineered for offline-first reliability and seamless transaction management.",
    techStack: ["Flutter", "BLoC", "Sentry", "SQLite"],
    repoUrl: "#",
    demoUrl: "#",
    details: {
      challenge:
        "The business faced operational bottlenecks due to unstable internet connections causing transaction failures, coupled with the need for precise inventory tracking that legacy systems could not handle.",
      solution:
        "Architected a robust offline-first mobile POS using Flutter and SQLite, ensuring zero data loss during network outages. Implemented BLoC for predictable and testable state management, and integrated Sentry for proactive crash reporting and real-time stability monitoring.",
    },
    images: [
      {
        src: "/img/projects/taminum.webp",
        alt: "POS Taminum",
      },
    ],
  },
  // Tambahkan project lain di sini yaww
];
