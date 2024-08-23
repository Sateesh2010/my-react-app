//import Axios from "axios";
import ApiService from "./ApiService";

const getProducts = () => {
  // const url =
  //   "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";

  const url = "/products"
  return ApiService.get(url);
};

export default getProducts;
