import { ChevronRightRounded } from "@mui/icons-material";
import { useEffect } from "react";
import "./card.css";

const Card = ({ imgSrc, name, isActive }) => {
  useEffect(() => {
    const menuCard = document.querySelectorAll(".rowCard");

    function setMenuCardActive() {
      menuCard.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((item) =>
      item.addEventListener("click", setMenuCardActive)
    );
  }, []);

  return (
    <div className={isActive ? "rowCard active" : "rowCard"}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
};

export default Card;
