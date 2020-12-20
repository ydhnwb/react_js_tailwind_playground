import React from 'react'
import { BottomNavbar } from '../../component/base/navbar/bottom-navbar'
import { Navbar } from '../../component/base/navbar/navbar'
import { FoodItem } from '../../component/food/food-item'

export default function HomePage() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-1 overflow-y-auto p-8">
                <h1 className="text-gray-700 text-5xl font-serif">Latest recipe</h1>
                <h3 className="text-gray-900 text-lg">Lorem ipsum dolor sit amet consectetur</h3>
                <div className="grid lg:grid-cols-3 gap-4 mt-4">
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>

        </div>
    )
}