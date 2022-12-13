import { useParams } from "react-router-dom";
import HeaderDeck from "./HeaderDeckPage/HeaderDeckPage";

export function Deck(props) {
  const { id } = useParams();
  return (
    <div>
      {id == 1 ? (
        <HeaderDeck name="Еда" number="30" />
      ) : (
        <HeaderDeck name="Транспорт" number="70" />
      )}

      <h2>Словарь слов</h2>
    </div>
  );
}
