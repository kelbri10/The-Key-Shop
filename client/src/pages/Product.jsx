import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import NavBar from "../components/NavBar"; 
import BreadCrumb from "../components/Breadcrumb";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/footer/Footer";

const Product = () => { 
    const { id } = useParams(); 

    const fetchProductById = async(id) => { 
        let response = await axios(`http://localhost:3080/products/${id}`); 
        let product = await response.data; 
        setProduct(product);  
    }

    const [product, setProduct] = useState([]); 
 
    useEffect(() => { 
        fetchProductById(id); 
    }, []); 

    return (
        <div className="">
            <AlertBanner alertText={{message: "free shipping on orders over $25"}}/>
            <NavBar /> 
            <div className="">
                {product.map(el => (
                    <div>
                        <BreadCrumb product={el.name}/>

                        <div className="w-fit mx-auto grid grid-cols-2 gap-10 my-10">
                            <img className="rounded-md" src='https://source.unsplash.com/random/500x400/?keyboard' />   
                            
                            <div>
                                <h1 className="text-4xl mb-4">{el.name}</h1>
                                <h2>{el.brand}</h2>
                            </div>
                        </div> 
                    </div>
                    ))}
            </div>

            <Footer />
        </div>
    )
}

export default Product ; 