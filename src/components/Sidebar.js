/* eslint-disable no-unused-vars */
import { Menu } from '@headlessui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineDashboard, AiOutlineFileDone } from 'react-icons/ai'
import { BiLayer } from 'react-icons/bi'
import { FaAngleDown } from 'react-icons/fa'
import aula from '../../src/assets/aula.svg'

const Sidebar = () => {
  const activeClass = 'flex items-center space-x-2 md:space-x-4  px-4 md:px-6 py-2 hover:bg-slate-100 border-l-4 border-l-rose-500 text-rose-500'
  const notactive = 'flex items-center space-x-2 md:space-x-4  px-4 md:px-6 py-2 hover:bg-slate-100'
  return (
    <>
      <div className="bg-white basis-1/5 h-screen fixed z-50 left-0 top-0 overflow-hidden">
        <div className='flex flex-col py-2 md:py-4 lg:py-6 space-y-4 md:space-y-6'>
          {/* <p className='uppercase font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 md:px-6'>widara</p> */}
          <div className='flex items-center justify-center'>
            <img src={aula} alt='' className='h-8 md:h-12 lg:h-14 w-auto' />
          </div>
          <div className='flex flex-col space-y-4'>
            <p className='uppercase text-slate-400 text-sm px-4 md:px-6'>Menu</p>
            <NavLink to='/' className={({ isActive }) => isActive ? activeClass : notactive}>
              <AiOutlineDashboard className='font-medium' />
              <p className='font-medium'>Dashboard</p>
            </NavLink>
              <Menu>
                <Menu.Button as='div' className='flex items-center space-x-2 md:space-x-4 px-4 md:px-6 py-2 hover:bg-slate-50'>
                  <BiLayer />
                  <p>Components</p>
                  <FaAngleDown />
                </Menu.Button>
                <Menu.Items as='div' className='px-6 md:px-10 lg:px-14 flex flex-col space-y-4 outline-none'>
                  <Menu.Item as="div">
                    <NavLink to='/alert'>
                      <p>Alert</p>
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item as="div">
                    <NavLink to='/badge'>
                      <p>Badge</p>
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item as="div">
                    <p>Gallery</p>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <Menu>
                <Menu.Button as='div' className='flex items-center space-x-2 md:space-x-4 px-4 md:px-6 py-2 hover:bg-slate-50'>
                  <AiOutlineFileDone />
                  <p>Form</p>
                  <FaAngleDown />
                </Menu.Button>
                <Menu.Items as='div' className='px-6 md:px-10 lg:px-14 flex flex-col space-y-4 outline-none'>
                  <Menu.Item as="div">
                    <p>Alert</p>
                  </Menu.Item>
                  <Menu.Item as="div">
                    <p>Badge</p>
                  </Menu.Item>
                  <Menu.Item as="div">
                    <p>Gallery</p>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
