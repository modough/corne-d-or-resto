import { SearchRounded, ShoppingCartRounded } from "@mui/icons-material";
import "./header.css";
import LogoImg from "../../assets/corne.jpg";
import LogoText from "../../assets/corne1.jpg";
//import { useEffect } from "react";

const Header = ({ showSideNavbar }) => {
  //add a active class in another component with useEffect
  //useEffect(() => {
  //  const toggleToCart = document.querySelector(".shoppingCart");
  // toggleToCart.addEventListener("click", () => {
  //   document.querySelector(".rightMenu").classList.toggle("active");
  // });
  // }, []);

  return (
    <header>
      <div className="logoImage">
        <img src={LogoImg} alt="" className="logo img" />
        <img src={LogoText} alt="" className="logo text" />
      </div>
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Rechercher"></input>
      </div>
      <div className="shoppingCart" onClick={showSideNavbar}>
        <ShoppingCartRounded className="cart" />
        <div className="cartContent">
          <p>2</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://th.bing.com/th/id/OIP.S_x4F7SdhbB7RexR0sisYwHaNK?pid=ImgDet&rs=1"
            alt=""
            className="profilePicture"
          />
          <h2 className="username">Mouhamed</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
