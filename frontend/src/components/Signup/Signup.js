import React, { Component } from 'react';
import URL from '../../config/config';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './Signup.css'
// import NavBar from '../NavBar/Navbar'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePass(event) {
    this.setState({
      password: event.target.value
    })
  }

  handlePass2(event) {
    this.setState({
      password2: event.target.value
    })
  }

  submit() {
    // this.refs.btn.setAttribute("disabled", "disabled");
    fetch(URL+'/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
      })
  }).then(function(res) {
      return res.json()
  }).then(function(data) {
      alert(data.success)
  }).catch(function(error) {
      console.error(error)
  })
  }

  render() {
  return (
    <>
    {/* <NavBar /> */}
    <div className="signup">
    <Grid container spacing={1} alignItems="flex-end">
      <TextField
        type="text"
        onChange={this.handleName.bind(this)}
          id="filled-textarea"
          label="Name:"
          placeholder="Name"
          multiline
          required
        />
      {/* <input type="email" onChange={this.handleEmail.bind(this)} placeholder="email"></input> */}
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
          <TextField
            type="email"
        onChange={this.handleEmail.bind(this)}
        id="input-with-icon-grid"
          label="Email:"
          placeholder="Email"
          required
        />
          </Grid>

      {/* <input type="password" onChange={this.handlePass.bind(this)} placeholder="password1"></input> */}
        <TextField
          id="filled-password-input"
          label="Password:"
          type="password"
          autoComplete="current-password"
          onChange={this.handlePass.bind(this)}
          required
          placeholder="Password"
        />

      {/* <input type="password" onChange={this.handlePass2.bind(this)} placeholder="password2"></input> */}
      <TextField
          id="filled-password-input"
          label="Re-Enter Password:"
          type="password"
          autoComplete="current-password"
          onChange={this.handlePass2.bind(this)}
          required
          placeholder="Password"
        />
      {/* <button type="submit" onClick={this.submit}>Submit</button> */}
      <div className="wrap">
  <button ref="btn" onClick={this.submit} type="submit" className="button">Sign Up!</button>
</div>
      </Grid>
    </div>
    </>
  );
}
}
export default Signup;