import React from 'react';
import axios from 'axios';
class LoginCompany extends React.Component{
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
        send(){
            axios.post('/login' , this.state).then((res)=>{
                console.log(res)
            })
        }
    render(){
        return (

            <div>
                <p>Company's Login</p>
            <label>Enter the name of your company</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
            <label>enter your password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
            <button onClick={this.send.bind(this)} >Login</button>
            </div>
        )
    }
}
export default LoginCompany;