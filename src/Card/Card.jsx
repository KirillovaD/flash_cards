import { useState } from "react";

import styles from "./Card.module.scss";
import words from "../data/words.json";
import ButtonCheck from "./ButtonCheck";
import arrowBack from "../assets/images/arrow_back.png";
import arrowNext from "../assets/images/arrow_right.png";
// import Button from "../DeckPage/Button/Button";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__word}>
        <img
          className={styles.card__arrow_back}
          src={arrowBack}
          alt="arrow back"
        />
        <div>
          <h1> {words[0].english} </h1>
          <h2>{words[0].transcription}</h2>
        </div>

        <img
          className={styles.card__arrow_next}
          src={arrowNext}
          alt="arrow next"
        />
      </div>
      <div>
        <ButtonCheck />
      </div>
    </div>
  );
}
