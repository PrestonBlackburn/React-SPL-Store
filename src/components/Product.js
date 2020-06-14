import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

// making it so you can only add certain property types
import PropTypes from "prop-types";


export default class Product extends Component {
    render() {
        const{id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className = "col-md-4 mx-auto">
                <div className = "card">
                <ProductConsumer>
                    {(value) => (
                    <div className = "img-container p-4" onClick={() => value.handleDetail(id)}>
                        <Link to = "/details">
                            <img src = {img} alt = "product" className ="card-img-top"></img>
                        </Link>
                        <button className = 'cart-btn' disabled = {inCart ? true : false} 

                            onClick={() => {value.addToCart(id);
                                            value.openModel(id);}}>

                            {inCart ? (<p className="text-capitalize mb-0" disabled>
                                {" "}
                                In Cart
                                </p>):
                            (<i className="fas fa-cart-plus" />)} 
                        </button>
                    </div>
                    )}
                </ProductConsumer>
                     {/* card footer */}
                     <div className = 'card-footer d-flex justify-content-between'>
                         <p className = "align-self-center mb-0" > 
                         {title}
                         </p>
                         <h5 className = "text-Grey font-italic mb-0"> 
                         <span className = "mr-1"> $ </span>
                         {price}
                         </h5>
                     </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};



const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
    margin-bottom: 25px;
    height: 300px;


}

.card-footer{

    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
    bottom: 5px;

}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247, 247, 247);
        bottom: 5px;
    }
}
.img-container{
    position:relative;
    overflow: hidden;
}

.card-image-top{
    transition: all 1s linear;
}

.img-container:hover .card-img-top{
    transform: scale(1.2);
}

.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2 rem 0.4 rem;
    background: var(--mainBlue);
    border:none;
    color: var(--secondaryGrey);
    font-size: 1.4 rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.2s linear;
    border-color: transparent;
}

.img-container:hover .cart-btn{
    transform:translate(0, 0);
}

.cart-btn:hover{
    color: var(--mainBlack)
    cursor: pointer;
    border-color: transparent;
}

`;