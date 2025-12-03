import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
 

  return (
    <div className='grid grid-color-3 sm:grid-grid-cols-1 md:grid-cols-2 gap-4'>
    <div className='w-28 h-28 bg-blue-400'>one</div>
    <div className='w-28 h-28 bg-green-400'>two</div>
    <div className='w-28 h-28 bg-yellow-400'>three</div>
    </div>
  )
}

export default App
