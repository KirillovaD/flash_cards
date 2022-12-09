import React from "react";
import Card from "../Word/Word";

import styles from "./CardCarousel.module.scss";

import arrowBack from "../../assets/images/arrow_back.png";
import arrowNext from "../../assets/images/arrow_right.png";
import success from "../../assets/images/success_icon.png";

class CardCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      currentIndex: 0,
      pressed: false,
    };
  }
  async componentDidMount() {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const result = await response.json();
    this.setState({
      words: result,
    });
  }
  onNextClick = () => {
    let { currentIndex } = this.state;
    let nextIndex = currentIndex + 1;
    this.setState({ currentIndex: nextIndex, pressed: false });
  };
  onPrevClick = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      pressed: false,
    });
  };
  setPressed = () => {
    this.setState({ pressed: true });
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
          <Card
            english={card.english}
            transcription={card.transcription}
            translation={card.russian}
            pressed={this.state.pressed}
            setPressed={this.setPressed}
          />

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
