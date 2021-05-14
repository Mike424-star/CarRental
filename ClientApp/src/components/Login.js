import React, { Component, setState } from 'react';
import axios from "axios";
const User_URL = "https://localhost:3000/user" 
import './CarLoginStyle.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  static displayName = Login.name;
  state = {
    email: "",
    password: ""
  };

  register(email, password) {
    return axios.post(User_URL, {
      email,
      password
    });
  }
  onChangeEmail(e) {
  this.setState({
      email: e.target.value
    });
    console.log('change email triggered')

  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  //onChange= 

  handleRegister(event) {
    event.preventDefault();
    this.register(
      this.state.email,
      this.state.password
  );
  console.log('Handle register called successfuly')
  }




  render() {
    return (
       <div class="login-page">
<div class="form">
<form class="register-form">
    <input type="text" placeholder="Användarnamn"/>
    <input type="Lösenord" placeholder="Lösenord"/>
    <input type="text" placeholder="email"/>
    <button>Skapa</button>
    <p class="message">Redan Registrerad?  <a href="#">Logga in</a> </p>
</form>

<form class="login-form">
    <input type="text" placeholder="Användarnamn"/>
    <input type="Lösenord" placeholder="Lösenord"/>
    <button>Logga in</button>
   
    <p class="message">Inte registrerad?  <a href="#"> Registrera</a></p>

        </form>

      </div>
    );
   }
  }
