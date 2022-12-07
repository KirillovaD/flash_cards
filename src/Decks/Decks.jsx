import HeaderDeck from "./HeaderDeckPage/HeaderDeckPage";

export function Decks(props) {
  const id = props.match.params.id;
  return (
    <div>
      id === "1" ? (
      <HeaderDeck name="First deck" number="30" />
      ) : (
      <HeaderDeck name="Second deck" number="70" />)
    </div>
  );
}
