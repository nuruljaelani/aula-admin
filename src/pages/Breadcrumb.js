import Layout from '../Layout2'
import { AiFillDashboard, AiOutlineFile, AiFillDatabase } from 'react-icons/ai'

const Breadcrumb = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col px-4 md:px-6 my-4 md:my-6 space-y-4 md:space-y-6">
          <div className='flex flex-col'>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-800 dark:text-teal-300 font-bold">Breadcrumb</p>
            <p className='text-sm md:text-base text-sky-800 dark:text-sky-300'>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS</p>
          </div>
          <div className='flex space-x-6'>
            <div className='flex flex-col space-y-6 lg:space-y-8 basis-1/2'>
              {/* Default */}
              <div className='flex flex-col bg-white dark:bg-slate-900 p-4 rounded-lg space-y-4 drop-shadow-sm h-fit'>
                <p className='text-teal-800 dark:text-teal-300 font-bold text-lg'>Default</p>
                <div className='flex flex-col space-y-4'>
                  <div className='text-gray-700 dark:text-gray-300'>
                    Home
                  </div>
                  <div className='flex space-x-2'>
                    <a href="#" className='text-blue-500'>Home</a>
                    <p className='dark:text-gray-300'>/</p>
                    <p className='dark:text-gray-300'>Library</p>
                  </div>
                  <div className='flex space-x-2'>
                    <a href="#" className='text-blue-500'>Home</a>
                    <p className='dark:text-gray-300'>/</p>
                    <a href='#' className='text-blue-500'>Library</a>
                    <p className='dark:text-gray-300'>/</p>
                    <p className='dark:text-gray-300'>Data</p>
                  </div>
                </div>
              </div>
              {/* Position */}
              <div className='flex flex-col bg-white dark:bg-slate-900 p-4 rounded-lg space-y-4 drop-shadow-sm h-fit'>
                <p className='text-teal-800 dark:text-teal-300 font-bold text-lg'>Position</p>
                <div className='flex flex-col space-y-4'>
                  <div className='text-gray-700 flex space-x-2 items-center'>
                    <AiFillDashboard className='text-gray-700 dark:text-gray-300' />
                    <a href="#" className='text-gray-700 dark:text-gray-300'>Home</a>
                  </div>
                  <div className='flex space-x-2 items-center'>
                    <AiFillDashboard className='text-gray-700 dark:text-gray-300' />
                    <a href="#" className='text-blue-500'>Home</a>
                    <p className='dark:text-gray-300'>/</p>
                    <AiOutlineFile className='text-gray-700 dark:text-gray-300' />
                    <p className='dark:text-gray-300'>Library</p>
                  </div>
                  <div className='flex space-x-2 items-center'>
                    <AiFillDashboard className='text-gray-700 dark:text-gray-300' />
                    <a href="#" className='text-blue-500'>Home</a>
                    <p className='dark:text-gray-300'>/</p>
                    <AiOutlineFile className='text-gray-700 dark:text-gray-300' />
                    <a href='#' className='text-blue-500'>Library</a>
                    <p className='dark:text-gray-300'>/</p>
                    <AiFillDatabase className='text-gray-700 dark:text-gray-300' />
                    <p className='dark:text-gray-300'>Data</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col basis-1/2'>
              {/* Background */}
              <div className='flex flex-col bg-white dark:bg-slate-900 basis-1/2 p-4 rounded-lg drop-shadow-sm space-y-4'>
                <p className='text-teal-800 dark:text-teal-300 font-bold text-lg'>Background</p>
                <div className='flex flex-col space-y-4'>
                  <div className='bg-blue-600 rounded flex space-x-2 p-1 px-2 text-white'>
                    <a href="#">Home</a>
                    <p>/</p>
                    <p>Library</p>
                  </div>
                  <div className='bg-green-600 rounded flex space-x-2 p-1 px-2 text-white items-center'>
                    <AiFillDashboard />
                    <a href="#">Home</a>
                    <p>/</p>
                    <AiOutlineFile />
                    <p>Library</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Breadcrumb
