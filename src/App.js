import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Product from './components/Product';
//automatically goes to "index.js" file if availible or you can set the main file through package.json
//the other option is just to go: './components/Cart/Cart
import Cart from './components/Cart';

import Details from './components/Details';
import Default from './components/Default';
import Model from './components/Model'



class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <Navbar />

        <Switch>
          <Route exact path="/" component={Productlist}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Model />

      </React.Fragment>
    );
  }
}

export default App;