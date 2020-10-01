import React from 'react';
import Login from './Login.jsx'
class Land extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            boli : false
        }
        this.start = this.start.bind(this)
    }
    start(){
        var bol = !this.state.boli
        this.setState({boli:bol})
    }
    render(){
        return <div>
            {!this.state.boli ?
            <div>
            <button onClick={this.start}>Get starty</button>
            </div> : <Login/> }
        </div>
    }
}
export default Land