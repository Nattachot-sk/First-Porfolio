import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='p-4 text-white font-[jaro] font-bold'>
            <button className='mx-5 p-5 text-[25px] hover:text-blue-600 transition ease-in '>
              <a href="">Home</a>
            </button>
            <button className='mx-5 p-5 text-[25px] hover:text-blue-600 transition ease-in '>
              <a href="">About</a>
            </button>
            <button className='mx-5 p-5 text-[25px] hover:text-blue-600 transition ease-in '>
              <a href="">Skill</a>
            </button>
            <button className='mx-5 p-5 text-[25px] hover:text-blue-600 transition ease-in '>
              <a href="">Footer</a>
            </button>

        </div>
    </div>
  )
}

export default Navbar