import React, { Component } from 'react'
import Product from  './Product';
import Title from './Title';
import styled from 'styled-components';
import {ProductConsumer} from '../context';


// Product Consumer returns context.js values

export default class Productlist extends Component {
 
    render() {
        return (
            <React.Fragment>
                <div className = "py-5">
                    <div className="container">
                        <div className="row">
                            <TitleWrapper className = "col-md-8 mx-auto">
                                <div className = 'title-wrapper'>
                            <Title name="Available" title="Analyses" />
                                </div>
                            </TitleWrapper>
                             <div className = "row">
  
                                <ProductConsumer>
                                    {value => {
                                       return value.products.map(product => {
                                           return <Product key = {product.id} product = {product}/>;
                                       })
                                    }}
                                </ProductConsumer>
                             </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        // <Product></Product>
        )
    }
}

const TitleWrapper = styled.div`
.title-wrapper{
    margin:auto;
    padding-bottom: 50px;


}
`