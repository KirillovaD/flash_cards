import React from "react";

import styles from "./Card.module.scss";
// import words from "../data/words.json";
import ButtonCheck from "./ButtonCheck";
import arrowBack from "../assets/images/arrow_back.png";
import arrowNext from "../assets/images/arrow_right.png";
import success from "../assets/images/success_icon.png";
import Card from "./Card";
// import Button from "../DeckPage/Button/Button";

class CardCarousel extends React.Component {
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
        <div className={styles.card__container}>
          <img
            className={styles.card__arrow_back}
            src={arrowBack}
            alt="arrow back"
            onClick={this.onPrevClick}
          />
          <div className={styles.card}>
            <Card english={card.english} transcription={card.transcription} />
            <ButtonCheck />
          </div>

          <img
            className={styles.card__arrow_next}
            src={arrowNext}
            alt="arrow next"
            onClick={this.onNextClick}
          />
        </div>
      );
    }
    return "Загрузка";
  }
}
export default CardCarousel;
