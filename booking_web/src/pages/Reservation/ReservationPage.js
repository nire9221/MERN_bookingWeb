import React, { Component } from 'react';
import '/Users/erintheworld/Desktop/project/MERN_pt_booking/booking_web/src/index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from '/Users/erintheworld/Desktop/project/MERN_pt_booking/booking_web/src/components/BookCard.js';

class ShowReservationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/reservations')
      .then(res => {
        this.setState({
          reservations: res.data
        })
      })
      .catch(err =>{
        console.log('Error from Reservation List');
      })
  };


  render() {
    const reservations = this.state.reservations; 
    console.log("PrintBook: " + reservations);
    let reservationList;

    if(!reservations) {
      reservationList = "there is no reservation record!";
    } else {
      reservationList = reservations.map((reserve, k) =>
        <BookCard reserve={reserve} key={k} />
      );
    }

    return (
      <div className="ShowReservationList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="display-4 text-center"> Reservation</h2>
            </div>

            <div className="col-md-11">
              <Link to="/reservation/make-reservation" className="btn btn-outline-warning float-right">
                Make a reservation
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {reservationList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowReservationList;