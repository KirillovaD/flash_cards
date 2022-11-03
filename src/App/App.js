import HeaderMainPage from "../MainPage/Header/Header";
import FooterMainPage from "../MainPage/Footer/Footer";
import Main from "../MainPage/Main/Main";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <HeaderMainPage />
      <Main />
      <FooterMainPage />
    </div>
  );
}

export default App;
