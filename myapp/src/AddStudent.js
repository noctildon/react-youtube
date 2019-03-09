import React, { Component } from 'react'

// 建立表單,使user可以加入更多student的資料
class AddStudent extends Component {
  state = {
    name: null,
    age: null,
    major: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addStudent(this.state) // addStudent是callback函式
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' onChange={this.handleChange} />

          <label htmlFor="name">Age:</label>
          <input type="text" id='age' onChange={this.handleChange} />

          <label htmlFor="name">Major:</label>
          <input type="text" id='major' onChange={this.handleChange} />

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddStudent