import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../SPL logo.png';
import styled from "styled-components";
import {CheckoutButton} from './Button';


export default class Navbar extends Component {
    render() {
        return(
            <NavStyled className = "navbar navbar-expand-sm navbar-dark px-sm-5" >
                <Link to='/'>
                    <img src={logo} alt = "store" className = "navbar-brand" height ='57' width = '50' />
                </Link>
                <ul  className = 'navbar-nav align-items-center'>
                    <li className = "nav-item ml-5">
                        <Link to="/" className = "nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className = "ml-auto">
                    <CheckoutButton>
                        <span className = "mr-2">
                        <i className = "fas fa-cart-plus" /> 
                        </span>
                        Checkout 
                    </CheckoutButton>
                </Link>
            </NavStyled>
    );
    }
}

const NavStyled = styled.nav`
background: var(--textGrey);
.nav-link{
    color:nav(--secondaryGrey)!important;
    font-size: 1.3rem;
}
`;