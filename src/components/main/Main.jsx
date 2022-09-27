import Banner from "../banner/Banner";
import DishContainer from "../dishContainer/DishContainer";
import "./main.css";
import deliveryPic from "../../assets/My project.png";

const Main = () => {
  return (
    <main>
      <div className="mainContainer">
        <div className="mainContainerBanner">
          <Banner name={"Mouhamed"} discount={"5000"} link={"#"} />
          <img src={deliveryPic} alt="" className="deliveryPicture" />
        </div>
        <DishContainer name={"Menus par Catégorie"} />
      </div>
      <div className="rightMenu"></div>
    </main>
  );
};

export default Main;
