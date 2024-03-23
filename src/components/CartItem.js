import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';

export default function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center justify-between p-4 mt-6 transition duration-300 ease-in border rounded-lg shadow-md hover:shadow-lg">
      <div className="flex-shrink-0 mr-4">
        <img src={item.image} alt={item.title} className="object-cover w-20 h-20 rounded-md" />
      </div>
      <div className="flex-grow">
        <h1 className="text-lg font-semibold text-gray-900">{item.title}</h1>
        <p className="mt-1 text-sm text-gray-600">{item.description.slice(0, 50)}...</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-semibold text-green-600">${item.price}</p>
          <button onClick={removeFromCart} className="px-3 py-1 text-white transition duration-300 bg-red-600 rounded-md focus:outline-none focus:ring focus:ring-red-500 hover:bg-red-700">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

