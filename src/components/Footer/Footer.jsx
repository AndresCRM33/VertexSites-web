import React from "react";
import styles from "./Footer.module.css";
import { Twitter, Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";

const logos = [
  { logo: <Facebook /> },
  { logo: <Instagram /> },
  { logo: <Twitter /> },
  { logo: <LinkedIn /> },
  { logo: <GitHub /> }
];

const services = ["Website Design", "Web Development", "Responsive Design", "SEO Optimization", "UX/UI Design"];
const company = ["About Us", "Our Team", "Careers", "Blog", "Contact Us"];
const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance", "Sitemap"];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.branding}>
          <h1 className={styles.logo}>VertexSites</h1>
          <span className={styles.description}>
            Creating exceptional web experiences that help businesses grow and succeed in the digital landscape.
          </span>
          <div className={styles.socials}>
            {logos.map((item, index) => (
              <div className={styles.icon} key={index}>
                {item.logo}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <h3 className={styles.titleFooter}>Services</h3>
            <ul>
              {services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.titleFooter}>Company</h3>
            <ul>
              {company.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.titleFooter}>Legal</h3>
            <ul>
              {legal.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <span>© 2025 VertexSites. All rights reserved.</span>
        <span>Made with ❤️ by VertexSites</span>
      </div>
    </footer>
  );
}

export default Footer;
