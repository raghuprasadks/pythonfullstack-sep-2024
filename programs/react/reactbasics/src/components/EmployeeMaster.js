import React,{useState} from 'react'

const EmployeeMaster = () => {
    const [code,setCode]=useState()
    const [name,setName]=useState()
    const [dept,setDept]=useState()
    const [desg,setDesg]=useState()
    const [sal,setSal]=useState()
    const [employees,setEmployees]=useState([])

    const addEmployee =(event)=>{
        event.preventDefault()
        let employee ={code,name,dept,desg,sal}
        // ... spread operator
        setEmployees([...employees,employee]) 
        console.log("employees ",employees)
        resetEmployee()
    }

    const resetEmployee =()=>{
        setCode('')
        setName('')
        setDept('')
        setDesg('')
        setSal('')
    }
  return (
    <>
    <div>
        <h1>Employee Form</h1>
        <label>Code</label>
        <input type="text" value={code} onChange={(e)=>setCode(e.target.value)}></input><br/>
    
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
    
        <label>Department</label>
        <input type="text" value={dept} onChange={(e)=>setDept(e.target.value)}></input><br/>

        <label>Designation</label>
        <input type="text" value={desg} onChange={(e)=>setDesg(e.target.value)}></input><br/>
    
        <label>Salary</label>
        <input type="text" value={sal} onChange={(e)=>setSal(e.target.value)}></input><br/>
        <button onClick={addEmployee}>Add Employee</button>
    </div>
    <div>
        <h1>Employee List</h1>
        <h2>Total - {employees.length}</h2>
        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Salary</th>                
            </tr>
            {
                employees.map((employee)=>
                <tr key={employee.code}>
                    <td>{employee.code}</td>
                    <td>{employee.name}</td>
                    <td>{employee.dept}</td>
                    <td>{employee.desg}</td>
                    <td>{employee.sal}</td>

                </tr>
                )
                
            }
        </table>
    </div>
    </>
  )
}

export default EmployeeMaster