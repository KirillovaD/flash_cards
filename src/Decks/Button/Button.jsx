import styles from "./Button.module.scss";

function Button(props) {
  const { name, ...other } = props;
  return (
    <button {...other} className={styles.btn}>
      {name}
    </button>
  );
}

export default Button;
