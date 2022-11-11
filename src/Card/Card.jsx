import styles from "./Card.module.scss";
import ButtonCheck from "./ButtonCheck";

function Card(props) {
  return (
    <div className={styles.word__text}>
      <h1> {props.english} </h1>
      <h2>{props.transcription}</h2>
    </div>
  );
}
export default Card;
