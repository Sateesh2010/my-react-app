import { useContext } from "react";
import React, { Component, useEffect, useState } from "react";
import { ThemeContext } from "../context";
import getProducts from "../Services/getProducts";

function useProducts() {
  const [plist, setPlist] = useState([]);
  //   const plist = useProdut();

  const getData = async () => {
    try {
      let res = await getProducts();

      setPlist(res.data);
      //  data =  res.data
      console.log("data response success", res);
    } catch (e) {
      console.log("failure", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return plist;
}

export default useProducts;
