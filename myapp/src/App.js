import React, { Component } from 'react'
import Students from './students'
import AddStudent from './AddStudent'

class App extends Component {
  // 定義一些資料
  state = {
    students: [
      { name: 'Will', age: 30, major: 'Math', id: 1 },
      { name: 'Bob', age: 15, major: 'Art', id: 2 },
      { name: 'Alice', age: 25, major: 'Finance', id: 3 }
    ]
  }
  // 當成callback在傳,傳給AddStudent.js
  addStudent = (student) => {
    student.id = Math.random()

    // 先複製state裡面所有的students,然後在加上新傳進來的
    let students = [...this.state.students, student]
    // 用setState更新state資料
    this.setState({
      students: students
    })
  }

  // 當成callback在傳,傳給students.js
  deleteStudent = (id) => {
    // 把指定id的student過濾掉
    let students = this.state.students.filter(student => {
      return student.id !== id
    })
    this.setState({
      students
    })
  }

  // React life cycle
  componentDidMount() {
    console.log('component mounted')
  }
  componentDidUpdate(prevProps,prevState){
    console.log('component updated')
    console.log(prevProps, prevState)
  }
  render() {
    // function會return一些動態的html內容
    // 變數用{}包括
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        {/* <Students name='Jay' age='20' /> */}
        <hr />

        <Students deleteStudent={this.deleteStudent} students={this.state.students} />
        <AddStudent addStudent={this.addStudent} />
      </div>
    )
  }
}

export default App
