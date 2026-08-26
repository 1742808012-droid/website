import { Camera, Clapperboard, MapPin } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import { profile } from "../data/profile.js";

export default function About() {
  return (
    <PageTransition className="page section page-with-header">
      <div className="about-layout">
        <div className="about-portrait">
          <img
            src={`${import.meta.env.BASE_URL}images/hero/hero-city-blue-hour-1600.jpg`}
            alt="摄影师工作氛围照"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <p>About</p>
          <h1>关于我</h1>
          <span>{profile.bio}</span>
          <div className="about-facts">
            <div>
              <MapPin size={20} />
              <strong>{profile.location}</strong>
              <span>常驻地点</span>
            </div>
            <div>
              <Camera size={20} />
              <strong>Photo</strong>
              <span>摄影创作</span>
            </div>
            <div>
              <Clapperboard size={20} />
              <strong>Video</strong>
              <span>视频制作</span>
            </div>
          </div>
          <div className="service-list">
            {profile.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
