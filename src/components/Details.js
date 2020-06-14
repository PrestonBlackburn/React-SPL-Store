import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ProdButton} from './ProdButton';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const{id, type, report, info, price, title, inCart} = value.detailProduct;

                    return (
                        <div className = "container py-5">
                            {/* title */}
                            <div className = 'row'>
                                <div className = "col-10 mx-auto text-center text-slanted text-Grey my-5">
                                    <h1> {title} </h1>
                                </div>
                            </div>
                            {/* title end*/}

                            {/* product info */}
                            <div className = "row">
                                <div className = "col-10 mx-auto col-md-6 my-3">
                                    <img src = {report} className = "img-fluid" alt = "product"></img>
                                </div>
                                {/* product text*/}
                                <div className = "col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Analysis : {title} </h2>
                                    <h4 className = "text-Grey mt-3 mb-2">
                                        SAMPLE TYPE: <span className = "text-uppercase">
                                            {type}
                                            </span>    
                                    </h4>
                                    <h4 className = "text-Grey">
                                            PRICE: <span> $ </span>
                                            {price}
                                    </h4>
                                    <p className ="text-capitalize font-weight-bold mt-3">
                                        Analysis Information: 
                                    </p>
                                    <p className = "text-Grey"> {info} </p>

                                    {/*    Buttons   */}
                                    <div>
                                    <Link to = '/'>
                                        <ProdButton>
                                            Back To Products
                                        </ProdButton>
                                    </Link>
                                    <ProdButton 
                                     cart
                                     disabled={inCart?true:false} onClick = {() =>{
                                        value.addToCart(id);
                                        value.openModel(id);
                                    }}>
                                        {inCart?'In Cart' : "Add To Cart"}
                                    </ProdButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
