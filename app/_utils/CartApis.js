const { default: axiosClient } = require("./axiosClient");
const AddToCart = (payload) => axiosClient.post("/carts", payload);
const DeleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);

const getUserCartItems = (email) =>
  axiosClient.get(
    `carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );

export default { AddToCart, getUserCartItems, DeleteCartItem };
