import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Decks } from "./Decks/Decks";
import { Cards } from "./Cards/Cards";
import ErrorBoundary from "./ErrorBoundery";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/deck/:id" element={<Decks />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;

function Profile() {
  return <h1>Личный кабинет</h1>;
}

function NoMatch() {
  return <h1>404 страница</h1>;
}
