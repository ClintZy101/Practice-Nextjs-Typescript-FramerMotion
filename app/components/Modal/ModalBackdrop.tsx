import React from 'react'
import { motion } from 'framer-motion';


type Props = {
    children: React.ReactNode
    handleModal: ()=> void
}

export default function ModalBackdrop({ children,handleModal }: Props) {
    
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={()=>handleModal()}
            className=' flex items-center justify-center bg-[#000000e1]  bg-opacity-5 p-3 absolute h-full w-full'>
            {children}
        </motion.div>
    )
}




