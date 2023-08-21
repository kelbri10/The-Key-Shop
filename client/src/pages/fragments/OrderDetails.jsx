const OrderDetails = ({total}) => { 
    return(
        <div className="w-1/3">
            <h2 className="text-2xl">Order Details</h2>
                            
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${total}</p>
            </div>
            <div className="flex justify-between">
                <p>Taxes</p>
                <p>To be calculated</p>
            </div>
            <div className="flex justify-between">
                <p>shipping</p>
                <p>To be calculated</p>
            </div>
        
            <div className="flex justify-between">
                <p>Total</p>
                <p>${total} USD</p>
            </div>
        </div>
    )
}

export default OrderDetails; 