import axios from "axios";
import { useEffect, useState } from "react";

const Cyber_employees = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios
            .get("/experts.json")
            .then(res => {
                setUsers(res.data)
                console.log(res.data)
            })
            .catch(error => {
                setError(error.message)
            })
    }, []);

    const addToCart = (user) => {
        setCart([...cart, user])
    }

    const totalUser = () => cart.length
    const totalCost = () => cart.reduce((total, user) => total + user.salary, 0)

    if (error) return <p className="bg-red-500 text-center">Error: {error}</p>

    return (
        <div>
            {/* Header section */}
            <header className="bg-gray-300 text-black py-7">
                <div>
                    <h2 className="text-2xl text-center font-serif">Make a cyber security team</h2>
                    <p className="font-serif text-center">Our service is under attack so we need to hire a special cyber security team</p>
                    <h2 className="text-2xl text-center">Total Budget: 10 Million</h2>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-4">
                {/* Cyber Experts List */}
                <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <div key={user.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-3">
                            <img className="w-24 h-24 rounded-full mb-3" src={user.img} alt={user.name} />
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">{user.name}</h3>
                                <p className="">Age: {user.age}</p>
                                <p className="text-gray-600">{user.designation}</p>
                                <p className="text-gray-500">{user.address}</p>
                                <p className="text-lg font-bold text-pink-600 mt-2">${user.salary.toLocaleString()}</p>
                                <button onClick={() => addToCart(user)} className="bg-blue-500 px-3 py-2 text-white rounded-lg font-medium cursor-pointer transition">
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                </div>

                {/* Cart item store */}

                <div className="w-full lg:w-1/3">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg sticky top-4">
                        <p className="text-lg">Expert Added: <span className="font-bold">{totalUser()}</span></p>
                        <p className="text-lg">Total cost: <span className="font-bold">${totalCost().toLocaleString()}</span></p>
                        <div className="mt-4 max-h-60 overflow-y-auto">
                            {cart.map((user, index) => (
                                <div key={index} className="bg-white p-3 rounded-lg shadow gap-4 mb-2">
                                    <img src={user.img} alt={user.name} className="w-12 h-12 rounded-full"/>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="font-bold">{user.name}</h4>
                                        <p className="text-sm text-gray-500">${user.salary.toLocaleString()}</p>
                                        <p className="text-xs text-gray-500">{user.designation}</p>
                                        <p className="text-xs text-gray-500">{user.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Cyber_employees;