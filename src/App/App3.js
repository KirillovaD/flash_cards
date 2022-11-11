import Card from "../Card/Card";
import CardNoApi from "../Card/CardNoApi";
import ErrorBoundary from "../ErrorBoundery";

import styles from "./App3.module.scss";

function App3() {
  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <Card />
      </ErrorBoundary>
    </div>
  );
}

export default App3;
