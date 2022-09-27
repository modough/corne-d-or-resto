import { ChevronRightRounded } from "@mui/icons-material";
import Card from "../card/Card";
import "./dishContainer.css";
import { MenuItems } from "../data/Data";
import ItemCard from "../itemCard/ItemCard";

const DishContainer = ({ name }) => {
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
          MenuItems.map((menuItem) => (
            <Card
              imgSrc={menuItem.imgSrc}
              name={menuItem.name}
              key={menuItem.id}
              isActive={menuItem.id === 1 ? true : false}
            />
          ))}
      </div>
      <div className="dishItemContainer">
        <ItemCard
          imgSrc={
            "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0"
          }
          ratings={5}
          name={"Burger Bistro"}
          price={"2500"}
        />
      </div>
    </div>
  );
};

export default DishContainer;
