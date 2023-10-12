import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import { useRef } from "react"


const inter = Inter({weight:"700", subsets: ['latin']})


export default function Animation(){
    const cubeConstraints = useRef(null);
    return(
        <div className={inter.className} ref={cubeConstraints}>
        <motion.div 
        drag
        dragConstraints={cubeConstraints}
        whileDrag={{scale : 1.5}}
        className="w-96 h-72 self-center flex justify-center">
            <div className="cube">
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
            </div>
        </motion.div>
            <div className="text-3xl text-center">
                <p>FROM <span className="text-amber-500">IDEAS</span> TO <span className="text-slate-600">CODE</span>,<br/> WE LEAD</p>
            </div>
        </div>
    )
}