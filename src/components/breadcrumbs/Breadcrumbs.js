import "./Breadcrumbs.scss";

const Breadcrumbs = (props) => {

  const { breadcrumbs } = props

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(item =>
        <div key={item} className="breadcrumbs__item">{item}</div>
      )}
    </div>
  )
};

export default Breadcrumbs;