import { Link } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./HeaderDeckPage.module.scss";
import deck from "../../assets/images/multiply_icon.png";
import edit from "../../assets/images/edit_icon.png";

function HeaderDeck(props) {
  return (
    <div className={styles.headerDeck}>
      <div className={styles.headerDeck__info}>
        <img className={styles.deck__img} src={deck} alt="deck" />
        <h1 className={styles.deck__h1}>{props.name}</h1>
        <img className={styles.edit__img} src={edit} alt="edit" />
        <p className={styles.deck__p}>{props.wordLearned} слов выучино</p>
        <p className={styles.deck__p}>{props.number} слов</p>
      </div>
      <div className={styles.headerDeck__btn}>
        <Link to="/cards">
          <Button
            name={"Учить"}
            className="headerDeck__btn__learn"
            title="button"
          />
        </Link>
        <Button
          name={"Добавить слово"}
          className="headerDeck__btn__add"
          title="button"
        />
      </div>
    </div>
  );
}

export default HeaderDeck;
