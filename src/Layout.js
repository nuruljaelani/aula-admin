import { AiOutlineBell, AiOutlineMessage, AiOutlineSearch } from 'react-icons/ai'
import img1 from '../src/images/avatar-g139528dac_640.png'
import Sidebar from './components/Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <div className='flex relative w-full min-h-screen'>
        <Sidebar />
        <div className='flex flex-col bg-slate-50 ml-60 py-4 sm:py-6 lg:py-8 w-full'>

          {/* Topbar */}
          <div className="flex items-center justify-between px-4 md:px-6">
            <div className='bg-white rounded py-2 px-4 items-center space-x-3 shadow-sm flex basis-2/3'>
              <input type="text" className='bg-white outline-none w-full' placeholder='Search' />
              <AiOutlineSearch className='font-semibold' />
            </div>
            <div className='flex space-x-2 md:space-x-4'>
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
