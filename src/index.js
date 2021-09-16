import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  // <Router>
  <React.StrictMode> // Delete this line
    <App />
  </React.StrictMode>, // Delete this line
  // </Router>,

  document.getElementById('root')
);

