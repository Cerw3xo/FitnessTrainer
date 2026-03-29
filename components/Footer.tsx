import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Elevate Coaching. All rights reserved.</p>
      </div>
    </footer>
  );
}
