const express = require('express');
const connectDB = require('/Users/erintheworld/Desktop/project/MERN_pt_booking/config/server.js');
var cors = require('cors');

// routes
const reservation = require('/Users/erintheworld/Desktop/project/MERN_pt_booking/routes/reservations.js');
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/Users/erintheworld/Desktop/project/MERN_pt_booking/routes', reservation);

const port = process.env.PORT || 8082; 
app.listen(port, () => console.log(`Server running on port ${port}`));



// const connection = mongoose.connection;
// connection.once('open',()=>{
//     console.log("DB coneected succesfully!")
// })