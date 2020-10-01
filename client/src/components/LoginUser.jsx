import React from 'react';
import axios from 'axios';
class LoginUser extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:''
            
        }
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
        }
    render(){
        return (

            <div>
                <p>User's Login</p>
            <label>Enter your name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
            <label>enter your password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
            <button>Login</button>
            </div>
        )
    }
}
export default LoginUser;