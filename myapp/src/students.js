import React from 'react'

// 匯入css
import './Students.css'


// 這是ui component, 不需要繼承React Component
const Students = (props) => {
  // console.log(props) // props是從root那邊傳過來的參數
  const { students, deleteStudent } = props

  // 定義html template,並將資料匯入
  const studentList = students.map(student => {
    if (student.age > 20) {
      return ( <
        div className = "student"
        key = { student.id } >
        <
        div > Name: { student.name } < /div> <
        div > Age: { student.age } < /div> <
        div > Major: { student.major } < /div> <
        button onClick = {
          () => { deleteStudent(student.id) } } > Delete it < /button> <
        br / >
        <
        /div>
      )
    } else {
      return null
    }
  })
  // 回傳html template with data
  return ( <
    div className = "student-list" > { studentList } <
    /div>
  )
}

export default Students