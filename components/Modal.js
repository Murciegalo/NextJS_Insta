import React, { Fragment } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modal'
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
  const [open, setOpen] = useRecoilState(modalState)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex min-h-[800px] items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterForm="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opaticy-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* Trick browser into center modal */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterForm="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opaticy-0"
          >
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8">
              <div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    // disabled={!selectedFile}
                    className="inline-flex w-full justify-center"
                    // onClick={uploadPost}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Modal
