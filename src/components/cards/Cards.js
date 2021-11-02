import "./Cards.scss";
import Card from "../card/Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const catalog = useSelector((state) => state.catalog.catalog);
  const sorterType = useSelector((state) => state.config.config.sorter);

  const sortedCards = () => {
    if (sorterType === "order_cheaper") {
      return [...catalog].sort((a, b) => a.price - b.price);
    }
    return [...catalog].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="cards">
      <div className="cards__wrapper">
        {catalog.length > 0 && sortedCards().map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            imageName={card.imageName}
            price={card.price}
            min={card.minAmount}
          />
        ))}
      </div>
    </div>
  )
};

export default Cards;