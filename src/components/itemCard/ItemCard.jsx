import "./itemCard.css";
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";

const ItemCard = ({ imgSrc, name, ratings, price }) => {
  return (
    <div className="itemCard">
      <div className="isFavourite">
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="contentBottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i key={i} className="rating">
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              {price}
              <span> FCFA</span>
            </h3>
          </div>
          <i className="addToCart">
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
