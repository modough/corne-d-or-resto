import { ChevronRightRounded } from "@mui/icons-material";

import "./card.css";

const Card = ({ imgSrc, name, isActive }) => {
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
