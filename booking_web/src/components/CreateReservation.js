import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/Users/erintheworld/Desktop/project/MERN_pt_booking/booking_web/src/index.css';
import axios from 'axios';
import moment from 'moment';


let roundTime = (time, minutesToRound) => {
  let [hours, minutes] = time.split('.');
  hours = parseInt(hours);
  minutes = parseInt(minutes);

  // Convert hours and minutes to time in minutes
  time = (hours * 60) + minutes; 

  let rounded = Math.round(time / minutesToRound) * minutesToRound;
  let rHr = ''+Math.floor(rounded / 60)
  let rMin = ''+ rounded % 60

  //return rHr.padStart(2, '0')+'.'+rMin.padStart(2, '0')
  return rHr+'.'+rMin.padStart(2, '0')
}

class CreateReservation extends Component {
  constructor() {
    super();
    this.state = {
      program: '',
      first_name:'',
      last_name:'',
      email:'',
      phone:'',
      punch_card:'',
      reservation_date:'',
      /*
      import Moment from 'moment';
      state> 
      dateMDY: Moment("1994-07-01").format('MM-DD-YYYY'),
      render>
      <p> MDY Format: { this.state.dateMDY } </p>
      */
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      program: this.state.program,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email:this.state.email,
      phone:this.state.phone,
      reservation_date: this.state.reservation_date,
    };

    axios
      .post('http://localhost:8082/api/reservations', data)
      .then(res => {
        this.setState({
          program: '',
          first_name:'',
          last_name:'',
          email:'',
          phone:'',
          reservation_date:'',
        })
        this.props.history.push('/');
        // db.collection('clicks').save(click, (err, result) => {
        //   console.log(db);
        //   console.log('click added to db');
        // });
      })
      .catch(err => {
        console.log("Error in CreateReservation!");
      })
  };

  render() {
    return (
      <div className="CreateReservation">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/reservation/reservation_list" className="btn btn-outline-warning float-left">
                  Show Reservation List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Make new reservation</h1>
              <p className="lead text-center">
                  Fill out the information
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                <select className='form-control' id="cars" name="program">
                <option selected> ------Select your program------ </option>
                  <option value="Continuous training" /*value={this.state.program}*/>Continuous training</option>  
                  <option value="Fartlek Training">Fartlek Training</option>
                  <option value="Circuit Training">Circuit Training</option>
                  <option value="Interval Training">Interval Training</option>
                  <option value="Plyometric Training">Plyometric Training</option>
                  <option value="Flexibility Training">Flexibility Training</option>
                  <option value="Weight Training">Weight Training</option>
                </select> 

                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='First Name'
                    name='first_name'
                    className='form-control'
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    name='last_name'
                    className='form-control'
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='email'
                    placeholder='xxxx@xxxx.xxx'
                    name='email'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='tel'
                    placeholder='xxx-xxx-xxx '
                    name='phone'
                    className='form-control'
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                </div>

                  <div className='form-group'>
                  <input
                    type='datetime-local'
                    min={Date.now()} 
                    max={this.state.date - 2592000000 * 10}//300 days //need to change min as current date
                    name='reservation_date'
                    className='form-control'
                    value={this.state.reservation_date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    onSubmit={this.handleSubmit}
                    action='/insert' 
                    method='post'
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateReservation;