const Content = () => {

    let course = "Python full stack development"
    let employee={
        name:"John",
        age:40,
        designation:"Manager"
    }
    return(
        <div>
            <h1>Content</h1>
            <h2>{course}</h2>
            <h3>Name :{employee.name}</h3>
            <h3>Age : {employee.age}</h3>
            <h3>Designation : {employee.designation}</h3>
        </div>
    )
}

export default Content