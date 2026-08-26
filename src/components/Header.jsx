import { Camera, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/profile.js";

const navItems = [
  { label: "首页", to: "/" },
  { label: "摄影", to: "/photography" },
  { label: "视频", to: "/video" },
  { label: "关于", to: "/about" },
  { label: "联系", to: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <Camera size={22} aria-hidden="true" />
        <span>{profile.name}</span>
      </NavLink>
      <button
        className="icon-button menu-button"
        type="button"
        aria-label={open ? "关闭导航" : "打开导航"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="主导航">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
