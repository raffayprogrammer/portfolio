import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-faint sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind</p>
      </div>
    </footer>
  );
}
