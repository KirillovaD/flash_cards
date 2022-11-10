import { PureComponent } from "react";

import styles from "./Card.module.scss";
// import words from "../data/words.json";
import ButtonCheck from "./ButtonCheck";
import arrowBack from "../assets/images/arrow_back.png";
import arrowNext from "../assets/images/arrow_right.png";
// import Button from "../DeckPage/Button/Button";

export default class Card extends PureComponent() {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
    };
  }
  componentDidMount() {
    fetch("http://itgirlschool.justmakeit.ru/api/words");
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.card__word}>
          <img
            className={styles.card__arrow_back}
            src={this.arrowBack}
            alt="arrow back"
          />
          <div>
            <h1> {this.words[0].english} </h1>
            <h2>{this.words[0].transcription}</h2>
          </div>

          <img
            className={styles.card__arrow_next}
            src={this.arrowNext}
            alt="arrow next"
          />
        </div>
        <div>
          <ButtonCheck />
        </div>
      </div>
    );
  }
}
