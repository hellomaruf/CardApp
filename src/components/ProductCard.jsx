import React from "react";
class ProductCard extends React.Component{
    render() {
        let { productImage, title, brandName, price } = this.props;
        return <div>
            <div className="cards">
                <div className="card">
                    <div className="cardImg">
                        <img src={productImage} alt="" srcset="" />
                    </div>
                    <div className="cardContent">
                        <div className="content">
                            <h3>{title} </h3>
                            <button>Add to Card</button>
                        </div>
                        <p>{ brandName}</p>
                        <h3>{ price}</h3>
                    </div>
                    <div className="colors">
                        <div className="color1"></div>
                        <div className="color2"></div>
                        <div className="color3"></div>
                        <div className="color4"></div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default ProductCard;