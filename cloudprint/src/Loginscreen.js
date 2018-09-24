import React, {Component} from 'react';
import Login from './Login';
import { MuiThemeProvider } from 'material-ui/styles';
import { RaisedButton } from 'material-ui';
class Loginscreen extends Component{
constructor(props){
    super(props);
    this.state = {
        username :'',
        password:'',
        Loginscreen:[],
        loginmessage:'',
        buttonLabel:'Register',
        isLogin : true
    }
}
componentWillMount(){
    var Loginscreen=[];
    Loginscreen.push(<Login parentContext ={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not Registered yet ,Register Now";
    this.setState({
        Loginscreen:Loginscreen,
        loginmessage:loginmessage
    })
}
render(){
    return(
        <div className ="loginscreen">
        {this.state.Loginscreen}
        <div>
            {this.state.loginmessage}
            <MuiThemeProvider>
                <div>
                    <RaisedButton label = {this.state.buttonLabel} primary={true} style ={style} />
                </div>
            </MuiThemeProvider>
        </div>
        </div>
    );
}
}
const style ={
    margin :15,
}
export default Loginscreen;