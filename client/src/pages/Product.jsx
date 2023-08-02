import NavBar from "../components/NavBar"; 
import BreadCrumb from "../components/Breadcrumb";
import ProductDetail from "../components/product/ProductDetail";
const FilteredProduct = () => { 

    return(
    <div>
        <NavBar /> 
        <BreadCrumb /> 


        {/* TO DOS: 
        - make an album component 
        - make a product description component */}
        <ProductDetail />
    </div>
    )
}

export default FilteredProduct; 