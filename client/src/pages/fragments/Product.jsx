import axios from "axios";
import { useLoaderData } from "react-router-dom"; 
import BreadCrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";


const Product = () => { 
    const product = useLoaderData(); 
    return (
        <div className="">
            {product.map(el => (
                <div>
                    <BreadCrumb product={el.name}/>

                    <div className="flex justify-evenly my-10">
                        <img className="rounded-md" src='https://source.unsplash.com/random/500x400/?keyboard' />   
                        
                        <div>
                            <h1 className="text-4xl mb-4">{el.name}</h1>
                            <h2>{el.brand}</h2>
                            <Button text='Add to Cart'/>
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