import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { signout, isAutheticated } from "../auth/helper";
import StripeCheckout from "./StripeCheckout";


const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
         
       
      <div>
         

          {isAutheticated()&& ( 
        <h2>This section is to load products</h2> )}
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
          

      </div>
      
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
       <div className="row text-center ml-4 mb-4">
     
        <div className="col-3 mt-4 mb-4">{loadAllProducts()}</div>
        <div className="col-5 ml-4">
        <StripeCheckout products={products} setReload={setReload} />
        Checkout section</div>
      
      </div>
      </Base>
  
  );
};

export default Cart;
