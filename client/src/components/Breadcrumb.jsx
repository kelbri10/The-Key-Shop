import { Link } from "react-router-dom"; 

const BreadCrumb = ({product}) => { 
    return (
        <div>
            <p className="p-10 bg-slate-400 text-slate-100 font-bold tracking-wide"> shop / <Link to="/shop">collection</Link> / {product} </p>
        </div>
    ); 
}

export default BreadCrumb; 