import "./debitCard.css";

const DebitCard = () => {
  return (
    <div className="debitCardDetails">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266"
        alt=""
        className="dbLogo"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
        alt=""
        className="dbChip"
      />
      <div className="dbNumber">1278 1897 8004 3949</div>
      <div className="dbName">LACORNE D'OR</div>
      <div className="dbDate">12/25</div>
      <div className="dbRing"></div>
    </div>
  );
};

export default DebitCard;
