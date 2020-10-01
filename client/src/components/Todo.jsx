import React from 'React';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from "axios";

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [],
            todo: "",
            todos: [],
            friend: '',
            tosend: '',
            myname: ''
        }
        this.componen = this.componen.bind(this)
        this.gettodo = this.gettodo.bind(this)
        this.sendtodo = this.sendtodo.bind(this)
    }
    componen() {
        $.ajax({
            url: `/getfr`,
            type: "get",
            success: (res) => {
                this.setState({array: res});
            }
        });
    }
    gettodo() {
        $.ajax({
            url: `/getuser`,
            type: "get",
            success: (res) => {
                console.log(res)
                var tod = []
                for (var i = 0; i < res[0].myToDoList.length; i++) {
                    tod.push (
                        <li key={i}>
                            {
                            res[0].myToDoList[i]
                        }
                            <button onClick={
                                this.done.bind(this, i)
                            }>done</button>
                        </li>
                    )
                }
                
                this.setState({todos: tod});
                this.setState({myname: res[0].name})
            }
        });
    }

    done(index) {
        console.log(index)

    }

    componentDidMount() {
        this.componen();
        this.gettodo()
    }
    sendtodo() {
        console.log('this is apply ===>', this.state.todo)
        axios.post('/pushTodo', {todo: this.state.todo}).then(() => {
            this.componentDidMount()
        })
    }
    putTodo(e) {

        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.todo)
    }
    Select(e) {
        this.setState({friend: e.target.value})
        console.log(this.state.friend)

    }
    Tosend(e) {
        this.setState({tosend: e.target.value})
        console.log(this.state.tosend)
    }
    Post() {
        const {tosend, friend, myname} = this.state
        axios.post('/SEND', {tosend, friend, myname})
    }
    render() {
        var users = []
        // console.log('this is thing ====> ',this.state.array[0].name)
        for (var i = 0; i < this.state.array.length; i++) {
            users.push (
                <option key={i}>
                    {
                    this.state.array[i].name
                } </option>
            )
        }
        console.log("rendered ..")
        console.log(this.state)
        return (
            <div>
                <div className="myTodo">
                    <p>WHAT I DO TODAY ??<input name="todo" type="text" placeholder="my Todo"
                            onChange={
                                this.putTodo.bind(this)
                        }></input>
                    </p>
                    <button value="TodoButton"
                        onClick={
                            this.sendtodo
                    }>APPLY</button>
                </div>
                <div className="todoList">
                    <ul> {
                        this.state.todos
                    } </ul>
                </div>
                <div className="friendAdd">
                    <p>Choose HERE :
                        <select placeholder="Choose your friend" className="friendList"
                            onChange={
                                this.Select.bind(this)
                        }>
                            {users}
                            <option>--- Select ALL ---
                            </option>
                        </select>
                    </p>
                    WHAT YOU WANT YOUR FRIEND TO DO :
                    <input type="text" className="friendList"
                        onChange={
                            this.Tosend.bind(this)
                    }></input>
                    <button onClick={
                        this.Post.bind(this)
                    }>GET HIM!</button>
                </div>
            </div>
        )
    }
}

export default Todo;
