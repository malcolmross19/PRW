/**
 * Created by malcolmross on 12/6/17.
 */

 import React, { Component } from 'react'
 import FaTrash from 'react-icons/lib/fa/trash'

 class ExpenseList extends Component {
   render() {
     return (
       <li key={this.props.keyval}>
           <span>{ this.props.val.expense }</span>
           <span>${ this.props.val.amount }</span>
           <button className="btn btn-smll" onClick={this.props.delMe}><FaTrash /></button>
       </li>
     )
   }
 }

 export default ExpenseList
