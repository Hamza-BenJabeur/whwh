import React from 'react'
import Signe from './Signe.jsx'
import { Link, link } from 'react-router-dom'
import axios from 'axios'
import LoginCompany from './LoginCompany.jsx'
import SignUpCompany from './SignUpCompany.jsx'
class Login extends React.Component{
    constructor(props){
       super(props)
    }
    render(){
          
        return (
           <div  className="loginBox">
                      <LoginCompany/>    
                      <SignUpCompany/>
                </div>
        )
    }
}

export default Login;