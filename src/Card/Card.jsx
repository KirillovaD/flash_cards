import { useState } from "react";

import styles from "./Card.module.scss";

function Card(props) {
  const [translation, setTranslation] = useState("");
  const [pressed, setPressed] = useState(false);

  const onActiveButton = () => {
    setPressed(!pressed);

    let translationActive = translation;
    translationActive = props.translation;
    setTranslation(translationActive);
  };

  return (
    <div className={styles.card}>
      <div className={styles.word__text}>
        <h1> {props.english} </h1>
        <h2>{props.transcription}</h2>
      </div>

      <button
        className={pressed ? styles.btn_hidden : styles.btn}
        onClick={onActiveButton}
      >
        Проверить
      </button>
      <p className={styles.p__translation}>{translation}</p>
    </div>
  );
}
export default Card;
