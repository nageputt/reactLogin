import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, TextField } from 'material-ui';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name :'',
            last_name :'',
            email:'',
            pasword:''
        }
    }

  render() {
    return (
      <div className="register">
        <MuiThemeProvider>
        <div>
<AppBar title ="Register"/>
<TextField hintText ="Enter your first Name" floatingLabelText = "First Name"/>
 <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"/>
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"/>
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"/>
           <br/>
           <RaisedButton label="Submit" primary={true} style={style}/>
      </div>
      </MuiThemeProvider>
      </div>
    );
  }
}
const style ={
    margin : 15,
}
export default Register;
