import React, { Component } from 'react';
//import { ReactComponenet as Logo} from './FrontImage.svg'
import logo from '../images/FrontImage.svg'
import InfoLogo from '../images/info-circle.svg'


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <img src={logo} alt="test front bild" />;
        <h1>S� h�r fungerar det!</h1>

        <div className="row">
          <ul>
            <li src={InfoLogo} alt="Infologo bild">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</li>
          <p></p>
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</li>
          <p></p>
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</li>
          <p></p>
          </ul>
          </div>

        <h1>Bilen f�r dig!</h1>
        <p>khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
           khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          </p> 
        </div>
    );
  }
}
