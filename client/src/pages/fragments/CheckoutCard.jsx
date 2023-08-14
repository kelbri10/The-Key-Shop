const CheckoutCard = ({item}) => { 
    return( 
        <div className="w-3/4 grid grid-cols-2 place-content-center ">
            <div className="">
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
            
           
        </div>
    )
}

export default CheckoutCard; 