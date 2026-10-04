import React from 'react';
import FoodCard from '../components/FoodCard';

const MenuPage = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json()
    const foods = data.data;
    console.log(foods);
    
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl font-bold px-5 md:px-0'>Menu Page</h1>
            <div className='grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 gap-4'>
                {
                    foods.map(food=> <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default MenuPage;