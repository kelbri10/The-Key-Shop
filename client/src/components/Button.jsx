const Button = ({text}) => {  
    return ( 
        <button 
        className="bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-4 py-2 rounded-md">
            {text}
        </button>
    )
}

// need to add functionality for displaying icon if one is passed into the component

export default Button; 