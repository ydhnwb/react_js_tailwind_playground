import React from 'react'

export const FoodItem = () => {
    return (
        <div className="food-card">

            <img className="object-cover h-56 w-full sm:h-52" src="https://asset.kompas.com/crops/gi24VPQMhftubxYIWPJATjHrxTA=/0x0:1000x667/750x500/data/photo/2020/06/30/5efb0cb4a0226.jpg" />


            <div className="p-4">
                <h3 className="text-lg font-bold">Rendang</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>

            <div className="food-badge">
                <span>20 minutes</span>
            </div>
        </div>
    )
}