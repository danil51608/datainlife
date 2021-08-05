import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const { product } = props;
  const [sum, setSum] = useState(0);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const addToCart = (amount) => {
    dispatch({
      type: "addToCart",
      payload: { id: product.gid, amount: amount, price: product.gprice },
    });
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setSum(e.target.value * product.gprice);
    addToCart(e.target.value);
  };

  return (
    <tr key={product.gid}>
      <td>{product.gid}</td>
      <td>{product.gname}</td>
      <td>{product.gprice}</td>
      <td className="amount__col">
        <input
          className="amount__input"
          type="number"
          min="0"
          step="1"
          value={amount}
          onChange={(e) => handleAmountChange(e)}
        />
      </td>
      <td>{sum}</td>
    </tr>
  );
};
export default Product;
