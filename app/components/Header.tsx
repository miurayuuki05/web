import logoImg from "./public/logo.png"
import logoImgWhite from "./public/logoWhite.png"
import Image from "next/image"
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google'
import { useEffect, useState } from "react"

const raleway = Raleway({weight:"800", subsets: ['latin']})

export default function Header(){

    const [isDark, setDark] = useState(true);
    const [stat, setStat] = useState(false);
    
    function menuButton(){
        if(stat == false){
            setStat(true);
            console.log(stat);
        }else{
            setStat(false);
        }
    }

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if(prefersDark.matches){
            setDark(true);
        }else{
            setDark(false);
        }
    }, []);


    return(
        <div className={"fixed w-screen pb-7 mb-7 " + raleway.className}>
            <div className="w-[100%] flex justify-between ml-10 mr-0">
                <a href="#"><Image className="mt-7 select-none " src={isDark ? logoImgWhite : logoImg} alt="logo" height={200} width={200}/></a>
                <div className={stat ? "buttonOpen" : ""} onClick={() => menuButton()}><div className="buttonMenu mt-12"/></div>
                <ul className={stat ? "duration-200 md:w-[35%] md:flex md:justify-between absolute md:right-0 md:top-0 top-[200%] right-[30%] mr-5 flex-row md:mt-10 md:bg-transparent bg-slate-700 bg-opacity-50 py-5 rounded-md" : "duration-200 md:w-[35%] md:flex md:justify-between absolute md:right-0 md:top-0 top-[-200%] right-[30%] mr-5 flex-row md:mt-10 md:bg-transparent bg-slate-700 bg-opacity-50 py-5 rounded-md"}>
                    <div className="OnavList flex" onClick={()=> menuButton()}>
                        <div className="beforeNav mx-4">→</div>
                        <motion.li whileTap={{scale : 0.8}} 
                            whileHover={{scale : 1.43}}
                        className="text-lg navlist"><a href="#">HOME</a></motion.li>
                        <div className="afterNav mx-4 select none">←</div>
                    </div>
                    
                    <div className="OnavList flex" onClick={()=> menuButton()}>
                        <div className="beforeNav mx-4">→</div>
                        <motion.li whileTap={{scale : 0.8}} 
                            whileHover={{scale : 1.43}}
                        className="text-lg navlist"><a href="#project">PROJECT </a></motion.li>
                        <div className="afterNav mx-4 select none">←</div>
                    </div>

                    <div className="OnavList flex" onClick={()=> menuButton()}>
                        <div className="beforeNav mx-4">→</div>
                        <motion.li whileTap={{scale : 0.8}} 
                            whileHover={{scale : 1.43}}
                        className="text-lg navlist"><a href="#contact">CONTACT</a></motion.li>
                        <div className="afterNav mx-4 select none">←</div>
                    </div>
                    
                    
                    {/* <motion.li whileTap={{scale : 0.8}} 
                        whileHover={{scale : 1.3}}
                    className="text-lg hover:after:content-['←'] hover:before:content-['→']"><a href="/about">ABOUT</a></motion.li> */}

                </ul>
            </div>
        </div>
    )
}