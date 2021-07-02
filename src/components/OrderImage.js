const OrderImage = ({img}) => {
    return ( 
        <div className="order-image-wrapper">
            <img src={img} alt="" className="order-image-item" />
        </div>
    );
}
 
export default OrderImage;