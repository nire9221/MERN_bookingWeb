import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/erintheworld/Desktop/project/MERN_pt_booking/booking_web/src/index.css';

const BookCard = (props) => {
    const  reservations  = props.reservations;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${reservations._id}`}>
                        { reservations.title }
                    </Link>
                </h2>
                <h3>{reservations.author}</h3>
                <p>{reservations.description}</p>
            </div>
        </div>
    )
};

export default BookCard;