import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Render = ({status}) => {
  console.log(status);
  async function  getRequest(url){
    const request = await axios.get(url);
    return request;
  }
  try {
    const api = "https://fakestoreapi.com/products";
    function getResponse(url){
      const responseData = getRequest(url).then(response => renderProducts(response)).catch(error => toast.error("Something went wrong!", {
        autoClose: 2000,
      }))
    }
    function renderProducts(response) {
      console.log(response);
      const data = JSON.stringify(response);
      localStorage.setItem("products", data);
      
    }

    if(localStorage.getItem("products")) {
      const data = JSON.parse(localStorage.getItem("products"));
      renderProducts(data);
    }else {
      getResponse(api)
    }
    return (
        <>
          rendera
        </>
      );
  } catch (error) {
    throw new Error(error);
  }
};

export default Render;
