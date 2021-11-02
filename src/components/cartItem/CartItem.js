import "./CartItem.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrency } from "../../utils/currency";
import { api } from "../../core/api";
import Counter from "../counter/Counter";
import Dummy from "./dummy.png";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { item, amount } = props;

  const catalog = useSelector((state) => state.catalog.catalog);

  const product = catalog.find(el => el.id === item);
  const { title, description, price, imageName, minAmount, maxAmount } = product;

  const [image, setImage] = useState();

  import(`../../../public/images/${imageName}`).then((image) => {
    setImage(image.default);
  }).catch(() => {
    setImage(undefined);
  });

  const onCounterChange = (count) => {
    dispatch(
      api.cart.setAmountSlice({
        item: item,
        amount: count
      })
    )
  };

  const deleteHandler = () => {
    dispatch(
      api.cart.setCartSlice({
        cartArray: item,
      })
    )
  }

  const bookmarkHandler = () => {
    dispatch(
      api.cart.setCartSlice({
        bookmarkArray: item,
      })
    )
  }

  return (
    <div className="cartItem">
      <div className="cartItem__wrapper">
        <div className="cartItem__image">
          <img src={image || Dummy} alt={title} />
        </div>
        <div className="cartItem__info">
          <div className="cartItem__title">
            {title}
          </div>
          <div className="cartItem__description">
            {description}
          </div>
          <div className="cartItem__price">
            {`${price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} ${getCurrency("ru")}`}
          </div>
          <div className="cartItem__actions">
            <span onClick={bookmarkHandler}>Избранные</span>
            <span onClick={deleteHandler}>Удалить</span>
          </div>
        </div>
        <div className="cartItem__counter">
          <Counter
            min={minAmount}
            max={maxAmount}
            amount={amount}
            onCounterChange={onCounterChange}
          />
        </div>
      </div>
    </div>
  )
};

export default CartItem;