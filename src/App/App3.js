import CardCarousel from "../Card/CardCarousel";
import CardNoApi from "../Card/CardNoApi";
import ErrorBoundary from "../ErrorBoundery";

import styles from "./App3.module.scss";

function App3() {
  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <CardCarousel />
      </ErrorBoundary>
    </div>
  );
}

export default App3;
