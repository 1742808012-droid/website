import { Github, Mail, MessageCircle } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <PageTransition className="page section page-with-header">
      <div className="contact-layout">
        <div className="page-title">
          <p>Contact</p>
          <h1>联系合作</h1>
          <span>如果你有摄影、视频、活动记录或商业视觉需求，可以通过以下方式联系。</span>
        </div>

        <div className="contact-panel">
          <a href={`mailto:${profile.email}`}>
            <Mail size={22} />
            <div>
              <strong>邮箱</strong>
              <span>{profile.email}</span>
            </div>
          </a>
          {profile.socials.map((social) => (
            <a key={social.url} href={social.url} target="_blank" rel="noreferrer">
              <Github size={22} />
              <div>
                <strong>{social.label}</strong>
                <span>{social.url}</span>
              </div>
            </a>
          ))}
          <div className="contact-note">
            <MessageCircle size={22} />
            <div>
              <strong>合作信息</strong>
              <span>建议来信时附上项目类型、拍摄时间、城市和参考风格。</span>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
