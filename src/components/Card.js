import { FaUsers, FaEye, FaHeart, FaBookmark, FaEllipsisV } from 'react-icons/fa'
import ava1 from '../assets/avatar/5927681.png'
import ava2 from '../assets/avatar/5927682.png'
import ava3 from '../assets/avatar/5927683.png'
import p1 from '../assets/products/002.webp'
import p2 from '../assets/products/iphone_13_mini_pink_1.webp'
import { Chart1, Chart3 } from './Chart'

const Card = () => {
  return (
    <>
      <div className='flex flex-col px-4 lg:px-6 space-y-4 lg:space-y-6 py-4 lg:py-6'>
        {/* Card */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col gap-4 lg:space-y-0 justify-between'>
          <div className='bg-white dark:bg-slate-900 rounded-lg shadow-sm p-2 md:p-4 flex items-center space-x-2 md:space-x-4 h-24'>
            <div className='bg-sky-100 dark:bg-sky-500 p-2 rounded-lg'>
              <FaUsers className='text-2xl md:text-3xl lg:text-4xl text-sky-500 dark:text-sky-300' />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg md:text-xl font-semibold dark:text-white'>16.000</p>
              <p className='text-xs lg:text-sm text-gray-500 dark:text-slate-300'>Followers</p>
            </div>
          </div>
          <div className='bg-white dark:bg-slate-900 rounded-lg shadow-sm p-2 md:p-4 flex items-center space-x-2 md:space-x-4 h-24'>
            <div className='bg-emerald-100 dark:bg-emerald-500 p-2 rounded-lg'>
              <FaEye className='text-2xl md:text-3xl lg:text-4xl text-emerald-500 dark:text-emerald-300' />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg md:text-xl font-semibold dark:text-white'>360K</p>
              <p className='text-xs lg:text-sm text-gray-500 dark:text-slate-300'>Viewers</p>
            </div>
          </div>
          <div className='bg-white dark:bg-slate-900 rounded-lg shadow-sm p-2 md:p-4 flex items-center space-x-2 md:space-x-4 h-24'>
            <div className='bg-rose-100 dark:bg-rose-500 p-2 rounded-lg'>
              <FaHeart className='text-2xl md:text-3xl lg:text-4xl text-rose-500 dark:text-rose-300' />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg md:text-xl font-semibold dark:text-white'>23.000</p>
              <p className='text-xs lg:text-sm text-gray-500 dark:text-slate-300'>Likes</p>
            </div>
          </div>
          <div className='bg-white dark:bg-slate-900 rounded-lg shadow-sm p-2 md:p-4 flex items-center space-x-2 md:space-x-4 h-24'>
            <div className='bg-indigo-100 dark:bg-indigo-500 p-2 rounded-lg'>
              <FaBookmark className='text-2xl md:text-3xl lg:text-4xl text-indigo-500 dark:text-indigo-300' />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg md:text-xl font-semibold dark:text-white'>208</p>
              <p className='text-xs lg:text-sm text-gray-500 dark:text-slate-300'>Saved Post</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full space-y-4 lg:space-y-0 lg:flex-row space-x-0 lg:space-x-4'>
          <div className='flex flex-col w-full lg:w-3/4 space-x-0 space-y-2 md:space-y-4 lg:space-y-8'>
            {/* Chart */}
            <Chart1 />
            {/* Recent Articles */}
            <div className='bg-white dark:bg-slate-900 rounded-lg flex flex-col w-full p-4 space-y-4 drop-shadow-md overflow-auto'>
              <p className='font-medium dark:text-slate-300'>Recent Articles</p>
              <table className='table-auto w-full'>
                <thead>
                  <tr>
                    <td className='text-sm font-medium text-gray-700 dark:text-slate-400 p-2'>No</td>
                    <td className='text-sm font-medium text-gray-700 dark:text-slate-400 p-2'>Title</td>
                    <td className='text-sm font-medium text-gray-700 dark:text-slate-400 p-2'>Date</td>
                    <td className='text-sm font-medium text-gray-700 dark:text-slate-400 p-2'>Category</td>
                    <td className='text-sm font-medium text-gray-700 dark:text-slate-400 p-2'>Comment</td>
                    <td className='text-sm font-medium text-gray-700 dark:text-slate-400 p-2'>Like</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-2'>
                      <div className='bg-sky-500 rounded text-white w-6 h-auto text-center text-xs md:text-sm'>1</div>
                    </td>
                    <td className='p-2'>
                      <div className='flex items-center'>
                        <img src={p1} alt='' className='h-8 md:h-10 lg:h-12' />
                        <p className='text-xs md:text-sm truncate dark:text-slate-400'>Lorem ipsum dolor, sit amet</p>
                      </div>
                    </td>
                    <td className='text-xs md:text-sm p-2 dark:text-slate-400'>20 Juni 2022</td>
                    <td className='p-2'>
                      <div className='bg-emerald-500 rounded text-white text-xs text-center font-medium p-1 dark:text-slate-400'>
                        Laptop
                      </div>
                    </td>
                    <td className='text-xs md:text-sm p-2 dark:text-slate-400'>
                      209 Comments
                    </td>
                    <td className='text-xs md:text-sm p-2 dark:text-slate-400'>
                      345 Like
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <div className='bg-sky-500 rounded text-white w-6 h-auto text-center text-xs md:text-sm'>2</div>
                    </td>
                    <td className='p-2'>
                      <div className='flex items-center'>
                        <img src={p2} alt='' className='h-8 md:h-10 lg:h-12' />
                        <p className='text-xs md:text-sm truncate dark:text-slate-400'>Lorem ipsum dolor, sit amet</p>
                      </div>
                    </td>
                    <td className='text-xs md:text-sm p-2 dark:text-slate-400'>28 Juni 2022</td>
                    <td className='p-2'>
                      <div className='bg-orange-500 rounded text-white text-xs text-center font-medium p-1 dark:text-slate-400'>
                        Smartphone
                      </div>
                    </td>
                    <td className='text-xs md:text-sm p-2 dark:text-slate-400'>
                      415 Comments
                    </td>
                    <td className='text-xs md:text-sm p-2 dark:text-slate-400'>
                      690 Like
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='w-full lg:w-1/4 flex flex-col md:flex-row lg:flex-col space-y-4 md:space-y-0 lg:space-y-6 space-x-0 md:space-x-4 lg:space-x-0'>
            {/* Recent Comment */}
            <div className='bg-white dark:bg-slate-900 rounded-lg p-2 md:p-4 flex flex-col space-y-4 lg:space-y-6 drop-shadow w-full'>
              <div className='flex items-center justify-between'>
                <p className='font-medium dark:text-white'>Recent Comment</p>
                <FaEllipsisV className='text-slate-800 dark:text-slate-300' />
              </div>
              <div className='flex flex-col space-y-4'>
                <div className='flex space-x-4'>
                  <img src={ava1} alt='' className='w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 shadow-sm rounded' />
                  <div className='flex flex-col'>
                    <p className='text-xs font-bold text-blue-500 dark:text-slate-300'>Peter</p>
                    <p className='text-xs tracking-tight dark:text-slate-300'>Lorem, ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <div className='flex space-x-4'>
                  <img src={ava2} alt='' className='w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 shadow-sm rounded' />
                  <div className='flex flex-col'>
                    <p className='text-xs font-bold text-blue-500 dark:text-slate-300'>Olivia</p>
                    <p className='text-xs tracking-tight dark:text-slate-300'>Lorem, ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <div className='flex space-x-4'>
                  <img src={ava3} alt='' className='w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 shadow-sm rounded' />
                  <div className='flex flex-col'>
                    <p className='text-xs font-bold text-blue-500 dark:text-slate-300'>Victor</p>
                    <p className='text-xs tracking-tight dark:text-slate-300'>Lorem, ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Chart 2 */}
            <Chart3 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
