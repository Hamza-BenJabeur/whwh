import React from "react";
import axios from "axios";
import { Link, link } from 'react-router-dom'
import Land from './Landingpage.jsx'
class Nav extends React.Component { 
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div>
        <Land/>
        {/* <div className="nav-bar"> 
            <nav>
            <a className="logo" href="#"> logo</a>
            <ul className="nav">
            <Link to="/">
                   <li><a>Home</a></li>
                </Link>
                <Link to="/todo">
                   <li ><a>Todo</a></li>
                </Link>
                <Link to="/chat">
                   <li><a>chat</a></li>
                </Link>
            </ul>
        </nav>
        </div> */}
        </div>)
    }
}


export default Nav