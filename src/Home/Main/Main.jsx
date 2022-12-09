import { Link } from "react-router-dom";

import InfoSection from "../InfoSection/InfoSection";
import ToDeckLink from "../ToDeckLink/ToDeckLink";

import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.main}>
      <InfoSection />
      <Link to="/deck/1">
        <ToDeckLink id="1" name="Еда" number="30" />
      </Link>
      <Link to="/deck/2">
        <ToDeckLink id="2" name="Транспорт" number="70" />
      </Link>
    </div>
  );
}

export default Main;
