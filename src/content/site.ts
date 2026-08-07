/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE — it is the only place content lives.
 *  Every section of the site reads from here, so you never have
 *  to touch a component to change your name, projects, or links.
 * ─────────────────────────────────────────────────────────────
 */

export type Social = { label: string; href: string };
export type Stat = { value: string; label: string };
export type Metric = { value: string; label: string };

export type Project = {
  title: string;
  period: string;
  /** One or two sentences — shown on every card. */
  summary: string;
  /** Extra depth — only rendered on featured cards. */
  detail: string;
  stack: string[];
  metrics: Metric[];
  /** Live URL or repo. Leave "" to render the card without a link. */
  href: string;
  /** true puts the project in the wide top row. Keep this to 2. */
  featured: boolean;
};

export type SkillGroup = { name: string; items: string[] };

export type ExperienceItem = {
  role: string;
  org: string;
  start: string;
  /** Use "Present" for a current role. */
  end: string;
  /** Optional length of tenure, e.g. "1.5 yrs". Shown after the date range. */
  duration?: string;
  points: string[];
};

export const site = {
  name: "Raffay Noor",
  role: "Data Scientist",
  /** One line under your name in the hero. Keep it to ~12 words. */
  tagline:
    "I connect APIs, cloud services and databases into pipelines that run without supervision — then turn what they produce into dashboards people decide from.",
  seo: {
    title: "Raffay Noor — Data Scientist",
    description:
      "Data scientist and engineer building automation systems, production data pipelines, and applied AI — retrieval systems, speech models and self-hosted LLMs wired into real business workflows.",
    /** TODO: set this to your real domain once deployed. */
    url: "https://example.com",
  },
  email: "abdulraffaynoor1122@gmail.com",
  /** TODO: add GitHub / LinkedIn here — they weren't on your CV.
   *  { label: "GitHub", href: "https://github.com/yourhandle" },
   *  { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
   */
  socials: [{ label: "Email", href: "mailto:abdulraffaynoor1122@gmail.com" }] as Social[],
};

/** Small numbers under the hero. Every one of these is backed by the CV. */
export const stats: Stat[] = [
  { value: "2+ yrs", label: "Building automation systems" },
  { value: "390K+", label: "Rows ingested in one pipeline" },
  { value: "6", label: "Systems shipped end to end" },
];

export const about = {
  /** Each string renders as its own paragraph. */
  paragraphs: [
    "I'm a data scientist with over two years building automation systems and six months in data engineering. My work sits where APIs, cloud services and databases meet — pipelines that run unattended, with error handling and alerting, feeding reporting layers people actually make decisions from.",
    "Recent work has been applied AI: retrieval systems, speech models, and self-hosted language models wired into real business workflows. A voice agent running entirely on local hardware. An outreach pipeline where a self-hosted model writes every email.",
    "The part I find most interesting is the failure that doesn't announce itself. A video-listing API that silently omits valid videos. A pagination fault that drops rows past 10,000 with no error. An unfiltered record lookup quietly fanning writes across unrelated client records. Most of my best work has been finding those and designing around them.",
  ],
};

export const projects: Project[] = [
  {
    title: "Self-Hosted AI Voice Agent",
    period: "2026",
    summary:
      "An end-to-end voice agent that holds a live conversation, answers questions about the business from a searchable knowledge base, and books meetings straight into Google Calendar.",
    detail:
      "Runs entirely on self-hosted infrastructure — speech recognition, language model, voice synthesis and vector search all on local hardware, with no third-party AI APIs.",
    stack: [
      "Python",
      "Pipecat",
      "WebRTC",
      "Whisper",
      "Qdrant",
      "n8n",
      "Google Calendar API",
      "Docker",
    ],
    metrics: [
      { value: "0", label: "third-party AI APIs" },
      { value: "live", label: "conversation" },
    ],
    href: "",
    featured: true,
  },
  {
    title: "YouTube Analytics → BigQuery Pipeline",
    period: "2026",
    summary:
      "A production pipeline syncing a channel's full historical analytics — 650+ videos, 16 years of daily metrics — into BigQuery for reporting.",
    detail:
      "Root-caused a silent data-completeness bug where YouTube's standard video-listing APIs omit valid videos with no error, plus a separate pagination fault in the Analytics API that drops rows past 10,000 results. Designed a stateful “master catalog” that permanently accumulates discovered video IDs across runs instead of re-deriving the list from an unreliable source each time — closing both gaps without depending on any single API call being complete.",
    stack: [
      "Python",
      "YouTube Data API v3",
      "YouTube Analytics API",
      "BigQuery",
      "Cloud Run",
      "google-api-python-client",
    ],
    metrics: [
      { value: "650+", label: "videos" },
      { value: "16 yrs", label: "daily metrics" },
    ],
    href: "",
    featured: true,
  },
  {
    title: "Vista Social Analytics Data Lake",
    period: "2026",
    summary:
      "Automated social media pipeline ingesting 18 months of data across 95 profiles into BigQuery — daily profile metrics, per-post analytics, inbox messages and post metadata across four tables.",
    detail:
      "Reverse-engineered undocumented API endpoints to discover every available data source, handled rate limiting and key deactivation gracefully, and deployed a daily Cloud Run job that refreshes all metrics with no manual intervention.",
    stack: ["Python", "BigQuery", "Cloud Run", "Vista Social API", "Pandas", "PyArrow", "Parquet"],
    metrics: [
      { value: "390K+", label: "rows" },
      { value: "95", label: "profiles" },
    ],
    href: "",
    featured: false,
  },
  {
    title: "Client Lifecycle Automation Platform",
    period: "2026",
    summary:
      "Multi-system platform running a service business's full client lifecycle — lead intake, onboarding, contract execution and offboarding — across Airtable, Asana, Slack, DocuSign and Google Drive.",
    detail:
      "Root-caused a silent data-corruption fault where an unfiltered record lookup was fanning every downstream operation across unrelated client records. Rebuilt the correlation model around persisted record identifiers rather than name matching, and added idempotency guards so status-driven triggers can't duplicate work.",
    stack: [
      "Make.com",
      "Airtable API",
      "Asana API",
      "Slack API",
      "DocuSign API",
      "Google Drive API",
      "Python",
    ],
    metrics: [{ value: "5", label: "systems joined" }],
    href: "",
    featured: false,
  },
  {
    title: "AI-Personalised Cold Email Outreach",
    period: "2026",
    summary:
      "End-to-end outreach pipeline generating and sending personalised cold emails to 2,000+ B2B contacts with no manual intervention.",
    detail:
      "A self-hosted language model writes each email conditioned on the contact's industry segment — mapped to a service offering, portfolio link and segment-appropriate proof reference — then dispatches via the Gmail API with RFC-compliant List-Unsubscribe headers. A separate workflow polls execution state every two hours and alerts on any error or missed schedule.",
    stack: ["n8n", "PostgreSQL", "LM Studio", "Qwen3", "Gmail API", "JavaScript", "Docker"],
    metrics: [
      { value: "2,000+", label: "contacts" },
      { value: "2 hr", label: "alert loop" },
    ],
    href: "",
    featured: false,
  },
  {
    title: "Titan Daily Command Board",
    period: "2026",
    summary:
      "Productised multi-tenant SaaS dashboard for home-service consultants, replacing a manual embed with automated pulls from the ServiceTitan CRM API.",
    detail:
      "Surfaces MTD revenue, call volume, close rates, sold hours and today's opportunities across business units in real time. DST-aware timezone correction, paginated calls across multiple reporting endpoints, and encrypted per-tenant credential storage.",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "NextAuth",
      "ServiceTitan API",
      "Vercel",
      "AES-256-GCM",
    ],
    metrics: [{ value: "multi", label: "tenant" }],
    href: "",
    featured: false,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    name: "Data & Cloud",
    items: [
      "BigQuery",
      "Cloud Functions",
      "Cloud Run",
      "PostgreSQL",
      "Supabase",
      "ETL pipeline design",
      "Data modelling",
    ],
  },
  {
    name: "AI & ML",
    items: [
      "LLM integration",
      "Retrieval-augmented generation",
      "Vector databases",
      "Speech-to-text",
      "Text-to-speech",
    ],
  },
  {
    name: "Automation",
    items: ["n8n", "Make.com", "REST APIs", "Webhooks", "Workflow orchestration", "Scheduled jobs"],
  },
  {
    name: "Visualisation",
    items: ["Tableau", "Power BI", "Executive dashboards", "KPI reporting"],
  },
  {
    name: "Tooling",
    items: ["Docker", "Git", "Linux", "Vercel"],
  },
];

/**
 * Newest first.
 * Start years are derived from the stated tenure (5 mos → early 2026,
 * 1.5 yrs → early 2025). Change `start`/`end` if the real dates differ.
 */
export const experience: ExperienceItem[] = [
  {
    role: "Data Engineering",
    org: "Alfa Analytics",
    start: "2026",
    end: "Present",
    duration: "5 mos",
    points: [
      "Built ingestion and transformation pipelines feeding BigQuery from multiple upstream sources.",
      "Modelled data for analytical querying and connected it to Tableau and Power BI reporting layers.",
      "Deployed Cloud Functions for event-driven processing and scheduled data refreshes.",
    ],
  },
  {
    role: "Automation Engineering",
    org: "Zirium AI",
    start: "2025",
    end: "Present",
    duration: "1.5 yrs",
    points: [
      "Designed and maintained workflow automations integrating third-party APIs, CRMs and internal databases.",
      "Built webhook-driven pipelines handling scheduling, lead capture and notification delivery.",
      "Reduced manual, repetitive processes to unattended scheduled jobs with error handling and alerting.",
    ],
  },
];
