import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import "./CardList.css";

const CardList = ({placeholder}) => {
    const [productData, setProductData] = useState([]);
    // Async Await way of fetching data
    useEffect(()=>{
        //mounting phase
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProductData(data);
        }).catch((err)=>{
            console.log(err);
        });
        return () =>{
            // cleanup function, it will run when the component unmounts, it is used to clean up any side effects that may have been created in the useEffect hook, such as clearing timers, canceling network requests, or resetting state. It helps to prevent memory leaks and ensures that the component behaves correctly when it is removed from the DOM.
            //unmounting phase
            console.log("Unmounting....")
            setProductData([]);
        }
    },[]);// [] = dependency array, if empty then useEffect will run only once when the component mounts

    // landing page > inner page > product page > product details page

    if(!productData?.length) return <Shimmer count={10} />;
    return (
        <div className="card-list-container">
            <div className="products-grid">
                {productData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
  );
};

export default CardList;