import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import RenderProducts from "./RenderProducts";
const Render = ({status}) => {  
  async function getRequest(url) {
    const request = await axios.get(url);
    return request;
  }
  try {
    const [renderData, setData] = useState([]);
    const api = "https://fakestoreapi.com/products";

    useEffect(() => {
      function getResponse(url) {
        try {
          const responseData = getRequest(url)
            .then((response) => {
              localStorage.setItem("products", JSON.stringify(response?.data));
              setData(response?.data);
            })
            .catch((error) =>
              toast.error("Something went wrong!", {
                autoClose: 2000,
              }),
            );
        } catch (error) {
          throw new Error("Something went wrong!");
        }
      }

      const getProducts = localStorage.getItem("products");

      if (getProducts) {
        setData(JSON.parse(getProducts));
      } else {
        getResponse(api);
      }
    }, [status]);

    return (
      <>
        <RenderProducts data={renderData} status={status} />
      </>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Render;
