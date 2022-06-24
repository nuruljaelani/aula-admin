import Layout from '../Layout'

const Button = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col px-4 md:px-6 my-4 md:my-6 space-y-4 md:space-y-6">
          <div className='flex flex-col'>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-800 font-bold">Button</p>
            <p className='text-sm md:text-base text-sky-800'>Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Button
