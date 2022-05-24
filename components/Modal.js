import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modal'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'

function Modal() {
  const [open, setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef(null)
  const captionRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const uploadPost = async () => {
    if (loading) return
    setLoading(true)
    // Create Post & Save to Posts Collection in FB

    // Get newly created PostID

    // Upload Image to firebase storage with PostID

    // Get downloadURL from FB and update post with Img
  }
  const addImgToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

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
            <div className="sn:align-middle inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    className="w-full cursor-pointer object-contain"
                    onClick={() => setSelectedFile(null)}
                    alt=""
                  />
                ) : (
                  <div
                    className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-100"
                    onClick={() => filePickerRef.current.click()}
                  >
                    <CameraIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Upload a photo
                    </Dialog.Title>
                  </div>
                  <div>
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImgToPost}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      className="w-full border-none text-center focus:ring-0"
                      type="text"
                      ref={captionRef}
                      placeholder="Please enter a caption..."
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    disabled={!selectedFile}
                    className="hover:disabled-bg-gray-300 inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 sm:text-sm"
                    // onClick={uploadPost}
                  >
                    Upload Post
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
