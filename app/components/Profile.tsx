'use client'
import { Raleway } from 'next/font/google'
import { motion } from "framer-motion"

const raleway = Raleway({weight:"200", subsets: ['latin']})

export default function Profile() {
    return (
        <div className={raleway.className}>
        <div className="flex justify-evenly flex-wrap-reverse items-center">
            <div className="mt-32 md:mt-0 text-center items-center flex-row md:w-[30%] w-[80%] cursor-default select-none"><div className="border-4 border-gray-500 hover:border-white bg-white hover:bg-transparent duration-300"><p className="font-semibold">What Is MRYK ?</p><p><br/>MRYK is my nickname, there is no deep meaning behind it. Anyway Welcome to my website, take a look around and see what Ive got for you, there is some ongoing project and some finished one that you can look around. If you ever feel the need of my service just contact me</p></div></div>
            <div className="">
                <motion.img 
                    whileHover={{borderRadius: "100%" }}
                    className="border-t-4 border-t-slate-400 border-b-4 border-4 border-b-slate-400 object-cover w-64 h-60"  width={500} height={500} src="/profileimg.jpg" alt="profileimage"/>
            </div>
        </div>
        </div>
    )
}