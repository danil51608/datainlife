import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = { cart: [] }, action) => {
  if (action.type === "addToCart") {
    const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );
    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, amount: action.payload.amount }
              : item
          )
        : [...state.cart, { id: action.payload.id, amount: action.payload.amount, price: action.payload.price }],
    };
  }
  return state;
};

const store = createStore(reducer, composeWithDevTools());

export default store;
