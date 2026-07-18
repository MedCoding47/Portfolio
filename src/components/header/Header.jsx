import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import "./Header.scss";

const NAV_ITEMS = ["about", "experience", "projects", "skills", "education", "contact"];

export default function Header() {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        <button className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="header__logo-bracket">&lt;</span>
          <span className="header__logo-name">Ayat</span>
          <span className="header__logo-dot">.</span>
          <span className="header__logo-bracket">/&gt;</span>
        </button>

        <nav className={`header__nav ${mobileOpen ? "header__nav--open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`header__nav-link ${activeSection === item ? "header__nav-link--active" : ""}`}
              onClick={() => scrollTo(item)}
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </nav>

        <div className="header__actions">
          <button className="header__lang-btn" onClick={toggleLang} title="Toggle language">
            {i18n.language === "en" ? "DE" : "EN"}
          </button>

          <button className="header__theme-btn" onClick={toggleTheme} title="Toggle theme">
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button className="header__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
