/**
 * Created by malcolmross on 12/6/17.
 */

import React, { Component } from 'react'
import ExpenseList from '../components/ExpenseList'



class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            expenseName: '',
            expenseAmount: ''
        }

        this.inputChangeName = this.inputChangeName.bind(this);
        this.inputChangeAmount = this.inputChangeAmount.bind(this);
        this.submitMyForm = this.submitMyForm.bind(this);
    }

    inputChangeName(e) {
      e.preventDefault()
        this.setState({expenseName: e.target.value})
        // if(e.target.name == 'name'){
        //     this.setState({
        //         expenseName: e.target.value
        //     })
        // }
        //
        // if(e.target.name == 'amount'){
        //     this.setState({
        //         expenseAmount: e.target.value
        //     })
        // }
    }
    inputChangeAmount(e) {
      e.preventDefault()
      this.setState({expenseAmount: e.target.value})
        // if(e.target.name == 'name'){
        //     this.setState({
        //         expenseName: e.target.value
        //     })
        // }
        //
        // if(e.target.name == 'amount'){
        //     this.setState({
        //         expenseAmount: e.target.value
        //     })
        // }
    }

    submitMyForm(e) {
      e.preventDefault()
      //  let expenses = this.state.expenses
        this.state.expenses.push({'expense':this.state.expenseName, 'amount':this.state.expenseAmount})
        this.setState({expenses: this.state.expenses})
    }

    render() {
      //const {expenses} = this.state;
      let myExpenses = this.state.expenses.map((val, key) => {
        return <ExpenseList key={key} keyval={key} val={val} delMe={() =>this.removeExpense(key) } />
      })
      return (
          <section className="App">
              <header>
                  <h1>Expenses</h1>
              </header>
              <section className="row">
                  <h2>Add Expense</h2>
                  <form className="form-inline" onSubmit={this.submitMyForm}>
                      <div className="form-group">
                          <label htmlFor="eName">Name</label>
                          <input type="text" name="name" id="eName" value={this.state.expenseName} onChange={this.inputChangeName} />
                      </div>

                      <div className="form-group">
                          <label htmlFor="eAmount">Amount</label>
                          <input type="number" name="amount" id="eAmount" value={this.state.expenseAmount} onChange={this.inputChangeAmount} />
                      </div>

                      <button type="submit" className="btn btn-primary">Add</button>
                  </form>
              </section>

              <section className="">
                <h2>Current Expenses</h2>
                <ul>{myExpenses}</ul>
              </section>

          </section>
        )
    }
}




export default Expense


// <section className="Expenses">
//     <table className="table">
//         <caption>Expenses List</caption>
//         <thead>
//             <tr>
//                 <th>#</th>
//                 <th>Expense Name</th>
//                 <th>Expense Amount</th>
//             </tr>
//         </thead>
//         <tbody>
//         {
//             expenses.map(expense => {
//                 return (
//                     <tr key={expense}>
//                         <th scope="row">1</th>
//                         <td>{expense}</td>
//                         <td>Button</td>
//                     </tr>
//                 )
//             })
//         }
//
//         </tbody>
//     </table>
//
// </section>



/*
class ExpensesList extends Component {
    render() {

        return (
            {
                expenses.map(expense => {
                return <p key={expense}>{expense}</p>
                })
            }
        )
    }
}*/
