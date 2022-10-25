import HeaderMainPage from "../MainPage/Header/Header";
import FooterMainPage from "../MainPage/Footer/Footer";
import Main from "../MainPage/Main/Main";

import "./App.css";

function App() {
  return (
    <div className="container">
      <HeaderMainPage />
      <Main />
      <FooterMainPage />
    </div>
  );
}

export default App;
