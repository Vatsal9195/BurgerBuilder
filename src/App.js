import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={BurgerBuilder}></Route> 
          <Route path="/orders" component={Orders}></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </Layout>
      </div>
    );
  }
}

export default App;
