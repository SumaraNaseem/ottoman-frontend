export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

export const Removecart = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};
