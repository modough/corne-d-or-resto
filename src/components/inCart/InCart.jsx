import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useStateValue } from "../reducer/StateProvider";
import "./inCart.css";
let cartItems = [];
const InCart = ({ imgSrc, name, price, itemId }) => {
  // Create default quantity
  const [qty, setQty] = useState(1);
  const [{ cart }, dispatch] = useStateValue();
  //sync price with quantity
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty, cart, price]);

  //add or remove menu in basket
  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      setQty(qty - 1);
    }
  };

  return (
    <div className="inCart">
      <div className="cartImgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="cartSection">
        <h2 className="sectionName">{name}</h2>
        <div className="sectionQty">
          <span className="qty">X {qty}</span>
          <div className="qtyToggle">
            <RemoveRounded
              className="removeQty"
              onClick={() => updateQty("remove", itemId)}
            />
            <AddRounded
              className="addQty"
              onClick={() => updateQty("add", itemId)}
            />
          </div>
        </div>
      </div>
      <div className="cartPrice">
        <p className="price">{itemPrice}</p>
        <span className="currency">FCFA</span>
      </div>
    </div>
  );
};

export default InCart;
