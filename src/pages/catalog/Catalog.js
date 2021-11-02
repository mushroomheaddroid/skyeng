import "./Catalog.scss";
import Cards from "../../components/cards/Cards";
import Selector from "../../components/selector/Selector";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import CartPopup from "../../components/cartPopup/CartPopup";
import { api } from "../../core/api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogMock } from "../../mock/catalogMock";

const Catalog = () => {
  const dispatch = useDispatch();
  const breadcrumbs = ["Главная", "Каталог товаров"];
  const cart = useSelector((state) => state.cart.cart.cartArray);

  const selectorValues = [
    {
      value: "order_cheaper",
      label: "Порядок: сперва дешевле",
      selected: true,
    },
    {
      value: "order_expensive",
      label: "Порядок: сперва дороже",
      selected: false,
    }
  ];

  const selectorChangeHandler = (e) => {
    dispatch(
      api.config.setConfigSlice({
        sorter: e.target.value,
      })
    )
  };

  useEffect(() => {
    dispatch(
      api.catalog.setCatalogSlice(catalogMock)
    )
  }, [dispatch]);


  return (
    <div className="catalog">
      <div className="catalog__header">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />
        <Selector
          values={selectorValues}
          onChange={selectorChangeHandler}
        />
      </div>
      <Cards />
      {cart.length > 0 &&
        <CartPopup
          count={cart.length}
        />
      }
    </div>
  )
};

export default Catalog;