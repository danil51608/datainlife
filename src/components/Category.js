import { NavLink } from "react-router-dom";

const Category = (props) => {
  if (props.category === undefined) {
    return null;
  }
  return (
    <li className="category__link">
      <NavLink activeClassName="active" to={`/${props.category}`}>
        {props.category}
      </NavLink>
    </li>
  );
};

export default Category;
