import "./CartPopup.scss";
import { useHistory } from "react-router";
import { useCallback } from "react";

const CartPopup = (props) => {
  const history = useHistory();
  const { count } = props;

  const getNumeral = (number) => (
    number % 10 > 1 && number % 10 < 5
      ? "товара"
      : (number % 10 > 4 && number % 10 <= 9) || number % 10 === 0
        ? "товаров"
        : "товар"
  );

  const goToCart = useCallback(() => history.push('/cart'), [history]);
  
  return (
    <div
      className="cartPopup"
      onClick={goToCart}
    >
      В корзине {count} {getNumeral(count)}
    </div>
  )
};

export default CartPopup;