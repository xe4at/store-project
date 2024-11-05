import { act, createContext, useContext, useReducer } from "react";

const initialState = {};

const reducer = (state, action) => {
  console.log({state,action});
};

const CartContext = createContext();

function CardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CardProvider;
export { useCart };
