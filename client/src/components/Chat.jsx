import React from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            msg : "" ,
            array : [] 
        }
        this.send = this.send.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.componen = this.componen.bind(this)
    }
    componen() {
        $.ajax({
          url: `/getmsg`,
          type: "get",
          success: (res) => {
            this.setState({ array: res });
          },
        });
      }
      componentWillMount() {
        this.componen();
      }
    send(){
        axios.post("/sendm", this.state).then(()=>{this.componentWillMount()})
    }
    handlechange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    render(){
        console.log(this.state.array)
        var listmsg = []
        for(var i = 0 ; i < this.state.array.length ; i++){
            console.log("this is a msg ======> ",this.state.array[i].msg)
        listmsg.push(<li key={i}>{this.state.array[i].msg}</li>)

        } 
        return (
            <div>
                <div className="chatArea">
                </div>
                <div className="chatText">
                <textarea name="msg" onChange={this.handlechange}></textarea>
                <button value="Send" onClick={this.send}>Send</button>
                     <ul>
                        {listmsg}
                    </ul>
                </div>
            </div>
        )
        }
}

export default Chat;