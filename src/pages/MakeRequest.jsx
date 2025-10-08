import axios from "axios";
import React, { useEffect, useState } from "react";

const MakeRequest = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true)
  const makeRequest = () => {
    let url = "https://fakestoreapi.com/products";
    let userObject = {firstname, lastname, email, password}
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setloading(false)
        setproducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <>
      
      <div className="mx-auto col-7 p-3 my-4 ">
        <h1>Make Request</h1>
        {/* <button onClick={makeRequest}>Make a Request</button> */}

        <hr />
        {
            loading ? <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> : products.map((product, index) => (
          <div key={product.id}>
            <p>{product.id}</p>
            <h3>{product.title}</h3>
            <img width={200} src={product.image} alt="" />
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))
        }

      

        {}

        <hr />
      </div>
    </>
  );
};

export default MakeRequest;
