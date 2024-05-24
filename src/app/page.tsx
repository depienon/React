"use client"
import React, { useState } from 'react'

function page() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 21 },
    { id: 4, name: "Daisy", age: 23 },
    { id: 5, name: "Ethan", age: 19 },
    { id: 6, name: "Fiona", age: 20 },
    { id: 7, name: "George", age: 22 },
    { id: 8, name: "Hannah", age: 21 },
    { id: 9, name: "Ian", age: 23 },
    { id: 10, name: "Jenny", age: 20 }
  ]);
  // Function to increment student age
  const incrementAge = (id:number)=>{
  const selectedStudents = students.filter(item => item.id === id)
  console.log(selectedStudents[0].age + 1)
  const newStudentList = students.map(item=>
    item.id === id?{...item,age: selectedStudents[0].age + 1}: item
    )
    setStudents(newStudentList)
  }

  const decrementAge = (id:number) => {
    const selectedStudents = students.filter(item => item.id === id)
    console.log(selectedStudents[0].age - 1)
    const newStudentList = students.map(item =>
      item.id === id?{...item,age: selectedStudents[0]. age - 1}: item)
      setStudents(newStudentList)
  }

  return (
    <div>
      {
        students.map(student=> <li>{student.name}{student.age} <button onClick={()=>incrementAge(student.id)}>add</button><button onClick={()=> decrementAge(student.id)}>subtract</button></li>)
        
    
      }
    </div>
  )
}

export default page
