import "./Cart.scss";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import OrderingForm from "../../components/orderingForm/OrderingForm";
import { getCurrency } from "../../utils/currency";
import { catalogMock } from "../../mock/catalogMock";
import { useHistory } from "react-router";
import { useCallback } from "react";
import { api } from "../../core/api";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart.cartArray);

  const getPrice = () => {
    const prices = cart.map(product => catalogMock.find(item => item.id === product.item).price * product.amount);
    return prices.reduce((acc, sum) => Number(acc) + Number(sum), 0);
  }

  const goToCatalog = useCallback(() => history.push('/'), [history]);

  const clearCart = () => {
    dispatch(
      api.cart.setEmptyCartSlice()
    )
  }

  return (
    <div className="cart">
      <div className="cart__items">
        <div className="cart__header">
          <span>Товар</span>
          <span>Кол-во</span>
        </div>
        {cart.length > 0
          ? [...cart].sort((a, b) => a.item - b.item).map(product => (
            <CartItem
              key={product.item}
              item={product.item}
              amount={product.amount}
            />))
          : <div className="cart__dummy">
            Корзина пуста
          </div>

        }
        <div className="cart__buttons">
          <button
            className="button button_type_outline button_size_medium"
            onClick={clearCart}
          >
            Очистить корзину
          </button>
          <button
            className="button button_type_default button_size_medium"
            onClick={goToCatalog}
          >
            Продолжить покупки
          </button>
        </div>
      </div>
      <div className="cart__order">
        <OrderingForm
          price={`${getPrice().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} ${getCurrency("rub")}`}
        />
      </div>
    </div>
  )
};

export default Cart;