import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1 className = "payment_title">The payment has been completed!</h1>
            <div className = "gobackButton">
              <Link to = "/mainpage">
                  <Button>Go to Main Page</Button>
              </Link>              
            </div>
          </div>
        </div>
      );
    }
}

export default Popup;