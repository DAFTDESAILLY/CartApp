import { useEffect, useState } from "react";
import { getproducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView =({handler})=>{
    const[products,setproducts]= useState([]);
    useEffect(
        ()=>{
           setproducts(getproducts());
        },[]);
    return(
        <>
           <div className="row">
                {products.map(prod => ( 
                        <div className="col-4 my-2"
                         key={prod.id}>
                           <ProductCardView 
                           handler={handler}
                           id={prod.id}
                           name={prod.name}
                           description={prod.description}
                           prece={prod.prece}
                           />
                    </div>       
                ))}

            </div>
        </>
    );
}