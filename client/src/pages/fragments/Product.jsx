import axios from "axios";
import { useLoaderData } from "react-router-dom"; 
import BreadCrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import { useContext } from "react";
import CartContext from "../../CartContext";

const Product = () => { 
    const { addToCart } = useContext(CartContext); 
    const product = useLoaderData(); 
    return (
        <div className="">
            {product.map(el => (
                <div>
                    <BreadCrumb product={el.name}/>

                    <div className="flex justify-evenly my-10">
                        <img className="rounded-md" src='https://source.unsplash.com/random/500x400/?keyboard' />   
                        
                        <div className="space-y-2 w-2/5">
                            <h1 className="text-4xl mb-4">{el.name}</h1>
                            <h2>{el.brand}</h2>
                            <p>{el.description}</p>

                            <div className="flex flex-row gap-2">
                                {el.type === "keyboard" ? el.availableColors.map(color => 
                                
                                    <div key={color}>
                                        <button className="border-solid border-2 px-4 py-2 hover:border-cyan-800">{color}</button>
                                    </div>)
                                
                                : null}

                                {el.type === "keycaps" ? el.availableKits.map(kit => 
                                    <div key={kit}>
                                        <button className="border-solid border-2 px-4 py-2 hover:border-cyan-800">{kit}</button>
                                    </div>)
                                    
                                : null}
                            </div>

                            <button onClick={()=> addToCart(el._id, el.name, el.price["$numberDecimal"])}
                            className="bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-6 py-2 rounded-md">
                                Add to Cart
                            </button>
                        
                        </div>
                    </div> 
                </div>
                ))}
        </div>
    )
}

//loader funtion 
export const productDetailsLoader = async ({params}) => { 
    const { id } = params;  
    let response = await axios(`http://localhost:3080/products/${id}`);
    return response.data; 
}

export default Product ; 