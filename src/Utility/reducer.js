import { Type } from "./action.type";

let initialState = {
  basket: [],
};

let reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART:
      let existingItem = state.basket.find((item) => {
        return item.id === action.item.id;
      });
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        let updateExistingItem = state.basket.map((item) => {
          return item.id == action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updateExistingItem,
        };
      }
    default:
      return state;
  }
};

export { initialState, reducer };
