import "./Selector.scss";

const Selector = (props) => {

  const { values, onChange } = props;

  return (
    <select
      onChange={onChange}
      className="selector"
      name="">
      {values.map(option => (
        <option
          key={option.value}
          defaultValue={option.selected}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Selector;