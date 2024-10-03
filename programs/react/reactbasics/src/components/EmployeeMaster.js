import React,{useState} from 'react'

const EmployeeMaster = () => {
    const [code,setCode]=useState()
    const [name,setName]=useState()
    const [dept,setDept]=useState()
    const [desg,setDesg]=useState()
    const [sal,setSal]=useState()
    const [employees,setEmployees]=useState([])
    const [isEdit,setIsEdit]=useState(false)

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

    const deleteEmployee =(code)=>{
        let afterdelete = employees.filter(employee=>employee.code != code)
        setEmployees(afterdelete)
    }

    const editEmployee = (employee)=>{
        setIsEdit(true)
        setCode(employee.code)
        setName(employee.name)
        setDept(employee.dept)
        setDesg(employee.desg)
        setSal(employee.sal)
    }

    const updateEmployee = ()=>{
        let updemployee = {code,name,dept,desg,sal}
        console.log("updated employee ",updemployee)
        let updemployeelist = employees.map((employee)=>employee.code==code?updemployee:employee)
        setEmployees(updemployeelist)
        setIsEdit(false)
        resetEmployee()
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
        <button onClick={addEmployee} disabled={isEdit}>Add Employee</button>
        <button onClick={updateEmployee} disabled={!isEdit}>Update Employee</button>
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
                <th>Delete</th> 
                <th>Edit</th>
            </tr>
            {
                employees.map((employee)=>
                <tr key={employee.code}>
                    <td>{employee.code}</td>
                    <td>{employee.name}</td>
                    <td>{employee.dept}</td>
                    <td>{employee.desg}</td>
                    <td>{employee.sal}</td>
                    <td><button onClick={()=>deleteEmployee(employee.code)}>Delete</button></td>
                    <td><button onClick={()=>editEmployee(employee)}>Edit</button></td>

                </tr>
                )
                
            }
        </table>
    </div>
    </>
  )
}

export default EmployeeMaster