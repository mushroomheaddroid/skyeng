import "./Card.scss";
import { useState } from "react";
import { ShoppingCartIcon, HeartIcon } from "../../icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../core/api";
import { getCurrency } from "../../utils/currency";
import Dummy from "./dummy.png";

const Card = (props) => {
  const dispatch = useDispatch();
  const { id, title, description, imageName, price } = props;
  const catalog = useSelector((state) => state.catalog.catalog);
  const bookmarks = useSelector((state) => state.cart.cart.bookmarkArray);
  const cart = useSelector((state) => state.cart.cart.cartArray);

  const [image, setImage] = useState();
  import(`../../../public/images/${imageName}`).then((image) => {
    setImage(image.default)
  }).catch(() => {

  });

  const getIconClass = (type) => (
    type === "cart"
      ? !cart.find(el => el.item === id) ? "card__icon" : "card__icon card__icon_type_active"
      : bookmarks.indexOf(id) === -1 ? "card__icon" : "card__icon card__icon_type_active"
  );

  const addToCart = () => {
    dispatch(
      api.cart.setCartSlice({
        cartArray: id,
        amount: catalog.find(item => item.id === id).minAmount,
      })
    )
  };

  const addToBookmark = () => {
    dispatch(
      api.cart.setCartSlice({
        bookmarkArray: id
      })
    )
  };

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__icons">
          <div
            className={getIconClass("cart")}
            onClick={addToCart}
          >
            <ShoppingCartIcon />
          </div>
          <div
            className={getIconClass("bookmark")}
            onClick={addToBookmark}
          >
            <HeartIcon />
          </div>
        </div>
        <div className="card__image">
          <img src={image || Dummy} alt={title}/>
        </div>
        <div className="card__content">
          <div className="card__title">
            {title}
          </div>
          <div className="card__description">
            {description}
          </div>
          <div className="card__price">
            {`${price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} ${getCurrency("ru")}`}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;