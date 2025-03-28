import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.NavBar} ${isScrolled ? styles.scrolled : ""}`}>
      <h1 className={styles.logo}>VertexSites</h1>
      <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <ul className={`${styles.menuNav} ${isMenuOpen ? styles.active : ""}`}>
        <li>Services</li>
        <li>Pricing</li>
        <li>Portfolio</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <li className={styles.getStarted}>Get Started</li>
      </ul>
    </nav>
  );
}

export default NavBar;
