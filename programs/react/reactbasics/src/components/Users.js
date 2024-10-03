import React,{useState,useEffect} from 'react'

const Users = () => {
    const [usersdata,setUsersdata]=useState([])
    const url ="https://jsonplaceholder.typicode.com/users"    
    const getUsers=()=>{
        fetch(url)
        .then(response=>response.json())
        .then(json=>setUsersdata(json))
        .catch(error=>console.log("error ",error))
    }

    useEffect(()=>{
        console.log('useEffect')
        getUsers()
    },[])
  
    return (
    <div>
    <h1>Users - {usersdata.length}</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
        </tr>
        {
            usersdata.map((user)=>
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                </tr>
            )
        }
    </table>
    
    </div>
  )
}

export default Users