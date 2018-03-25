/**
 * Created by malcolmross on 12/6/17.
 */

import React, { Component } from 'react'

//React Router
import { NavLink } from 'react-router-dom'

//NOT NEEDED. I KNOW THAT IS IN MY VIDEO BUT THESE ARE NOT NEEDED.
// import Expenses from '../pages/Expenses'
// import Home from '../pages/Home'
// import Income from '../pages/Income'

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <NavLink to="/Expenses">Expenses</NavLink>
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/Income">Income</NavLink>
            </nav>
        )
    }
}

export default Nav
