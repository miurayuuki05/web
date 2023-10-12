import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import { useRef } from "react"


const inter = Inter({weight:"700", subsets: ['latin']})


export default function AnimationPyramid(){
    const cubeConstraints = useRef(null);
    return(
        <div className={inter.className} ref={cubeConstraints}>
            <motion.div 
            drag
            dragConstraints={cubeConstraints}
            whileDrag={{scale : 1.5}}
            className="w-96 h-64 self-center flex justify-center">
                <div className="pyramid">
                    <div className="pyramid-side"></div>
                    <div className="pyramid-side"></div>
                    <div className="pyramid-side"></div>
                    <div className="pyramid-side"></div>
                    <div className="pyramid-side"></div>
                </div>
            </motion.div>
            <div className="text-3xl text-center">
                <p>EXPAND YOUR <span className="text-blue-400">HORIZON</span></p>
                <p>EXPAND YOUR <span className="text-yellow-200">BUSINESS</span></p>
            </div>
        </div>
    )
}