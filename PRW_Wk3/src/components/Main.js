/**
 * Created by malcolmross on 12/6/17.
 */

import React, { Component } from 'react'

//React Router
import {
    // BrowserRouter as Router,
    Route,
    // Link
} from 'react-router-dom'

import Home from '../pages/Home'
import Expenses from '../pages/Expenses'
import Income from '../pages/Income'


class Main extends Component {
    render() {
        return (
            <section className="content main-content">
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Expenses" component={Expenses} />
                <Route exact path="/Income" component={Income} />
            </section>
        )
    }
}

export default Main
