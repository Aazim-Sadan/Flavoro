import React from 'react'
import { FaStar } from "react-icons/fa";

const FoodCard = () => {
    return (
        <div className=' font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
            <img src="https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png"
                alt=""
                className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
            />
            <div className='text-sm flex justify-between '>
                <h2>Onian Pizza </h2>
                <span className='text-green-500'>₹130</span>
            </div>
            <p className='text-sm font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fugit.
            </p>
            <div className=' flex justify-between'>
                <span className='flex justify-center items-center'>
                    <FaStar className='mr-1 text-yellow-400' /> 4.5
                </span>
                <button className='p-1 text-white bg-green-500 hover:bg-gre rounded-lg text-sm '> Add to cart</button>
            </div>
        </div>
    )
}

export default FoodCard