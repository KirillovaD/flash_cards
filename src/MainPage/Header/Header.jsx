import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>
        <span className={styles.flash}>Flash </span>
        <span className={styles.vocab}>Vocab </span>
        <span className={styles.cards}>Cards </span>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>Log In</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
