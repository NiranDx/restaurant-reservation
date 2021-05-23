import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Restaurant from './pages/Restaurant'
// import RestaurantContext, * as restaurant from './context/restaurant-context'
import "antd/dist/antd.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const [state, dispatch] = useReducer(distributor.reducer, distributor.initialState);
ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/restaurant/:id" component={Restaurant} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
