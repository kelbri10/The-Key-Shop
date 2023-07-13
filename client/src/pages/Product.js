import NavBar from "../components/NavBar"; 
import BreadCrumb from "../components/Breadcrumb";
import axios from "axios";
const FilteredProduct = (product) => { 
   return(
    <div>
        <NavBar /> 
        <BreadCrumb /> 

        {/* TO DOS: 
        - make an album component 
        - make a product description component */}
    </div>
   )
}