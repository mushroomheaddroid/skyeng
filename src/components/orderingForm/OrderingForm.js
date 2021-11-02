import "./OrderingForm.scss";

const OrderingForm = (props) => {
  const { price } = props;

  return (
    <div className="orderingForm">
      <div className="orderingForm__wrapper">
        <div className="orderingForm__title">Оформление заказа</div>
        <input type="text" name="" placeholder="Имя Фамилия" id=""/>
        <input type="text" name="" placeholder="+ 7 904 000 80 80" id=""/>
        <input type="text" name="" placeholder="Адрес доставки" id=""/>
        <div className="orderingForm__price">Итого: { price ? price : "-" }</div>
        <button className="button button_type_outline button_size_large">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default OrderingForm;