const CheckoutCard = ({item}) => { 
    return( 
        <div className="mb-6 w-fit grid grid-cols-2 gap-8">
            <div>
            <img className="rounded-md"
            src='https://source.unsplash.com/random/100x100/?keyboard' alt="random unsplash image"/>
            </div>

            <div>
            <p>{item.name}</p>
                <p>{item.price}</p>
                <p>QTY: {item.qty}</p>
            </div>
               
        </div>
    )
}

export default CheckoutCard; 