"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { id: "hero", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "system", label: "Solution" },
  { id: "architecture", label: "Technology" },
  { id: "demonstration", label: "Demo" },
  { id: "impact", label: "Impact" },
];

export function Navbar({ searchSlot, titleSlot }: { searchSlot?: React.ReactNode, titleSlot?: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Intersection Observer: track active section only on home page
  useEffect(() => {
    if (!isHome) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let current = activeSection;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            current = entry.target.id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(current);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
      }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => sectionObserver.disconnect();
  }, [activeSection, isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${id}`);
      }
    }
  };

  return (
    <nav
      className="site-navbar"
      aria-label="Main navigation"
    >
      <div className="site-navbar__inner">
        <Link 
          href="/" 
          className="site-navbar__logo" 
          aria-label="BhaarNetra Home"
        >
          <span className="site-navbar__wordmark">BHAARNETRA</span>
        </Link>

        {titleSlot && (
          <div style={{ marginLeft: '32px', display: 'flex', alignItems: 'center', height: '100%' }}>
            {titleSlot}
          </div>
        )}

        {isHome && (
          <div className="site-navbar__menu" style={{ marginLeft: 'auto' }}>
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`site-navbar__link ${isActive ? "site-navbar__link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}

        {searchSlot && (
          <div style={{ marginLeft: isHome ? '24px' : 'auto' }}>
            {searchSlot}
          </div>
        )}
      </div>
    </nav>
  );
}
