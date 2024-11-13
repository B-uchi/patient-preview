import React from 'react'
import profileIcon from '../assets/profile-icon.png'
import hamburgerIcon from '../assets/hamburger-icon.svg'

const ToolBar = () => {
  return (
    <div className='w-full h-[79px] px-[24px] py-[19px] bg-white custom-shadow border-b-[1px] border-b-[#F1F5F9] flex items-center justify-between'>
        <button>
            <img src={hamburgerIcon} alt="menu button icon" className='h-[24px] w-[24px]'/>
        </button>
        <button>
            <img src={profileIcon} alt="profile picture" className='h-[41px] w-[41px]'/>
        </button>
    </div>
  )
}

export default ToolBar