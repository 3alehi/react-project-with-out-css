import React, { Component } from 'react'

import "./login.css"
export default class login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            lastname: "",
            password: "",
            age: "",
            islogin: false
        }
        this.change = this.change.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }
    change() {
        this.setState({
            islogin: true
        })


    }
    changeName(e) {
        this.setState({
            username: e.nativeEvent.target.value
        })

    }
    changeLastName(e) {
        this.setState({
            lastname: e.nativeEvent.target.value
        })
    }
    changeAge(e) {
        this.setState({
            age: e.nativeEvent.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password: e.nativeEvent.target.value
        })
    }
    render() {
        return (
            <div>
                <div className='inputforlogin'>
                    <input value={this.state.username} onChange={this.changeName} className='forlogin' type="text" placeholder='Name' />
                    <center>
                        {
                            this.state.islogin && this.state.username === "" && (
                                <span>please enter true information</span>
                            )
                        }
                    </center>
                    <input value={this.state.lastname} onChange={this.changeLastName} className='forlogin' type="text" placeholder='LastName' />
                    <center>
                        {
                            this.state.islogin && this.state.lastname === "" && (
                                <span>please enter true information</span>
                            )
                        }
                    </center>


                    <input value={this.state.age} onChange={this.changeAge} className='forlogin' type="text" placeholder='Age' />

                    <center>
                        {
                            this.state.islogin && this.state.age === "" && (
                                <span>please enter true information</span>
                            )
                        }
                    </center>

                    <input value={this.state.password} onChange={this.changePassword} className='forlogin' type="text" placeholder='Password' />
                    <center>
                        {
                            this.state.islogin && this.state.password === "" && (
                                <span>please enter true information</span>
                            )
                        }
                    </center>
                    <center>
                        <button onClick={this.change} className='loginbtn'>Login</button>
                    </center>


                </div>
      







            </div>
        )
    }
}
