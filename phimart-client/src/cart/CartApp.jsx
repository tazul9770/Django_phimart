import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CartApp = () => {
  const { register, handleSubmit, reset } = useForm();
  const [cart, setCart] = useState([]);

  // Add item
  const addItem = (data) => {
    const existingItem = cart.find((item) => item.name === data.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === data.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { name: data.name, price: parseFloat(data.price), quantity: 1 }]);
    }
    reset();
  };

  // Increase quantity
  const increaseQuantity = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (name) => {
    setCart(
      cart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Delete item
  const removeItem = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="mt-5 w-1/2 mx-auto bg-gray-100 rounded-lg p-6 shadow-sm">
      <form onSubmit={handleSubmit(addItem)} className="mb-4 space-y-3">
        {/* Add Cart items */}
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Item Name"
          className="w-full border p-2 rounded-lg"
        />

        <input
          {...register("price", { required: true })}
          type="number"
          placeholder="Item Price"
          className="w-full border p-2 rounded-lg"
        />

        <button className="w-full shadow-lg cursor-pointer bg-green-500 px-2 py-3 text-white rounded-lg">
          Add Item
        </button>
      </form>

      {/* Cart item list */}
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.name} className="flex justify-between items-center p-2 bg-white rounded mb-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.name)}
                  className="bg-rose-500 text-white px-3 rounded py-2 cursor-pointer"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.name)}
                  className="bg-pink-500 text-white px-3 rounded py-2 cursor-pointer"
                >
                  +
                </button>
              </div>
              <button onClick={() => removeItem(item.name)} className="text-rose-500 cursor-pointer">
                <Trash2 />
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold text-lg">Total: ${total}</div>
        </div>
      ) : (
        <p>No cart item</p>
      )}
    </div>
  );
};

export default CartApp;
