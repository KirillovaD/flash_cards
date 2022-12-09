import CardCarousel from "./CardsCarousel/CardCarousel";
import ErrorBoundary from "../ErrorBoundery";

import styles from "./Cards.module.scss";

export function Cards() {
  return (
    <div className={styles.cards__container}>
      <CardCarousel />
    </div>
  );
}
