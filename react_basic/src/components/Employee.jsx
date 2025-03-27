import { useState } from "react";

const Employee = () => {

    const employeeArr = [
        {name:"Mojid", age: 20},
        {name:"salam", age: 23}
    ]

    const [employee, setEmployee] = useState(employeeArr)

    const handleEmployee = () => {
        setEmployee(employee.map((emp) => emp.name === 'Mojid' ? {...emp, age: 30}: emp ))
    }

    return (
        <div>
            <ul className="m-10 list-disc"> 
                {employee.map((emp, indx) => (
                    <li key={indx}>Name: {emp.name}, Age: {emp.age}</li>
                ))}
            </ul>
            <button className="m-5 px-3 py-2 bg-amber-500 rounded-sm" onClick={() => {handleEmployee()}}>Click to update age</button>
        </div>
    );
};

export default Employee;