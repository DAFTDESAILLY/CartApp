import { useNavigate } from "react-router-dom";

export const ProductCardView = ({handler,id,name,description,prece}) => {

  const Navigate = useNavigate();

  const onaddProduct =(product)=>{
    console.log(product);
    handler(product);
    Navigate('/cart');
  }
  return (
    <>
                        <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">{name} </h5>
                                  <p className="card-text">{description}</p>
                                    <p className="card-text">{prece}</p>
                                    <button className="btn btn-primary"
                                    onClick={()=>onaddProduct({id,name,description,prece})}>agregar </button>
                 </div>                      
        </div>                              
    </>
      )
       }