import { useState } from "react";
import "./App.css";
import BottomMenu from "./components/bottomMenu/BottomMenu";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideNavbar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="App">
      <Header showSideNavbar={showSideNavbar} />
      <Main sidebar={sidebar} />
      <BottomMenu />
    </div>
  );
};

export default App;
