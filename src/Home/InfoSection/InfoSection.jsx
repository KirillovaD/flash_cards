import styles from "./InfoSection.module.scss";
import listImg from "../../assets/images/list_icon.png";
import card from "../../assets/images/document_icon.png";
import add from "../../assets/images/add_icon.png";

function InfoSection() {
  return (
    <div className={styles.main__info}>
      <div className={styles.info__decks}>
        <img className={styles.info__decks__img} src={listImg} alt="list" />
        <span className={styles.info__decks__span}> 2 папки</span>
      </div>
      <div className={styles.info__crads}>
        <img className={styles.info__crads__img} src={card} alt="card" />
        <span className={styles.iinfo__crads__span}>100 карточек</span>
      </div>
      <div className={styles.info__addDeck}>
        <img className={styles.info__addDeck__img} src={add} alt="add" />
        <span className={styles.info__addDeck__span}>Добавить</span>
      </div>
    </div>
  );
}
export default InfoSection;
