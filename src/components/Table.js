import React from "react";
import ProductsList from "./ProductsList";
import { useParams } from "react-router-dom";
import "./Table.css";

const Table = (props) => {
  const { items } = props;
  const params = useParams();
  const filteredList =
    params.category === "all"
      ? items
      : items.filter((item) => item.rname === params.category);
  return (
    <table>
      {!filteredList.length ? (
        <tbody>
          <tr>
            <td>Товара нет в наличии</td>
          </tr>
        </tbody>
      ) : (
        filteredList.map((item, i) => (
          <tbody key={i}>
            <tr>
              <td colSpan="5">
                <h1>{item.rname}</h1>
              </td>
            </tr>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Price</td>
              <td>Amount</td>
              <td>Total Sum</td>
            </tr>
            <ProductsList products={item.goods} />
          </tbody>
        ))
      )}
    </table>
  );
};

export default Table;
