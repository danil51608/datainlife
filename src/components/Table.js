import React from "react";
import ProductsList from "./ProductsList";
import "./Table.css";

const Table = (props) => {
  const { items } = props;
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <>
            <tr key={item.rid}>
              <td colspan="5">
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
            <ProductsList
              products={item.goods}
              setInCart={props.setInCart}
              inCart={props.inCart}
            />
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
