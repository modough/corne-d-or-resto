import Banner from "../banner/Banner";
import DishContainer from "../dishContainer/DishContainer";
import "./main.css";
import deliveryPic from "../../assets/My project.png";
import DebitCard from "../debitCard/DebitCard";

import InCart from "../inCart/InCart";
import { ChevronRightRounded } from "@mui/icons-material";
import TotalInCart from "../totalInCart/TotalInCart";
import { useStateValue } from "../reducer/StateProvider";
import { Fragment, useEffect, useState } from "react";
import { Items } from "../data/Data";

const Main = ({ sidebar }) => {
  const [{ cart }, dispatch] = useStateValue();

  const [isMainData, setIsMainData] = useState(
    Items.filter((elm) => elm.itemId === "buger01")
  );
  useEffect(() => {
    const menuCard = document.querySelectorAll(".rowCard");
    // add or remove active class on Card.js
    function setMenuCardActive() {
      menuCard.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((item) =>
      item.addEventListener("click", setMenuCardActive)
    );
  }, [isMainData, cart]);
  return (
    <main>
      <div className="mainContainer">
        <div className="mainContainerBanner">
          <Banner name={"Mouhamed"} discount={"5000"} link={"#"} />
          <img src={deliveryPic} alt="" className="deliveryPicture" />
          <div className="bannerStyle"></div>
        </div>
        <DishContainer
          name={"Menus par Catégorie"}
          setIsMainData={setIsMainData}
          isMainData={isMainData}
        />
      </div>
      <div className={sidebar ? "rightMenu active" : "rightMenu"}>
        <div className="debitCardContainer">
          <div className="debitCard">
            <DebitCard />
          </div>
        </div>

        {!cart ? (
          <div></div>
        ) : (
          <Fragment>
            <div className="checkoutCartContainer">
              <div className="checkoutHeader">
                <h3>Panier</h3>
                <div className="viewAll">
                  <p>Voir Tout</p>
                  <i>
                    <ChevronRightRounded />
                  </i>
                </div>
              </div>
              <div className="checkout">
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <InCart
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
            </div>
            <TotalInCart />
          </Fragment>
        )}
      </div>
    </main>
  );
};

export default Main;
