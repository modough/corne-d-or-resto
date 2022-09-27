import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import "./bottomMenu.css";
import BottomMenuContainer from "../bottomMenuContainer/BottomMenuContainer";
import { useEffect } from "react";

const BottomMenu = () => {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((item) => item.addEventListener("click", setMenuActive));
  }, []);
  return (
    <div className="bottomMenu">
      <ul id="menu">
        <BottomMenuContainer link={"#"} icon={<HomeRounded />} isHome />
        <BottomMenuContainer link={"#"} icon={<Chat />} />
        <BottomMenuContainer
          link={"#"}
          icon={<AccountBalanceWalletRounded />}
        />
        <BottomMenuContainer link={"#"} icon={<Favorite />} />
        <BottomMenuContainer link={"#"} icon={<SummarizeRounded />} />
        <BottomMenuContainer link={"#"} icon={<Settings />} />
        <div className="bottomMenuIndicator"></div>
      </ul>
    </div>
  );
};

export default BottomMenu;
