import { useState } from 'react'
import { AiOutlineBell, AiOutlineMessage, AiOutlineSearch } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import img1 from '../src/images/avatar-g139528dac_640.png'
import Sidebar from './components/Sidebar'

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  const openSidebar = () => {
    setSidebar(true)
  }

  const closeSidebar = () => {
    setSidebar(false)
  }
  return (
    <>
      <div className='flex relative w-full'>
        <Sidebar sidebar={sidebar} />
        <div className={sidebar ? 'inset-0 w-full bg-slate-500/70 min-h-screen absolute z-40' : 'hidden'} onClick={closeSidebar}></div>
        <div className='flex flex-col w-full bg-slate-50 py-4 pl-0 lg:pl-[15.8rem]'>

          {/* Topbar */}
          <div className="flex space-x-2 lg:space-x-0 items-center justify-between px-4 md:px-6 py-4">
            <button type='button' className='block lg:hidden' onClick={openSidebar}>
              <FaBars className='text-sky-800 text-base sm:text-lg' />
            </button>
            <div className='bg-white rounded py-2 px-4 items-center space-x-3 shadow-sm hidden md:flex basis-2/3'>
              <input type="text" className='bg-white outline-none w-full text-sm lg:text-base' placeholder='Search' />
              <AiOutlineSearch className='font-semibold' />
            </div>
            <div className='flex space-x-2 lg:space-x-4'>
              <div className='bg-white rounded p-1 shadow-sm'>
                <AiOutlineBell className='text-base sm:text-lg md:text-xl lg:text-2xl text-rose-500' />
              </div>
              <div className='bg-white rounded p-1 shadow-sm'>
                <AiOutlineMessage className='text-base sm:text-lg md:text-xl lg:text-2xl text-rose-500' />
              </div>
              <div className='flex items-center space-x-2'>
                <p className='text-xs md:text-sm font-medium'>Admin</p>
                <img src={img1} alt='' className='w-6 md:w-8 h-auto rounded-full' />
              </div>
            </div>
          </div>

          {/* Main Content */}
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
