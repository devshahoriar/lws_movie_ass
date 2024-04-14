'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ children }) {
  const router = useRouter()
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
      dialogRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: 'forwards',
      })
    }
  }, [])

  function onDismiss() {
    dialogRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      fill: 'forwards',
    })
    setTimeout(() => {
      router.back()
    }, 200)
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className=" w-[1200px] p-10 relative modal backdrop:backdrop-blur-sm"
      onClose={onDismiss}
    >
      {children}
      <button
        onClick={onDismiss}
        className="fixed bg-primary p-2 rounded-full top-2 right-2 md:top-5 md:right-10 hover:scale-105 active:scale-100 transition-transform duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </dialog>,

    document.getElementById('model_div')
  )
}
