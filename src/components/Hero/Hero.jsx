import styles from "./Hero.module.css";
import laptopImage from "../../assets/images/laptop-code.jpeg";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Modern Websites <br /> <span>Built for Success</span>
        </h1>
        <p>
          We create stunning, high-performance websites that help businesses grow and succeed in the digital landscape.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Get a Free Quote →</button>
          <button className={styles.secondaryButton}>View Our Work</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={laptopImage} alt="Laptop with code" />
      </div>
    </section>
  );
}

export default Hero;
