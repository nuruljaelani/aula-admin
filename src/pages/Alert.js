import Layout from '../Layout2'
import { AiOutlineStar, AiOutlineCheckCircle, AiOutlineWarning, AiOutlineClockCircle, AiOutlineInfoCircle } from 'react-icons/ai'
import { FaLightbulb, FaMoon } from 'react-icons/fa'

const Alert = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col px-4 md:px-6 my-4 md:my-6 space-y-4 md:space-y-6">
          <div className='flex flex-col'>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-800 font-bold">Alert</p>
            <p className='text-sm md:text-base text-sky-800'>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
          </div>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0'>
            <div className='flex flex-col space-y-6 lg:space-y-8 basis-1/2'>
              {/* Default Alert */}
              <div className='flex flex-col bg-white p-4 rounded-lg space-y-4 drop-shadow-sm h-fit'>
                <p className='text-teal-800 font-bold text-base md:text-lg'>Default</p>
                <div className='flex flex-col space-y-4'>
                  <div className='text-white bg-blue-600 rounded p-2 md:p-4 text-sm'>
                    This is primary alert.
                  </div>
                  <div className='text-white bg-green-600 rounded p-2 md:p-4 text-sm'>
                    This is success alert.
                  </div>
                  <div className='text-white bg-yellow-600 rounded p-2 md:p-4 text-sm'>
                    This is warning alert.
                  </div>
                  <div className='text-white bg-red-600 rounded p-2 md:p-4 text-sm'>
                    This is danger alert.
                  </div>
                  <div className='text-white bg-sky-400 rounded p-2 md:p-4 text-sm'>
                    This is secondary alert.
                  </div>
                  <div className='text-white bg-gray-800 rounded p-2 md:p-4 text-sm'>
                    This is dark alert.
                  </div>
                  <div className='text-gray-800 bg-gray-300 rounded p-2 md:p-4 text-sm'>
                    This is secondary alert.
                  </div>
                </div>
              </div>
              {/* Alert with icon */}
              <div className='flex flex-col bg-white p-4 rounded-lg drop-shadow-sm space-y-4'>
                <p className='text-teal-800 font-bold text-base md:text-lg'>With Icon</p>
                <div className='flex flex-col space-y-4'>
                  <div className='text-white bg-blue-600 rounded p-2 md:p-4 flex space-x-2 items-center'>
                    <AiOutlineStar className='text-xl md:text-2xl' />
                    <p className='text-sm md:text-base'>This is primary alert.</p>
                  </div>
                  <div className='text-white bg-green-600 rounded p-2 md:p-4 flex space-x-2 items-center'>
                    <AiOutlineCheckCircle className='text-xl md:text-2xl' />
                    <p className='text-sm md:text-base'>This is success alert.</p>
                  </div>
                  <div className='text-white bg-yellow-600 rounded p-2 md:p-4 flex space-x-2 items-center'>
                    <AiOutlineWarning className='text-xl md:text-2xl' />
                    <p className='text-sm md:text-base'>This is warning alert.</p>
                  </div>
                  <div className='text-white bg-red-600 rounded p-2 md:p-4 flex space-x-2 items-center'>
                    <AiOutlineClockCircle className='text-xl md:text-2xl' />
                    <p className='text-sm md:text-base'>This is danger alert.</p>
                  </div>
                  <div className='text-white bg-sky-400 rounded p-2 md:p-4 flex space-x-2 items-center'>
                    <AiOutlineInfoCircle className='text-xl md:text-2xl' />
                    <p className='text-sm md:text-base'>This is info alert.</p>
                  </div>
                  <div className='text-white bg-gray-800 rounded p-2 md:p-4 flex space-x-2 items-center'>
                    <FaLightbulb className='text-xl md:text-2xl' />
                    <p className='text-sm md:text-base'>This is dark alert.</p>
                  </div>
                  <div className='text-gray-800 bg-gray-300 rounded p-2 md:p-4 flex space-x-2 items-center'>
                    <FaMoon className='text-xl md:text-2xl' />
                    <p className='text-sm md:text-base'>This is secondary alert.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Alert with heading */}
            <div className='flex flex-col basis-1/2'>
              <div className='flex flex-col bg-white basis-1/2 p-4 rounded-lg drop-shadow-sm space-y-4'>
                <p className='text-teal-800 font-bold text-base md:text-lg'>Heading</p>
                <div className='flex flex-col space-y-4'>
                  <div className='text-white bg-blue-600 rounded p-2 md:p-4'>
                    <p className='text-base md:text-lg lg:text-xl font-medium'>Primary</p>
                    <p className='text-sm md:text-base'>This is primary alert.</p>
                  </div>
                  <div className='text-white bg-green-600 rounded p-2 md:p-4'>
                    <p className='text-base md:text-lg lg:text-xl font-medium'>Success</p>
                    <p className='text-sm md:text-base'>This is success alert.</p>
                  </div>
                  <div className='text-white bg-yellow-600 rounded p-2 md:p-4'>
                    <p className='text-base md:text-lg lg:text-xl font-medium'>Warning</p>
                    <p className='text-sm md:text-base'>This is warning alert.</p>
                  </div>
                  <div className='text-white bg-red-600 rounded p-2 md:p-4'>
                    <p className='text-base md:text-lg lg:text-xl font-medium'>Danger</p>
                    <p className='text-sm md:text-base'>This is danger alert.</p>
                  </div>
                  <div className='text-white bg-sky-400 rounded p-2 md:p-4'>
                    <p className='text-base md:text-lg lg:text-xl font-medium'>Info</p>
                    <p className='text-sm md:text-base'>This is info alert.</p>
                  </div>
                  <div className='text-white bg-gray-800 rounded p-2 md:p-4'>
                    <p className='text-base md:text-lg lg:text-xl font-medium'>Dark</p>
                    <p className='text-sm md:text-base'>This is dark alert.</p>
                  </div>
                  <div className='text-gray-800 bg-gray-300 rounded p-2 md:p-4'>
                    <p className='text-base md:text-lg lg:text-xl font-medium'>Secondary</p>
                    <p className='text-sm md:text-base'>This is secondary alert.</p>
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

export default Alert
