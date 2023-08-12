const CheckoutCard = ({item}) => { 
    return( 
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
    )
}

export default CheckoutCard; 