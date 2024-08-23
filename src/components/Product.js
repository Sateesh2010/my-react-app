import { useContext } from "react";
import { ThemeContext } from "../context";
import Card from "./Card";
//import useTheme from "../hooks/useTheme.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Product(props) {
  const theme = useContext(ThemeContext);
  const color = theme === "light" ? "#333" : "white";

  const code = useSelector((store) => store.currency);
  const cartItem = useSelector((store) => store.cart);

  // const { txtColor } = useTheme();

  console.log("cartItem", cartItem)

  const data = props.data;
  console.log("data********************************: ", data);

  // const renderStock = () => {
  //   if (data.productStock > 0) {
  //     return (
  //       <button onClick={() => props.btnClick(data.productId)}>
  //         Add to Cart
  //       </button>
  //     );
  //   }
  //   return <p>Out of Stock</p>;
  // };
  return (
    <Card>
      <div style={{ color: color }}>
        <h5>Showing data</h5>
        <Link to={`/detail/${data.productId}`}>
          <img src={data.productImage} alt=""/>
        </Link>

        <h5>{data.productName}</h5>
        <h6>{code}</h6>
        <h6>{data.productPrice}</h6>
        {/* {renderStock()} */}
        {data.productStock > 0 ? (
          <button onClick={() => props.btnClick(data.productId)}>
            Add to Cart
          </button>
        ) : null}
      </div>
    </Card>
  );
}
export default Product;
