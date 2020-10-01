import React from 'react';
import axios from 'axios';
class SignUpUser extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:'',
            imageUrl:'',
            key:''

           
        }
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    submit(e){
        e.preventDefault();
        const {name,password,image,key}=this.state
        axios.post('/signup/user',{name,password,image,key})
    }
    render(){
        return(
            <div>
            <label>Enter your name</label><br></br>
            <input type="text" onChange={this.handleChange.bind(this)}
            name='name' value={this.state.name}/><br></br>
            <label>Enter your password</label><br></br>
            <input type="new-password" onChange={this.handleChange.bind(this)}
            name='password' value={this.state.password}/><br></br>
            <label></label>imageUrl<br></br>
            <input type="text"  onChange={this.handleChange.bind(this)}
            name='image' value={this.state.image}/><br></br>
            <label></label>Declare your key<br></br>
            <input type="new-password"  onChange={this.handleChange.bind(this)}
            name='key' value={this.state.key}/><br></br>
            <button onClick={this.submit.bind(this)} >sign up User</button>
            </div>

        )
    }
}
export default SignUpUser;
