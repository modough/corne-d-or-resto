import "./App.css";
import BottomMenu from "./components/bottomMenu/BottomMenu";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BottomMenu />
    </div>
  );
}

export default App;
