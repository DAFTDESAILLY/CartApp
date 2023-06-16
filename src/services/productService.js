import { products } from "../data/products"
export function getproducts() {
    return products;
}

export const calculateTotal =(items)=>{
   return items.reduce(
    (acumulator,item)=>acumulator + item.product.prece*item.quantity
    ,0);
}