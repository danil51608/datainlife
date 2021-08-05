import "./SideBar.css";
import Category from "./Category";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  const { products } = props;
  return (
    <ul>
      <li key={Math.random().toString()} className="category__link">
        <NavLink activeClassName="active" to="/all">
          All
        </NavLink>
      </li>
      {products.map((product, i) => (
        <Category key={i} category={product.rname} />
      ))}
    </ul>
  );
};

export default SideBar;
