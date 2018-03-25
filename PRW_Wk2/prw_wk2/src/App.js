import React, { Component } from 'react'
import './App.css'
import FaTrash from 'react-icons/lib/fa/trash'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            expenseName: '',
            expenseAmount: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if(e.target.name == 'name'){
            this.setState({
                expenseName: e.target.value
            })
        }

        if(e.target.name == 'amount'){
            this.setState({
                expenseAmount: e.target.value
            })
        }
    }

    handleSubmit(e) {
        {/*e.preventDefault()*/}
        if (!this.state.expenseName || !this.state.expenseAmount) {
            return;
        }
        const newExpense = {
            expenseName: this.state.expenseName,
            expenseAmount: this.state.expenseAmount,
            id: Date.now()
        }
        this.setState(prevState => ({
            expenses: prevState.expenses.concat(newExpense),
            expenseName: '',
            expenseAmount: ''
        }))

    }

  render() {
    return (
      <section className="App">
        <header>
          <h1>Expense Manager</h1>

        </header>
        <section className="row">
          <h2>Expenses</h2>
          <form onSubmit={ this.handleSubmit() }>
            <label htmlFor="eName">Name</label>
            <input type="text" name="name" id="eName" value={this.state.expenseName} onChange={this.handleChange} />

            <label htmlFor="eAmount">Amount</label>
            <input type="number" name="amount" id="eAmount" value={this.state.expenseAmount} onChange={this.handleChange} />

            <button type="submit">Add</button>
          </form>
        </section>
        <section className="row">
          <h2>Current Expenses</h2>
          <h2 className="table">Title</h2>
          <h2 className="table">Amount</h2>
          <h2 className="table">Remove</h2>
        </section>
        <section className="Expenses">
            <ExpensesList expenses={this.state.expenses} />
        </section>
        <footer>
          <p>Created by Malcolm Ross for PRW</p>
        </footer>
      </section>
    )
  }
}

class ExpensesList extends Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>Title</td>
                    <td>Amount</td>
                    <td>Remove</td>
                </tr>
                {this.props.expenses.map(expense => (
                    <tr>
                        <td key={expense.id}>{expense.expenseName}</td>
                        <td key={expense.id}>{expense.expenseAmount}</td>
                        <td key={expense.id}>{FaTrash}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}


export default App
