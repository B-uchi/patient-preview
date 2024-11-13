import React from 'react'
import patientIcon from '../assets/person-icon.svg'

const SideBar = () => {
  return (
    <nav className='bg-[#041E42] w-[260px] h-[1024px] border-r-[1px] flex flex-col sidebar-shadow'>
        <div className="px-[32px] border-b-[1px] border-b-[#1D3653] h-[93px] gap-[10px] flex items-center">
            <p className='font-urbane font-light text-[24px] text-[#ffffff] logo-text'>LOGO</p>
        </div>
        <div className="px-[15px] py-[50px]">
            <button className="rounded-[5px] py-[10px] px-[13px] bg-[#0091F7] h-[38px] w-[230px] flex gap-[9px]">
                <img src={patientIcon} alt="patient icon" className='h-[18px] w-[18px]' />
                <p className='text-[#ffffff] font-urbane nav-item-text'>Patients</p>
            </button>
        </div>
    </nav>
  )
}

export default SideBar