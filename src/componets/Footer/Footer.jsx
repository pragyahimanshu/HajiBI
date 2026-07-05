import React from "react";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className="bg-[#020405] text-stone-300">
      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <div className={styles.brandSection}>
            <h2>HajiBI</h2>
            <p>Discover movies. Build collections. Enjoy premium entertainment.</p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/in/pragyahimanshu" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="#">YouTube</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <div className={styles.linkGrid}>
            <div>
              <h3>Quick Links</h3>
              <a href="/">Home</a>
              <a href="/movies">Movies</a>
              <a href="/series">TV Shows</a>
              <a href="/">Collections</a>
            </div>
            <div>
              <h3>Categories</h3>
              <a href="/movies?genre=action">Action</a>
              <a href="/movies?genre=comedy">Comedy</a>
              <a href="/movies?genre=horror">Horror</a>
              <a href="/movies?genre=scifi">Sci-Fi</a>
            </div>
            <div>
              <h3>Resources</h3>
              <a href="#">About Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Support</a>
            </div>
          </div>
          <div className={styles.newsletterSection}>
            <h3>Newsletter</h3>
            <p>Get updates on new movies, features and special offers.</p>
            <div className={styles.newsletterForm}>
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 pragyahimanshu</span>
          <span>Made by Pragya Himanshu</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
