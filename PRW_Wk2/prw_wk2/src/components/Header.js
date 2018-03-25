/**
 * Created by malcolmross on 12/6/17.
 */

import React, {Component} from 'react'
import Nav from './Nav'


class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="appName">Expense Manager</h1>
                <Nav />
            </header>
        );
    }
}

export default Header