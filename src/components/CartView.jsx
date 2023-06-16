import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

export const CartView = ({items,handlerDelete}) => {

    const [total,setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(
        () => {
            setTotal(calculateTotal(items));
        },[items]);

    const onDeleteProduct =(id)=>{
     //   console.log('eliminando producto')
     handlerDelete(id);
    }
    const onCatalog =()=>{
        navigate('/catalog');
    }
  return (
    <>
     <h3>Carro de Compra</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>nombre</th>
                                <th>precio</th>
                                <th>cantidad</th>
                                <th>total</th>
                                <th>eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item=>(
                                 <tr key={item.product.id}>
                                 <td>{item.product.name}</td>
                                 <td>{item.product.prece}</td>
                                 <td>{item.quantity}</td>
                                 <td>{item.quantity * item.product.prece}</td>
                                 <td><button 
                                 className="btn btn-danger"
                                 onClick={()=>onDeleteProduct(item.product.id)}>Eliminar</button></td>
                             </tr>
                            ))}
                               
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">total</td>
                                <td colSpan="2" className="text-start fw-bold">{total}</td>
                            </tr>
                        </tfoot>
                    </table>

                    <button
                    className="btn btn-success"
                    onClick={onCatalog}
                    >Seguir Comprando</button>
    </>
  )
}