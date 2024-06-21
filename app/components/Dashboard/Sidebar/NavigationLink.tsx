import { motion, useAnimationControls } from 'framer-motion';

interface Props {
    children: React.ReactNode
    name: string
    navTextControls: any
}


const navLinkVariant = {
    close: {
        opacity: 0,
        y: 20,
        transition:{
            staggerChildren: 0.1
        }
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const NavigationLink = ({ children, name,  navTextControls }: Props) => {
    // const navTextControls = useAnimationControls()

    return (
        <a
            href="#"
            className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100 -z-10"
        >
            {children}
            <motion.span
                initial="close"
                animate={navTextControls}
                variants={navLinkVariant}
                className="flex text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide "
            >
                {
                    name.split("").map((char, i) => (
                        <motion.p
                            key={i}
                            className="">
                            {char}
                        </motion.p>)

                    )}
            </motion.span>
        </a>
    )
}

export default NavigationLink
