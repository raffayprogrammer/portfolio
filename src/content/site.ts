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
  /** Omit for an ongoing role — only the start year renders. */
  end?: string;
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
  { value: "4+ yrs", label: "Building automation systems" },
  { value: "50+", label: "Automations built across projects" },
];

export const about = {
  /** Each string renders as its own paragraph. */
  paragraphs: [
    "I'm a data scientist with over four years building automation systems and data pipelines. My work sits where APIs, cloud services and databases meet — pipelines that run unattended, with error handling and alerting, feeding reporting layers people actually make decisions from.",
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
    title: "Multi-Agent Coding Orchestrator",
    period: "2026",
    summary:
      "Desktop app running a staged multi-agent coding pipeline on a self-hosted GPU workstation — 13 agents with defined roles carrying a task from design through code, QA, security review and UAT to a pull request.",
    detail:
      "Agents never chat freely: a Lead orchestrator delegates sequentially through gates, QA and Security run in parallel, and only the Coder writes code while only the GitHub agent holds a token — every other agent is read-only and files JSON reports to a shared job folder, with a three-round cap on fix loops. Roles live in config rather than code. Runs entirely on local Qwen3 models with per-agent quantisation chosen to fit 2×24 GB of VRAM, an allowlisted build/test/run tool gated behind human approval, and a live trace panel with a global stop.",
    stack: ["Python", "FastAPI", "Electron", "React", "LM Studio", "Qwen3", "YAML"],
    metrics: [
      { value: "13", label: "agents" },
      { value: "0", label: "cloud AI APIs" },
    ],
    href: "",
    featured: false,
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

export type Demo = {
  title: string;
  /** One or two sentences under the title. */
  blurb: string;
  tools: string[];
  /** Files live in public/demos/ — <slug>.mp4 and <slug>.png (poster). */
  slug: string;
};

/**
 * Video walkthroughs, shown in order.
 * To add one: drop <slug>.mp4 and <slug>.png into public/demos/ and append here.
 */
export const demos: Demo[] = [
  {
    title: "AI Lead Finder Chatbot",
    blurb:
      "Ask in plain English for a type of business in a city and a finished lead list comes back in the same chat. Searches Yelp, Google Maps and US directories at once, then visits each business's own site to fill in the phone number and email.",
    tools: ["n8n", "AI agent", "Yelp", "Google Maps", "Web scraping"],
    slug: "ai-lead-finder",
  },
  {
    title: "CRM on Autopilot",
    blurb:
      "A 9 AM schedule that works the whole sales pipeline on its own — checks Gmail to see who replied, moves leads between stages and books follow-ups for the ones who didn't. Replaced the daily routine of a three-person team.",
    tools: ["n8n", "CRM API", "Gmail"],
    slug: "crm-autopilot",
  },
  {
    title: "AI Voice Agent & Chatbot for a Private Clinic",
    blurb:
      "Patients call or type at any hour. The agent answers questions about treatments, checks the clinic's live calendar mid-conversation, books the slot if it's free and emails the confirmation.",
    tools: ["Voice AI", "n8n", "OpenAI", "Google Calendar", "Gmail"],
    slug: "clinic-voice-agent",
  },
  {
    title: "Discord Data Bots",
    blurb:
      "Two bots for a data-heavy community: one walks the Google Sheet finding wrong rows and writing corrections back, the other answers plain-English questions about the data in Discord. It completes about 90% of the questions it's asked.",
    tools: ["n8n", "Google Sheets", "Discord", "OpenAI"],
    slug: "discord-data-bots",
  },
  {
    title: "AI LinkedIn Content Engine",
    blurb:
      "Research, writing and carousel design run on a schedule — then the workflow stops and waits. Nothing publishes under the owner's name until they approve both the post and the slides.",
    tools: ["n8n", "Apify", "OpenRouter", "Google Drive", "LinkedIn API"],
    slug: "linkedin-content-engine",
  },
  {
    title: "AI Music & Sports Content Generator",
    blurb:
      "Weekly workflow that scrapes and searches for trending music and sports stories, picks the ones worth using, writes them up, generates an image for each and emails the set over for approval.",
    tools: ["n8n", "Apify", "OpenAI", "Google Drive", "Gmail"],
    slug: "music-sports-generator",
  },
  {
    title: "Smart Email Campaign Manager",
    blurb:
      "Follow-ups branch on what each lead actually did — clicked, opened, or nothing — with Supabase tracking every lead's position in the sequence. Replies are caught within 15 minutes, stop the sequence and ping the team on Slack.",
    tools: ["n8n", "Supabase", "OpenAI", "Gmail", "Slack"],
    slug: "email-campaign-manager",
  },
  {
    title: "AI PDF to Google Slides Converter",
    blurb:
      "Send a PDF to a Telegram bot and get a formatted Google Slides deck back in the same chat. Long reports are split into chunks and processed in parallel, so length barely costs time.",
    tools: ["Telegram", "n8n", "OpenAI", "Google Slides API"],
    slug: "pdf-to-slides",
  },
  {
    title: "AI Invoice PDF to Excel Comparison Tool",
    blurb:
      "Reads a batch of invoices in any supplier's layout and returns one Excel file grouped by supplier. Because the model reads each invoice the way a person would, a new supplier needs no setup at all.",
    tools: ["n8n", "Claude Sonnet 4", "PDF extraction", "Excel"],
    slug: "invoice-to-excel",
  },
  {
    title: "WorkshopPOS",
    blurb:
      "Multi-tenant point-of-sale and job-card system for car workshops, following a car from check-in to printed receipt. Row-level security per workshop, amounts stored in whole paisa, invoice numbers that never repeat, and thermal printing over Web Serial.",
    tools: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind"],
    slug: "workshop-pos",
  },
  {
    title: "Social Media Data Stack",
    blurb:
      "Lead architect on a modern stack pulling every social platform into BigQuery on a schedule and modelling it in dbt, so a view or a follower means the same thing everywhere. Manual collection time dropped 95%.",
    tools: ["Airbyte", "Fivetran", "BigQuery", "dbt", "Tableau"],
    slug: "social-data-stack",
  },
  {
    title: "Ecommerce RFM Dashboard",
    blurb:
      "Scores 693 customers on recency, frequency and spend, then sorts them into 11 segments from Champions to Lost. Flagged roughly $50k of revenue at risk of churning and showed Champions alone driving about 185k in sales.",
    tools: ["Tableau", "RFM segmentation", "Data preparation"],
    slug: "rfm-dashboard",
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
      "Multi-agent orchestration",
      "Self-hosted LLMs",
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
    role: "Automation & CRM Specialist",
    org: "Zaptics",
    start: "Aug 2026",
    duration: "Project based",
    points: [
      "Build CRM and workflow automations in Make.com and n8n on a project basis — lead routing, pipeline-stage triggers and record syncs between systems.",
      "Connect CRM records to downstream tools through webhooks and scheduled jobs so a status change in one place propagates everywhere without re-entry.",
    ],
  },
  {
    role: "AI Automation Engineer",
    org: "Golden Carthage · Tunisia (Remote)",
    // TODO: no start/end given — only "6 months". Set real months if known.
    start: "2026",
    duration: "6 mos · Project based",
    points: [
      "Designed and delivered AI-driven automation workflows over a six-month project engagement, fully remote with a Tunisia-based team.",
      "Embedded LLM steps inside n8n pipelines and wired them to existing business tools through REST APIs and webhooks.",
    ],
  },
  {
    role: "Data Engineering",
    org: "Alfa Analytics",
    start: "2026",
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
    duration: "1.5 yrs",
    points: [
      "Designed and maintained workflow automations integrating third-party APIs, CRMs and internal databases.",
      "Built webhook-driven pipelines handling scheduling, lead capture and notification delivery.",
      "Reduced manual, repetitive processes to unattended scheduled jobs with error handling and alerting.",
    ],
  },
];
