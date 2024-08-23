import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  return (
    <>
      <div>
        <h1>Product Details</h1>
        <h3> PID: {params.pid}</h3>
      </div>
    </>
  );
}

export default ProductDetails;
