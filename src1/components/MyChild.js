import React, { Component } from 'react'

class MyChild extends Component {
    constructor() {
        super()
    }
    fn(val, e) {
        console.log(val, "fn");
        console.log((e.target, "fn"));
    }
    fn1(val, e) {
        console.log(val, "fn1")
        console.log(e)
    }
    render() {
        return (
            <div>
                child
                <button onClick={(e) => { this.fn("es6传参", e) }}>绑定1-es6</button>
                <button onClick={this.fn1.bind(this,"es5传参")}>绑定1-es5</button>
            </div>
        )
    }
}