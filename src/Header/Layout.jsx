import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export function Layout() {
  return (
    <>
      <Link to="/">
        <h1>
          <span className={styles.flash}>Flash </span>
          <span className={styles.vocab}>Vocab </span>
          <span className={styles.cards}>Cards </span>
        </h1>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/cards">Карточки</Link>
          </li>
          <li>
            <Link to="/profile">Личный кабинет</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
