import InfoSection from "../InfoSection/InfoSection";
import Deck from "../Deck/Deck";
import styles from "./Main.module.scss";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className={styles.main}>
      <InfoSection />
      <Link to="/deck/:1">
        <Deck id="1" name="First deck" number="30" />
      </Link>
      <Link to="/deck/:2">
        <Deck id="2" name="Second deck" number="70" />
      </Link>
    </div>
  );
}

export default Main;
