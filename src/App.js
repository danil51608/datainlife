import React, { useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import AddToCart from "./components/AddToCart";
import SideBar from "./components/SideBar";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    await axios("https://datainlife.ru/junior_task/get_products.php")
      .then((response) => response.data)
      .then((data) => setItems(data));
  };

  return (
    <div className="container">
      <button onClick={getItems}>Get items</button>
      <div className="TableWrapper">
        {items.length ? <SideBar products={items} /> : ""}
        <Route path="/:category">
          <Table items={items} />
        </Route>

        <AddToCart />
      </div>
    </div>
  );
}

export default App;
