import { ArrowLeft, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Lightbox from "../components/Lightbox.jsx";
import PageTransition from "../components/PageTransition.jsx";
import VideoEmbed from "../components/VideoEmbed.jsx";
import { works } from "../data/works.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const work = works.find((item) => item.id === id);
  const workIndex = works.findIndex((item) => item.id === id);
  const related = useMemo(() => {
    if (!work) return [];
    return [works[workIndex - 1], works[workIndex + 1]].filter(Boolean);
  }, [work, workIndex]);

  if (!work) {
    return (
      <PageTransition className="page section page-with-header">
        <div className="empty-state">
          <h1>没有找到这个作品</h1>
          <Link to="/photography" className="primary-link">返回作品列表</Link>
        </div>
      </PageTransition>
    );
  }

  const images = work.images?.length ? work.images : [work.cover].filter(Boolean);
  const fallbackStyle = {
    background: `linear-gradient(135deg, ${work.palette?.[0] || "#101010"}, ${work.palette?.[1] || "#4b5563"}, ${work.palette?.[2] || "#d7b98e"})`
  };

  return (
    <PageTransition className="page section project-page page-with-header">
      <Link to={work.type === "video" ? "/video" : "/photography"} className="back-link">
        <ArrowLeft size={18} />
        返回{work.type === "video" ? "视频" : "摄影"}
      </Link>

      <article className="project-layout">
        <aside className="project-copy">
          <p>{work.category}</p>
          <h1>{work.title}</h1>
          <div className="project-facts">
            <span>{work.year}</span>
            <span>
              <MapPin size={16} />
              {work.location}
            </span>
          </div>
          <p className="project-description">{work.description}</p>
        </aside>

        <div className="project-media-list">
          {work.type === "video" ? (
            <VideoEmbed work={work} />
          ) : (
            images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                className="project-image"
                type="button"
                style={image ? undefined : fallbackStyle}
                onClick={() => setLightboxIndex(index)}
              >
                {image ? <img src={image} alt={`${work.title} ${index + 1}`} /> : <span>{work.title}</span>}
              </button>
            ))
          )}
        </div>
      </article>

      {related.length > 0 && (
        <nav className="related-nav" aria-label="相邻作品">
          {related.map((item) => (
            <Link key={item.id} to={`/works/${item.id}`}>
              <span>{item.type === "video" ? "视频" : "摄影"}</span>
              <strong>{item.title}</strong>
            </Link>
          ))}
        </nav>
      )}

      {lightboxIndex >= 0 && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          title={work.title}
          onClose={() => setLightboxIndex(-1)}
          onPrev={() => setLightboxIndex((value) => (value === 0 ? images.length - 1 : value - 1))}
          onNext={() => setLightboxIndex((value) => (value === images.length - 1 ? 0 : value + 1))}
        />
      )}
    </PageTransition>
  );
}
