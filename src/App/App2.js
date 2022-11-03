import styles from "./App.module.scss";
import HeaderDeck from "../DeckPage/HeaderDeckPage/HeaderDeckPage";

function App2() {
  return (
    <div className={styles.container}>
      <HeaderDeck name="First deck" number="30" />
    </div>
  );
}

export default App2;
