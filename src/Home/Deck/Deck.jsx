import styles from "./Deck.module.scss";
import deck from "../../../src/assets/images/multiply_icon.png";
import arrow from "../../../src/assets/images/arrow_right.png";

function Deck(props) {
  return (
    <div className={styles.deck}>
      <div className={styles.leftEl}>
        <img className={styles.deck__img} src={deck} alt="deck" />
        <p className={styles.deck__p}>{props.name}</p>
      </div>
      <div className={styles.rightEl}>
        <p className={styles.deck__p}>{props.number} words</p>
        <img className={styles.deck__imgArrow} src={arrow} alt="arrow right" />
      </div>
    </div>
  );
}
export default Deck;
