"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "hero", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "system", label: "Solution" },
  { id: "architecture", label: "Technology" },
  { id: "demonstration", label: "Demo" },
  { id: "impact", label: "Impact" },
];

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // We want to find the intersecting entry that takes up the most space or just triggers.
        // For simplicity, the last one intersecting is often the furthest down,
        // but finding the one with the highest intersection ratio is better.
        let maxRatio = 0;
        let currentActive = activeSection;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentActive = entry.target.id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(currentActive);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="side-navigation" aria-label="Page progress">
      <div className="side-navigation__track">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div key={item.id} className="side-navigation__item">
              <button
                onClick={() => handleScrollTo(item.id)}
                className={`side-navigation__button ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                title={item.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="side-navigation__indicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <motion.span
                  className="nav-label"
                  initial={false}
                  animate={{
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: isActive ? "1.45rem" : "1.0rem",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
