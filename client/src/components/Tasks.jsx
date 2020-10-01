import React from 'React';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

class Tasks extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            array : []
        }
        this.componen = this.componen.bind(this)
    }
    componen() {
        $.ajax({
          url: `/getall`,
          type: "get",
          success: (res) => {
            this.setState({ array: res });
          },
        });
      }
      componentWillMount() {
        this.componen();
      }
    render() {
        
        return(
            <div>
                <div   className="Orders">
                    <p>Choose HERE : 
                        <select placeholder="WORKERS NAMES">
                            <option>Name1</option>
                            <option>Name2</option>
                            <option>Name3</option>
                            <option>-- Select ALL -- </option>
                        </select>
                    </p>
                    <p>DO WHAT ?
                        <input type="text" placeholder="TODO"></input>
                    </p>
                </div>
                <div classname="companyTodo">
                    <p>EMPTY DIV HERE</p>
                </div>
            </div>
        )
    }
}

export default Tasks;