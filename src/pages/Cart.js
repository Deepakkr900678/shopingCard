import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(amount);
  }, [cart]);

  return (
    <div className="container px-4 py-8 mx-auto">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-3/4">
            <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="md:w-1/4">
            <div className="p-4 border rounded-lg">
              <h2 className="mb-4 text-lg font-bold">Summary</h2>
              <p className="mb-2">Total Items: <span className="font-bold">{cart.length}</span></p>
              <p className="mb-4">Total Amount: <span className="font-bold">${totalAmount}</span></p>
              <button className="w-full py-2 font-bold text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-2xl font-bold">Cart Empty</h1>
          <Link to="/">
            <button className="px-4 py-2 font-bold text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
