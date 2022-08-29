
import { useState } from 'react'
import { ModalBasic, ModalConfirm, ModalExtraLarge, ModalLarge, ModalSmall } from '../components/Modal'
import Layout from '../Layout2'

const Modal = () => {
  const [modalBasic, setModalBasic] = useState(false)
  const [modalConfirm, setModalConfirm] = useState(false)
  const [modalSmall, setModalSmall] = useState(false)
  const [modalLarge, setModalLarge] = useState(false)
  const [modalExtraLarge, setModalExtraLarge] = useState(false)

  return (
    <>
      <Layout>
        <div className="flex flex-col px-4 md:px-6 my-4 md:my-6 space-y-4 md:space-y-6 min-h-screen">
          <div className="flex flex-col">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-teal-800 dark:text-teal-300 font-bold">
              Modal
            </p>
            <p className="text-sm md:text-base text-sky-800 dark:text-sky-300">
              Use Bootstrap’s JavaScript modal plugin to add dialogs to your
              site for lightboxes, user notifications, or completely custom
              content
            </p>
          </div>

          <div className="flex gap-6">
            {/* Modal Basic */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2 w-1/2">
              <p className="text-teal-800 dark:text-teal-300 font-bold text-base md:text-lg">
                Modal Basic
              </p>
              <button
                type="button"
                className="bg-white dark:bg-transparent border border-indigo-500 dark:border-indigo-300 dark:text-indigo-300 rounded-md text-indigo-700 py-2 w-fit px-4"
                onClick={() => setModalBasic(true)}
              >
                Launch
              </button>
            </div>
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2 w-1/2">
              <p className="text-teal-800 dark:text-teal-300 font-bold text-base md:text-lg">
                Modal Confirm
              </p>
              <button
                type="button"
                className="bg-emerald-200 rounded-md text-emerald-800 py-2 w-fit px-4" onClick={() => setModalConfirm(true)}
              >
                Confirm
              </button>
            </div>
          </div>
          <div className="flex gap-6">
            {/* Modal Size */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2 w-1/2">
              <p className="text-teal-800 dark:text-teal-300 font-bold text-base md:text-lg">
                Modal Sizes
              </p>
              <div className='flex gap-2'>
                <button
                  type="button"
                  className="border border-indigo-500 dark:border-green-300 dark:text-green-300 rounded-md text-gray-700 p-2 w-fit"
                  onClick={() => setModalSmall(true)}
                >
                  Small
                </button>
                <button
                  type="button"
                  className="border border-emerald-500 dark:border-rose-300 dark:text-rose-300 rounded-md text-gray-700 p-2 w-fit"
                  onClick={() => setModalBasic(true)}
                >
                  Default
                </button>
                <button
                  type="button"
                  className="border border-yellow-500 dark:border-teal-300 dark:text-teal-300 rounded-md text-gray-700 p-2 w-fit"
                  onClick={() => setModalLarge(true)}
                >
                  Large
                </button>
                <button
                  type="button"
                  className="border border-stone-500 dark:border-neutral-300 dark:text-neutral-300 rounded-md text-gray-700 p-2 w-fit"
                  onClick={() => setModalExtraLarge(true)}
                >
                  Extra Large
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Basic */}
        <ModalBasic modalBasic={modalBasic} setModalBasic={setModalBasic} />

        {/* Modal Confirm */}
        <ModalConfirm modalConfirm={modalConfirm} setModalConfirm={setModalConfirm} />

        {/* Modal SMall */}
        <ModalSmall modalSmall={modalSmall} setModalSmall={setModalSmall} />

        {/* Modal Large */}
        <ModalLarge modalLarge={modalLarge} setModalLarge={setModalLarge} />

        {/* Modal Extra Large */}
        <ModalExtraLarge modalExtraLarge={modalExtraLarge} setModalExtraLarge={setModalExtraLarge} />
      </Layout>
    </>
  )
}

export default Modal
