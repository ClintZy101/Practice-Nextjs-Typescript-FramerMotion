'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import Modal from '../components/Modal/Modal';
import ModalBackdrop from '../components/Modal/ModalBackdrop';


export default function Profile() {
  const router = useRouter()
  console.log(router)
  const [isOpen, setIsOpen] = useState(false)
  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    console.log(isOpen)
  },[isOpen])
  return (
    <div className='flex flex-col grid-cols-1  items-center'>Profile page:
      <Link href={{
        pathname: "profile/1",
        query: {
          userName: 'Clint Tay',
          userID: 14,
          person: JSON.stringify({
            age: 31
          })
        }
      }}>Profile 1</Link>
      <button onClick={() => router.push('/profile/2')}>Profile 2</button>
      <button onClick={() => router.push('/profile/3')}>Profile 3</button>
      <a href="https:/clinttay.com">Clint Tay's website</a>

      <motion.button
        whileTap={{ scale: 0.8 }}
        className='my-5 border p-2  bg-gradient-to-tr from-blue-300 to-blue-900 text-white font-bold w-[200px] rounded-full hover:scale-105 ease-in-out transition transform duration-200'
        onClick={() => { handleModal() }}>
          Open Modal
      </motion.button>

      <AnimatePresence
      >
        {isOpen && <Modal handleModal={handleModal} isOpen={isOpen} />}
         
      </AnimatePresence>

    </div>
  )
}

