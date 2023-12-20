// Technology.js
import React from 'react'

const Technology = ({ name, level }) => {
  const getProgressColor = () => {
   
    const gradientColor = `linear-gradient(to right, #4A90E2 ${level}%, #F0F0F0 ${level}%)`

    return {
      background: gradientColor,
    }
  }

  return (
    <div className='mb-4'>
      <div className='flex items-center justify-between'>
        <span className='text-lg font-semibold'>{name}</span>
        <span className='text-gray-600'>{level}</span>
      </div>
      <div className='w-full h-4 bg-gray-200 rounded-md overflow-hidden'>
        <div style={getProgressColor()} className='h-full'></div>
      </div>
    </div>
  )
}

export default Technology
