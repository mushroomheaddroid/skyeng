import "./Counter.scss";
import { ArrowIcon } from "../../icons/icons";
import { useEffect, useState } from "react";

const Counter = (props) => {
  const { min, max, amount, onCounterChange } = props;
  const [current, setCurrent] = useState(amount | min | 0);

  // Таймаут для визуального изменения введённого некорректно числа на допустимое
  useEffect(() => {
    onCounterChange(Number(current));

    if (current && current > max) {
      setTimeout(() => {
        setCurrent(max);
      }, 200)
    }

    if (current && current < min) {
      setTimeout(() => {
        setCurrent(min);
      }, 200)
    }
  }, [current]);

  const addHandler = () => {
    if (current < max) {
      setCurrent(current + 1);
    }
  };

  const subtractHandler = () => {
    if (current > min) {
      setCurrent(current - 1);
    }
  };

  const onChangeHandler = (e) => {
    const number = e.target.value;
    if (!isNaN(number)) {
      setCurrent(number);
    }
  }

  return (
    <div className="counter">
      <input
        type="text"
        className="counter__number"
        value={current}
        onChange={onChangeHandler}
      />
      <div className="counter__buttons">
        <div className="up" onClick={addHandler}>
          <ArrowIcon />
        </div>
        <div className="down" onClick={subtractHandler}>
          <ArrowIcon />
        </div>
      </div>
    </div>
  )
}

export default Counter;