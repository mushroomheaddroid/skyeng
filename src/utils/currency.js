export const getCurrency = (currency) => {
  switch (currency) {
    case "rub":
      return "руб.";
    case "usd":
      return "долл.";
    case "eur":
      return "евро";
    default:
      return "руб."
  }
};