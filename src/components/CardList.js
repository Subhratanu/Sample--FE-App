import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import "./CardList.css";

const CardList = ({placeholder}) => {
    const [productData, setProductData] = useState([]);
    // Async Await way of fetching data
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProductData(data);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);// [] = dependency array, if empty then useEffect will run only once when the component mounts


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