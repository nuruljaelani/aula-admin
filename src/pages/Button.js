import Layout from '../Layout2'
import { AiFillEdit, AiFillWarning } from 'react-icons/ai'
import { BiUser, BiInfoCircle, BiCheck, BiMoon } from 'react-icons/bi'

const Button = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col px-4 md:px-6 my-4 md:my-6 space-y-4 md:space-y-6 w-full">
          <div className="flex flex-col">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-800 font-bold">
              Button
            </p>
            <p className="text-sm md:text-base text-sky-800">
              Custom button styles for actions in forms, dialogs, and more with
              support for multiple sizes, states, and more.
            </p>
          </div>
          <div className="flex flex-col bg-white basis-1/2 p-4 rounded-lg drop-shadow-sm space-y-4">
            <p className="text-teal-800 font-bold text-lg">Basic Button</p>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <p className="font-medum text-lg">Default</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="bg-blue-600 text-white font-medium p-2 rounded"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 font-medium p-2 rounded"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="bg-sky-400 text-white font-medium p-2 rounded"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="bg-yellow-600 text-white font-medium p-2 rounded"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white font-medium p-2 rounded"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="bg-green-600 text-white font-medium p-2 rounded"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="bg-gray-800 text-white font-medium p-2 rounded"
                  >
                    Dark
                  </button>
                </div>
              </div>

              <hr />
              <div className="flex flex-col space-y-2">
                <p className="font-medum text-lg">Rounded</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="bg-blue-600 text-white font-medium p-2 rounded-2xl"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 font-medium p-2 rounded-2xl"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="bg-sky-400 text-white font-medium p-2 rounded-2xl"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="bg-yellow-600 text-white font-medium p-2 rounded-2xl"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white font-medium p-2 rounded-2xl"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="bg-green-600 text-white font-medium p-2 rounded-2xl"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="bg-gray-800 text-white font-medium p-2 rounded-2xl"
                  >
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white basis-1/2 p-4 rounded-lg drop-shadow-sm space-y-4">
            <p className="text-teal-800 font-bold text-lg">Button Outline</p>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500 font-medium p-2 rounded"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="hover:bg-gray-300 text-gray-700 border border-gray-500 hover:text-white font-medium p-2 rounded"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="hover:bg-sky-400 border border-sky-400 text-sky-500 hover:text-white font-medium p-2 rounded"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="hover:bg-yellow-600 hover:text-white border border-yellow-500 text-yellow-500 font-medium p-2 rounded"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="hover:bg-red-600 hover:text-white border border-red-500 text-red-500 font-medium p-2 rounded"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="hover:bg-green-600 hover:text-white border border-green-500 text-green-500 font-medium p-2 rounded"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="hover:bg-gray-800 hover:text-white border border-gray-800 text-gray-500 font-medium p-2 rounded"
                  >
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white basis-1/2 p-4 rounded-lg drop-shadow-sm space-y-4">
            <p className="text-teal-800 font-bold text-lg">Icon</p>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="bg-blue-600 text-white font-medium p-2 rounded flex items-center gap-1"
                  >
                    <AiFillEdit />
                    Primary
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 font-medium p-2 rounded flex items-center gap-1"
                  >
                    <BiUser />
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="bg-sky-400 text-white font-medium p-2 rounded flex items-center gap-1"
                  >
                    <BiInfoCircle />
                    Info
                  </button>
                  <button
                    type="button"
                    className="bg-yellow-600 text-white font-medium p-2 rounded flex items-center gap-1"
                  >
                    <AiFillWarning />
                    Warning
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white font-medium p-2 rounded flex items-center gap-1"
                  >
                    <BiInfoCircle />
                    Danger
                  </button>
                  <button
                    type="button"
                    className="bg-green-600 text-white font-medium p-2 rounded flex items-center gap-1"
                  >
                    <BiCheck />
                    Success
                  </button>
                  <button
                    type="button"
                    className="bg-gray-800 text-white font-medium p-2 rounded flex items-center gap-1"
                  >
                    <BiMoon />
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Button
