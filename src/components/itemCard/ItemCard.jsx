import "./itemCard.css";
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Items } from "../data/Data";
import { useStateValue } from "../reducer/StateProvider";

import { actionType } from "../reducer/Reducer";
let cartData = [];
const ItemCard = ({ imgSrc, name, ratings, price, itemId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const [isInCart, setIsInCart] = useState(null);
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    if (isInCart) {
      cartData.push(isInCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isInCart, dispatch]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="itemCard">
      <div
        className={isFavorite ? "isFavourite active" : "isFavourite"}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="contentBottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((elm, i) => (
              <i
                key={i}
                className={currentValue > i ? "rating orange" : "rating gray"}
                onClick={() => handleClick(i++)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              {price}
              <span> FCFA</span>
            </h3>
          </div>
          <i
            className="addToCart"
            onClick={() => setIsInCart(Items.find((n) => n.id === itemId))}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
