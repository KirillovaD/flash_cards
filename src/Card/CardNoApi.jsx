import React from "react";

import styles from "./Card.module.scss";
import data from "../data/words.json";
import ButtonCheck from "./ButtonCheck";
import arrowBack from "../assets/images/arrow_back.png";
import arrowNext from "../assets/images/arrow_right.png";
// import Button from "../DeckPage/Button/Button";

class CardNoApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: data,
      currentIndex: 0,
    };
  }
  onNextClick = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };

  render() {
    let { words, currentIndex } = this.state;
    let card = words[currentIndex];

    return (
      <div className={styles.card}>
        <div className={styles.card__word}>
          <img
            className={styles.card__arrow_back}
            src={arrowBack}
            alt="arrow back"
            onClick={this.onPrevClick}
          />
          <div>
            <h1> {card.english} </h1>
            <h2>{card.transcription}</h2>
          </div>

          <img
            className={styles.card__arrow_next}
            src={arrowNext}
            alt="arrow next"
            onClick={this.onNextClick}
          />
        </div>
        <div>
          <ButtonCheck />
        </div>
      </div>
    );
  }
}
export default CardNoApi;
