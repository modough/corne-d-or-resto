import "./bottomMenuContainer.css";

const BottomMenuContainer = ({ link, icon, isHome }) => {
  return (
    <li className={isHome ? "bottomMenuLi active" : "bottomMenuLi"}>
      <a href={link}>
        <span className="icon"> {icon}</span>
      </a>
    </li>
  );
};

export default BottomMenuContainer;
