import { useState } from "react";

import styles from "./Card.module.scss";
import words from "../data/words.json";
import ButtonCheck from "./ButtonCheck";
import Button from "../DeckPage/Button/Button";

export default function Card() {
  const [pressed, setPressed] = useState(false);
  const [text, addTranslation] = useState("");

  let onActiveButton = () => {
    setPressed(!pressed);
    let translation = text;
    translation = words[0].russian;
    addTranslation(translation);
  };
  return (
    <div className={styles.card}>
      <div>
        <h1> {words[0].english} </h1>
        <h2>{words[0].transcription}</h2>
      </div>
      <div>
        <ButtonCheck />
      </div>
    </div>
  );
}
