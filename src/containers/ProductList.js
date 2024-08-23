import React, { Component, useEffect, useState } from "react";
import Product from "../components/Product";
import getProducts from "../Services/getProducts";
import useProducts from "../hooks/useProducts";
import { useNavigate, useSearchParams } from "react-router-dom";
import {addItem} from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
function ProductList() {
  // let data = [];
  //   const [data, setData] = useState([]);
  // const plist = useProdut();
  let data = useProducts();
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams();
  
  const dispatch = useDispatch();
  //   const getData = async () => {
  //     try {
  //       let res = await getProducts();

  //       setData(res.data);
  //       //  data =  res.data
  //       console.log("data response success", res);
  //     } catch (e) {
  //       console.log("failure", e);
  //     }
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  useEffect(() => {
    // ?page=10&pincode=123456
    console.log("Page ", queryParams.get("page"));
  }, [queryParams]);

  // const handleAddCart = (childData) => {
  //   alert(childData);
  // };

  return (
    <div>
      <button
        onClick={() => {
          setQueryParams({ page: 4 });
        }}
      >
        Page 4
      </button>
      {data.map((dataItem) => (
        <Product
          key={dataItem.prductId}
          data={dataItem}
          btnClick={(id) => {
            console.log("id", id);
            dispatch(addItem(dataItem));
            navigate("/cart");
          }}
        />
      ))}
    </div>
  );
}

export default ProductList;
