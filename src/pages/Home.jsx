import { ArrowRight, Camera, Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import WorkGrid from "../components/WorkGrid.jsx";
import { profile } from "../data/profile.js";
import { works } from "../data/works.js";

export default function Home() {
  const featured = works.filter((work) => work.featured).slice(0, 6);

  return (
    <PageTransition className="page">
      <section className="hero">
        <img
          src={`${import.meta.env.BASE_URL}images/hero/hero-city-blue-hour-1600.jpg`}
          alt="雨后蓝调城市街道摄影作品"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p>{profile.role}</p>
          <h1>{profile.name}</h1>
          <span>{profile.bio}</span>
          <div className="hero-actions">
            <Link to="/photography" className="primary-link">
              查看摄影
              <Camera size={18} />
            </Link>
            <Link to="/video" className="secondary-link">
              查看视频
              <Clapperboard size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p>Featured Works</p>
            <h2>精选作品</h2>
          </div>
          <Link to="/photography" className="text-link">
            全部作品
            <ArrowRight size={18} />
          </Link>
        </div>
        <WorkGrid works={featured} />
      </section>
    </PageTransition>
  );
}
