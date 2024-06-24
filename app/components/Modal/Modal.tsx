import ModalBackdrop from "./ModalBackdrop";
import { motion } from 'framer-motion';

export default function Modal({handleModal, isOpen}:{handleModal: ()=>void, isOpen: boolean}) {
  const modalVariants = {
    hidden: {
        opacity: 0,
        y: '-100vh',
        transition: {
            type: 'spring',
            duration:0.5,
            damping:25,
            stiffness:500
        }
    },
    visible: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: '100vh',
        transition: {
          type: 'spring',
          duration:5,
          damping:0.5,
          stiffness:500,
      }
    }
}
  return (
    <ModalBackdrop handleModal={handleModal}>
      <motion.div 
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      onClick={(e:Event)=> e.stopPropagation()}
      className="p-5 flex flex-col justify-center rounded-2xl w-[700px] h-[500px] bg-gradient-radial from-orange-400 to-orange-500"
      >
      <span className='font-bold'>Modal Title</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla harum ipsa natus molestias ut, libero beatae ipsam sit, vel iste expedita nemo non, aperiam porro vitae eveniet possimus iusto.
            </p>
            <button onClick={()=>handleModal()} className="border bg-black w-max text-white p-3">CLOSE</button>
      </motion.div>      
    </ModalBackdrop>
  )
}