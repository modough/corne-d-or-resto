import "./banner.css";

const Banner = ({ link, discount, name }) => {
  return (
    <div className="bannerContent">
      <h3>Salut {name}</h3>
      <p>
        Recevez une réduction à partir <span>{discount}FCFA</span> d'achat
      </p>
      <a href={link}>En savoir plus</a>
    </div>
  );
};

export default Banner;
