import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, TextField, RaisedButton } from 'material-ui';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            data:[{
                username:'Nagendra',
                password:'Il0vemyself'
            },
        {
            username:'rajesh',
            password:'asdf'
        },
        {
            username:'sowji',
            password:'qwerty',
        }]
        }
    }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
            <div>
                <AppBar title ="Login"/>
                <TextField hintText = "Enter your User Name"
                floatingLabelText = "Username"
                onChange = {(event,newValue)=>
                this.setState({username:newValue})}
               />
                    <br/>
                    <TextField type="password" hintText = "Enter your Password"
                    floatingLabelText = "Password" 
                    onChange ={(event,newValue) => 
                    this.setState({password:newValue})}
                    />
                        <br/>
                        <RaisedButton label ="Submit" primary={true} style={style} 
                        onClick={(event) =>this.handleClick(event)}/>
            </div>
        </MuiThemeProvider>
      </div>
    );
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payLoad ={
        "email":this.state.username,
        "password": this.state.password
    }
 
   this.state.data.map(value => {
       if(value.username === payLoad.email && value.password === payLoad.password){
           this.validFlag = true;
       }
      
   });
   if(this.validFlag){
    alert("Valid User ")
   }else{
    alert("InValid User")
   }
}
}
const style ={
    margin :15,
}

export default Login;
