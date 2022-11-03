import { useState } from "react";
import styles from "./ButtonCheck.module.scss";
import words from "../data/words.json";

export default function ButtonCheck() {
  const [pressed, setPressed] = useState(false);
  const [text, addTranslation] = useState("");

  let onActiveButton = () => {
    setPressed(!pressed);
    let translation = text;
    translation = words[0].russian;
    addTranslation(translation);
  };
  return (
    <div>
      <button
        className={pressed ? styles.btn_hidden : styles.btn}
        onClick={onActiveButton}
      >
        Проверить
      </button>

      <p className={styles.p__translation}>{text}</p>
    </div>
  );
}
