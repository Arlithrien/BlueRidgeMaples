import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import mongoose from 'mongoose';


import './index.css';
import App from './App';

mongoose.connect('mongodb://localhost:27017/Nursery', {useNewURLParser: true, useUnifiedTopology:true})
.then(() => {
  console.log("mongo connection open!")
})
.catch(err => {
  console.log("error:mongo connection failed")
  console.log(err)
})

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
  
);

