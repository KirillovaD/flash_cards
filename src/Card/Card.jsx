import styles from "./Card.module.scss";

function Card(props) {
  const onActiveButton = () => {
    props.setPressed(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.word__text}>
        <h1> {props.english} </h1>
        <h2>{props.transcription}</h2>
      </div>
      <div>
        {props.pressed ? (
          <p className={styles.p__translation}>{props.translation}</p>
        ) : (
          <button
            className={props.pressed ? styles.btn_hidden : styles.btn}
            onClick={onActiveButton}
          >
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}
export default Card;
