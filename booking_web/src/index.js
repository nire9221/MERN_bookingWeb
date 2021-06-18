// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Reservation from "./pages/Reservation/ReservationPage";
import Reservation_form from "/Users/erintheworld/Desktop/project/MERN_pt_booking/booking_web/src/components/CreateReservation.js";
import ShowList from '/Users/erintheworld/Desktop/project/MERN_pt_booking/booking_web/src/components/ShowBookDetails.js';

import "/Users/erintheworld/Desktop/project/MERN_pt_booking/booking_web/src/index.css";



const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      <Route exact path="/reservation" component={Reservation} />
      <Route path="/reservation/make-reservation" component={Reservation_form} />
      <Route path='/reservation/reservation_list' component={ShowList} />
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
