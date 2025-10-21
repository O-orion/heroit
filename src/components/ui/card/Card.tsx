import React from 'react'

interface CardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    color?: string;
}

function Card({ title, value, icon, color = 'bg-white'}: CardProps) {
  return (
    <div className={`p-5 rounded-2xl shadow-md bg-[#1A1D26] flex flex-col gap-2`} >
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-400">{ title }</h3>
            {
                icon && <div className={`${color}`}>{icon}</div>
            }
        </div>
        <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}

export default Card