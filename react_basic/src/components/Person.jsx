import { useState } from "react";

const Person = () => {

    const [person, setPerson] = useState({
        firstName:"tazul",
        lastName:"islam",
        email:"rs@gmail.com",
        address: {
            city:"Dhaka",
            state:"Mirpur"
        }
    })

    const handleClick = () => {
        const newPerson = {
            ...person,
            // firstName:"shakib",
            // lastName:" al hassan"
            address:{
                ...person.address,
                 city:"Dhanmondi"
            }
        }
        setPerson(newPerson)
    }

    return (
        <div className="m-4">
            <h1>{person.firstName} {person.lastName} {person.email}</h1>
            <p>{person.address.city} {person.address.state}</p>
            <button onClick={() => handleClick()} className="px-3 py-2 bg-green-500 text-white rounded-sm">Click me</button>
        </div>
    );
};

export default Person;