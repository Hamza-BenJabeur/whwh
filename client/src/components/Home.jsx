import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            array : []
        }
        this.componen = this.componen.bind(this)
    }
    componen() {
        $.ajax({
          url: `/getfr`,
          type: "get",
          success: (res) => {
            this.setState({ array: res });
          },
        });
      }
      componentWillMount() {
        this.componen();
      }
    render(){
      var users = []
      for(var i = 0 ; i < this.state.array.length ; i++){
      users.push(<li key={i}>{this.state.array[i].name} </li>)
      }
        return <div id='main'>
          <ul>
            {users}
          </ul>
        </div>
    }
}
export default Home