// main library
const express = require('express');
const { connect } = require('mongoose');

connect(process.env.PRODUCT_COLLECTION)
.then(()=> console.log('Product Collection Successfully'))
.catch((error)=>console.log(`Error to product collection${error}`) )
// access
const cors = require('cors');

// morgan - printing
const morgan = require('morgan');

// env variable
const { config } = require('dotenv');
config();

// routes
const userRoute = require('./routes/user');
const productRoute = require('./routes/product')

const app = express();

connect(process.env.PRODUCT_COLLECTION)
.then(()=> console.log('Product Collection Successfully'))
.catch((error)=>console.log(`Error to product collection${error}`) )

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/user', userRoute);
app.use('/product', productRoute);

module.exports = app;
