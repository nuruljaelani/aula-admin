/* eslint-disable no-unused-vars */
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineDashboard, AiOutlineLogin } from 'react-icons/ai'
import { BiLayer } from 'react-icons/bi'
import { FaAngleDown } from 'react-icons/fa'
import aula from '../../src/assets/aula.svg'

const Sidebar = ({ sidebar }) => {
  const activeClass =
    'flex items-center space-x-2 md:space-x-4 px-6 md:px-10 py-2 dark:hover:bg-slate-900 hover:bg-slate-100 border-l-4 border-l-rose-500 text-rose-500 cursor-pointer'
  const notactive =
    'flex items-center space-x-2 md:space-x-4 px-6 md:px-10 py-2 dark:hover:bg-slate-900 hover:bg-slate-100 cursor-pointer'
  return (
    <>
      <div
        className={
          sidebar
            ? 'bg-white dark:bg-slate-800 h-full fixed z-50 left-0 top-0 flex'
            : 'bg-white dark:bg-slate-800 dark:text-slate-200 h-full fixed z-50 left-0 top-0 hidden lg:flex'
        }
      >
        <div className="flex flex-col py-2 md:py-4 lg:py-6 space-y-4 md:space-y-6">
          <div className="flex items-center justify-center">
            <img src={aula} alt="" className="h-8 md:h-12 lg:h-14 w-auto" />
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <p className="uppercase text-slate-400 dark:text-slate-100 text-sm px-6 md:px-10">
              Menu
            </p>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : notactive)}
            >
              <AiOutlineDashboard className="font-medium" />
              <p className="font-medium text-sm md:text-base">Dashboard</p>
            </NavLink>
            <Menu>
              <Menu.Button
                as="div"
                className={
                  location.pathname.includes('/components/')
                    ? activeClass
                    : notactive
                }
              >
                <BiLayer />
                <p className="text-sm md:text-base">Components</p>
                <FaAngleDown />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-500"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  as="div"
                  className="px-6 md:px-10 lg:px-14 flex flex-col space-y-4 outline-none"
                >
                  <Menu.Item as="div">
                    <NavLink to="/components/alert">
                      <p className="text-sm font-medium dark:text-slate-200">Alert</p>
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item as="div">
                    <NavLink to="/components/badge">
                      <p className="text-sm font-medium dark:text-slate-200">Badge</p>
                    </NavLink>
                  </Menu.Item>
                  <NavLink to="/components/breadcrumb">
                    <Menu.Item as="div">
                      <p className="text-sm font-medium dark:text-slate-200">Breadcrumb</p>
                    </Menu.Item>
                  </NavLink>
                  <NavLink to="/components/button">
                    <Menu.Item as="div">
                      <p className="text-sm font-medium dark:text-slate-200">Button</p>
                    </Menu.Item>
                  </NavLink>
                  <NavLink to="/components/card">
                    <Menu.Item as="div">
                      <p className="text-sm font-medium dark:text-slate-200">Card</p>
                    </Menu.Item>
                  </NavLink>
                  <NavLink to="/components/modal">
                    <Menu.Item as="div">
                      <p className="text-sm font-medium dark:text-slate-200">Modal</p>
                    </Menu.Item>
                  </NavLink>
                </Menu.Items>
              </Transition>
            </Menu>
            <p className="uppercase text-slate-400 text-sm px-6 md:px-10">
              Page
            </p>
            <Menu>
              <Menu.Button
                as="div"
                className={
                  location.pathname.includes('/auth/') ? activeClass : notactive
                }
              >
                <AiOutlineLogin />
                <p className="text-sm md:text-base">Authentication</p>
                <FaAngleDown />
              </Menu.Button>
              <Menu.Items
                as="div"
                className="px-6 md:px-10 lg:px-14 flex flex-col space-y-4 outline-none"
              >
                <Menu.Item as="div">
                  <NavLink to="/auth/alert">
                    <p className="text-sm md:text-base">Login</p>
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="div">
                  <NavLink to="/auth/badge">
                    <p className="text-sm md:text-base">Register</p>
                  </NavLink>
                </Menu.Item>
                <Menu.Item as="div">
                  <p className="text-sm md:text-base">Forgot Password</p>
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
