import React, { useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import AddToCart from "./components/AddToCart";
import SideBar from "./components/SideBar"
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalSum, setTotalSum] = useState(0);
  const [inCart, setInCart] = useState([])
  const totalHandler = (amount, subtractAmount) => {
      let t = amount.prev + amount.next
      setTotalAmount(t)
  };
  const getItems = () => {
    axios("https://datainlife.ru/junior_task/get_products.php")
      .then((response) => response.data)
      .then((data) => setItems(data));
  };

  return (
    <div className="container">
      <button onClick={getItems}>Get items</button>
      <div className="TableWrapper">
        
        {items.length && <SideBar products={items}/>}
        {items.length && (
          <Table
            items={items}
            setInCart={setInCart}
            inCart={inCart}
          />
        )}
        <AddToCart totalAmount={totalAmount} totalSum={totalSum} />
      </div>
    </div>
  );
}

export default App;
