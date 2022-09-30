import { ChevronRightRounded } from "@mui/icons-material";
import Card from "../card/Card";
import "./dishContainer.css";
import { MenuItems } from "../data/Data";
import ItemCard from "../itemCard/ItemCard";

import { Items } from "../data/Data";

const DishContainer = ({ name, setIsMainData, isMainData }) => {
  // filter categories
  const setData = (itemId) => {
    setIsMainData(Items.filter((elm) => elm.itemId === itemId));
  };

  return (
    <div className="dishContainer">
      <div className="menuCard">
        <div className="subMenuCard">
          <h3>{name}</h3>
          <div className="viewAll">
            <p>Voir Tout</p>
            <i>
              <ChevronRightRounded />
            </i>
          </div>
        </div>
      </div>
      <div className="rowContainer">
        {MenuItems &&
          MenuItems.map((data) => (
            <div onClick={() => setData(data.itemId)} key={data.id}>
              <Card
                imgSrc={data.imgSrc}
                name={data.name}
                isActive={data.id === 1 ? true : false}
              />
            </div>
          ))}
      </div>
      <div className="dishItemContainer">
        {isMainData &&
          isMainData.map((data) => (
            <ItemCard
              itemId={data.id}
              key={data.id}
              imgSrc={data.imgSrc}
              ratings={data.ratings}
              name={data.name}
              price={data.price}
            />
          ))}
      </div>
    </div>
  );
};

export default DishContainer;
