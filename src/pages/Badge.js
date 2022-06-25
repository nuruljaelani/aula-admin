import { FaBell } from 'react-icons/fa'
import Layout from '../Layout2'

const Badge = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col px-4 md:px-6 my-4 md:my-6 space-y-4 md:space-y-6">
          <div className='flex flex-col'>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-800 font-bold">Badge</p>
            <p className='text-sm md:text-base text-sky-800'>Examples for badges, our small count and labeling component.</p>
          </div>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0'>
            <div className='flex flex-col space-y-6 lg:space-y-8 basis-1/2'>
              {/* Badge variation */}
              <div className='flex flex-col bg-white p-4 rounded-lg space-y-4 drop-shadow-sm h-fit'>
                <p className='text-teal-800 font-bold text-base md:text-lg'>Variation</p>
                <div className='flex flex-wrap justify-between'>
                  <div className='text-white bg-blue-600 rounded-2xl text-sm py-1 px-2 w-fit h-fit'>
                    Primary
                  </div>
                  <div className='text-white bg-green-600 rounded-2xl text-sm py-1 px-2 w-fit'>
                    Success
                  </div>
                  <div className='text-white bg-yellow-600 rounded-2xl text-sm py-1 px-2 w-fit'>
                    Warning
                  </div>
                  <div className='text-white bg-red-600 rounded-2xl text-sm py-1 px-2 w-fit'>
                    Danger
                  </div>
                  <div className='text-white bg-sky-400 rounded-2xl text-sm py-1 px-2 w-fit'>
                    Info
                  </div>
                  <div className='text-white bg-gray-800 rounded-2xl text-sm py-1 px-2 w-fit'>
                    Dark
                  </div>
                  <div className='text-white bg-gray-400 rounded-2xl text-sm py-1 px-2 w-fit'>
                    Secondary
                  </div>
                </div>
              </div>
              {/* Badge light */}
              <div className='flex flex-col bg-white p-4 rounded-lg space-y-4 drop-shadow-sm h-fit'>
                <p className='text-teal-800 font-bold text-base md:text-lg'>Light</p>
                <div className='flex flex-wrap justify-between'>
                  <div className='text-blue-800 bg-blue-200 rounded-2xl text-sm py-1 px-2'>
                    Primary
                  </div>
                  <div className='text-green-800 bg-green-200 rounded-2xl text-sm py-1 px-2'>
                    Success
                  </div>
                  <div className='text-yellow-800 bg-yellow-200 rounded-2xl text-sm py-1 px-2'>
                    Warning
                  </div>
                  <div className='text-red-800 bg-red-200 rounded-2xl text-sm py-1 px-2'>
                    Danger
                  </div>
                  <div className='text-sky-800 bg-sky-200 rounded-2xl text-sm py-1 px-2'>
                    Info
                  </div>
                  <div className='text-gray-800 bg-gray-200 rounded-2xl text-sm py-1 px-2'>
                    Secondary
                  </div>
                </div>
              </div>
              {/* Heading */}
              <div className='flex flex-col bg-white p-4 rounded-lg space-y-4 drop-shadow-sm h-fit'>
                <p className='text-teal-800 font-bold text-base md:text-lg'>Heading</p>
                <div className='flex flex-col space-y-4'>
                  <div className='text-blue-800 flex space-x-2 items-center'>
                    <p className='text-[36px] lg:text-[40px] font-bold text-sky-800'>Heading 1</p>
                    <div className='text-white bg-gray-700 p-1 text-[32px] lg:text-[36px] rounded-lg'>
                      New
                    </div>
                  </div>
                  <div className='text-blue-800 flex space-x-2 items-center'>
                    <p className='text-[28px] lg:text-[32px] font-bold text-sky-800'>Heading 2</p>
                    <div className='text-white bg-gray-700 p-1 rounded-lg text-[24px] lg:text-[28px]'>
                      New
                    </div>
                  </div>
                  <div className='text-blue-800 flex space-x-2 items-center'>
                    <p className='text-[24px] lg:text-[28px] font-bold text-sky-800'>Heading 3</p>
                    <div className='text-white bg-gray-700 p-1 rounded-lg text-[20px] lg:text-[24px]'>
                      New
                    </div>
                  </div>
                  <div className='text-blue-800 flex space-x-2 items-center'>
                    <p className='text-[20px] lg:text-[24px] font-bold text-sky-800'>Heading 4</p>
                    <div className='text-white bg-gray-700 p-1 rounded-lg text-[16px] lg:text-[20px]'>
                      New
                    </div>
                  </div>
                  <div className='text-blue-800 flex space-x-2 items-center'>
                    <p className='text-[20px] font-bold text-sky-800'>Heading 5</p>
                    <div className='text-white bg-gray-700 p-1 rounded-lg text-[16px]'>
                      New
                    </div>
                  </div>
                  <div className='text-blue-800 flex space-x-2 items-center'>
                    <p className='text-[16px] font-bold text-sky-800'>Heading 6</p>
                    <div className='text-white bg-gray-700 p-1 rounded-md text-[14px]'>
                      New
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col basis-1/2'>
              {/* Badge button */}
              <div className='flex flex-col bg-white basis-1/2 p-4 rounded-lg drop-shadow-sm space-y-4'>
                <p className='text-teal-800 font-bold text-base md:text-lg'>Button</p>
                <div className='flex flex-col space-y-4'>
                  <p className='text-sky-800 font-semibold'>Simple</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <button type='button' className='text-white bg-blue-600 hover:bg-blue-700 rounded py-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-blue-500 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-green-600 hover:bg-green-700 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-green-500 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-yellow-500 hover:bg-yellow-600 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-yellow-400 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-red-600 hover:bg-red-700 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-red-500 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-sky-400 hover:bg-sky-500 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-sky-500 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-gray-800 hover:bg-gray-900 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-gray-700 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                  </div>
                </div>
                {/* Badge with icon */}
                <div className='flex flex-col space-y-4'>
                  <p className='text-sky-800 font-semibold'>Icon</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <button type='button' className='text-white bg-blue-600 hover:bg-blue-700 rounded py-2 px-3 justify-center flex items-center space-x-2 h-fit w-fit'>
                      <FaBell />
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-blue-500 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-green-600 hover:bg-green-700 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <FaBell />
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-green-500 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-yellow-500 hover:bg-yellow-600 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <FaBell />
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-yellow-400 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-red-600 hover:bg-red-700 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <FaBell />
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-red-500 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-sky-400 hover:bg-sky-500 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <FaBell />
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-sky-500 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
                    <button type='button' className='text-white bg-gray-800 hover:bg-gray-900 rounded p-2 justify-center flex items-center space-x-2 h-fit w-fit px-3'>
                      <FaBell />
                      <p className='text-sm md:text-base font-medium'>Notifications</p>
                      <div className='bg-gray-700 text-white rounded-full p-1 text-xs'>40</div>
                    </button>
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

export default Badge
