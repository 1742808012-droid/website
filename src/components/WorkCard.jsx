import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function WorkCard({ work }) {
  const hasImage = Boolean(work.cover);
  const gradient = `linear-gradient(135deg, ${work.palette?.[0] || "#101010"}, ${work.palette?.[1] || "#4b5563"} 55%, ${work.palette?.[2] || "#d7b98e"})`;

  return (
    <Link className={`work-card ${work.type === "video" ? "is-video" : ""}`} to={`/works/${work.id}`}>
      <div className="work-media" style={{ background: hasImage ? undefined : gradient }}>
        {hasImage && <img src={work.cover} alt={work.title} loading="lazy" />}
        {!hasImage && <span className="visual-mark">{work.category}</span>}
        {work.type === "video" && (
          <span className="play-badge" aria-hidden="true">
            <Play size={18} fill="currentColor" />
          </span>
        )}
      </div>
      <div className="work-card-meta">
        <div>
          <h3>{work.title}</h3>
          <p>{work.category} / {work.year}</p>
        </div>
        <ArrowUpRight size={19} aria-hidden="true" />
      </div>
    </Link>
  );
}
