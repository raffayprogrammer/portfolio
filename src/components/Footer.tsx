import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.role}</span>
      </div>
    </footer>
  );
}
