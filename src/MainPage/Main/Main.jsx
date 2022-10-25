import InfoSection from "../InfoSection/InfoSection";
import Deck from "../../Deck/Deck";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <InfoSection />
      <Deck name="First deck" number="30" />
      <Deck name="Second deck" number="70" />
    </div>
  );
}

export default Main;
