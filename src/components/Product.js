import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-hot-toast"
import { add, remove } from "../redux/slices/CartSlice";

export default function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className='flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 transition duration-300 ease-in outline rounded-xl hover:scale-110'>
      <div>
        <p className='w-40 mt-1 text-lg font-semibold text-left text-gray-700 truncate'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 font-normal text-gray-400 text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} alt="" className='w-full h-full' />
      </div>
      <div className='flex items-center justify-between w-full gap-12 mt-5'>
        <div>
          <p className='font-semibold text-green-600'>${post.price}</p>
        </div>
        {
          cart.some((p) => p.id == post.id) ?
            (<button onClick={removeFromCart} className='font-semibold text-gray-700 rounded-full text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>Remove Item</button>)
            :
            (<button onClick={addToCart} className='font-semibold text-gray-700 rounded-full text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>Add to Cart</button>)
        }
      </div>

    </div>
  )
}
