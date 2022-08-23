import Layout from '../Layout2'
import image1 from '../assets/products/Laptop_Acer_Swift__1_.jpg'

const Card = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col px-4 md:px-6 my-4 md:my-6 space-y-4 md:space-y-6 w-full">
          <div className="flex flex-col">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-800 font-bold">
              Card
            </p>
            <p className="text-sm md:text-base text-sky-800">
              Bootstrap’s cards provide a flexible and extensible content
              container with multiple variants and options.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-6 w-full h-fit">
              <div className="flex flex-col bg-white rounded-lg shadow-md gap-2 h-fit w-1/2">
                <p className="font-medium text-gray-600 p-4">Card Title</p>
                <hr />
                <div className="text-gray-500 leading-5 p-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi debitis, quo ratione earum porro recusandae adipisci vel
                  dolorum quas dolorem.
                </div>
                <hr />
                <div className="font-medium text-gray-600 p-4">Footer Card</div>
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-md gap-2 h-fit w-1/2">
                <p className="font-medium text-gray-600 p-4">
                  Card Action Button
                </p>
                <hr />
                <div className="text-gray-500 leading-5 p-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi debitis, quo ratione earum porro recusandae adipisci vel
                  dolorum quas dolorem.
                </div>
                <hr />
                <div className="font-medium text-gray-600 p-4 flex justify-end">
                  <button
                    type="button"
                    className="bg-blue-500 rounded text-white text-sm py-2 px-4 drop-shadow shadow"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col bg-white rounded-lg shadow-md gap-2 h-fit w-1/2">
                <img src={image1} className="p-2" />
                <hr />
                <div className="text-gray-500 leading-5 p-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi debitis, quo ratione earum porro recusandae adipisci vel
                  dolorum quas dolorem.
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-md gap-2 h-fit w-1/2">
                <p className="font-medium text-gray-600 p-4">
                  Card Form
                </p>
                <hr />
                <div className="text-gray-500 leading-5 p-4 flex-col space-y-2">
                  <div className='flex flex-col'>
                    <label className='text-sm'>First Name</label>
                    <input type='text' className='bg-white rounded-md text-sm p-2 focus:outline-none border' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm'>Last Name</label>
                    <input type='text' className='bg-white rounded-md text-sm p-2 focus:outline-none border' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm'>Email</label>
                    <input type='text' className='bg-white rounded-md text-sm p-2 focus:outline-none border' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm'>Address</label>
                    <textarea className='bg-white rounded-md text-sm p-2 focus:outline-none border'></textarea>
                  </div>
                </div>
                <hr />
                <div className="font-medium text-gray-600 p-4 flex gap-2 justify-end">
                  <button
                    type="button"
                    className="bg-blue-500 rounded text-white text-sm py-2 px-4 drop-shadow shadow"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-200 rounded text-gray-700 text-sm py-2 px-4 drop-shadow shadow"
                  >
                    Cancel
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

export default Card
