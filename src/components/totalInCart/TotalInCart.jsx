import "./totalInCart.css";

const TotalInCart = () => {
  return (
    <div className="totalInCart">
      <div className="totalItem">
        <h3>Total</h3>
        <p>
          7600 <span>FCFA</span>
        </p>
      </div>
      <button className="checkoutBtn">Valider</button>
    </div>
  );
};

export default TotalInCart;
