import { Github, Mail } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`} aria-label="发送邮件">
          <Mail size={18} />
          <span>{profile.email}</span>
        </a>
        {profile.socials.map((social) => (
          <a key={social.url} href={social.url} target="_blank" rel="noreferrer">
            <Github size={18} />
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
