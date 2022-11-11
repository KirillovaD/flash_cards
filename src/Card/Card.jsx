import React from "react";

import styles from "./Card.module.scss";
// import words from "../data/words.json";
import ButtonCheck from "./ButtonCheck";
import arrowBack from "../assets/images/arrow_back.png";
import arrowNext from "../assets/images/arrow_right.png";
import success from "../assets/images/success_icon.png";
// import Button from "../DeckPage/Button/Button";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      currentIndex: 0,
    };
  }
  async componentDidMount() {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const result = await response.json();
    // console.log(result);
    this.setState({
      words: result,
    });
  }
  onNextClick = () => {
    let { currentIndex, words } = this.state;
    let nextIndex = currentIndex + 1;
    // if (nextIndex === words.length) {
    //    nextIndex = 0;
    // }
    this.setState({ currentIndex: nextIndex });
  };
  onPrevClick = () => {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  };

  render() {
    let { words, currentIndex } = this.state;
    let card = words[currentIndex];
    if (currentIndex === words.length) {
      return <img className={styles.img__success} src={success} />;
    }

    if (card) {
      return (
        <div className={styles.card}>
          <div className={styles.card__word}>
            <img
              className={styles.card__arrow_back}
              src={arrowBack}
              alt="arrow back"
              onClick={this.onPrevClick}
            />
            <div className={styles.word__text}>
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
    return "Загрузка";
  }
}
export default Card;
