import { Inter } from "next/font/google"
import {AiFillGithub, AiOutlineLinkedin, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import { useState, useEffect } from "react"

const inter = Inter({weight:"800", subsets: ['latin']})

export default function Contact(){

    const [isDark, setDark] = useState(true);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if(prefersDark.matches){
            setDark(true);
        }else{
            setDark(false);
        }
    }, []);

    return(
        <div className={inter.className + " pt-14 text-center"} id="contact">
            <div className="mb-20">
                <p className="text-3xl">CONTACT</p>
            </div>
            <div className="flex justify-around gap-7">
                <a href="https://github.com/miurayuuki05" target="_blank"><AiFillGithub size={50}/></a>
                <a className={isDark ? "" : "hidden"} href="https://www.linkedin.com/in/faiz-islamic-qowy-7b634b1bb/" target="_blank"><AiOutlineLinkedin size={50}/></a>
                <a className={isDark ? "hidden" : ""} href="https://www.linkedin.com/in/faiz-islamic-qowy-7b634b1bb/" target="_blank"><AiFillLinkedin size={50}/></a>
                <a href="mailto:faizislamicqowy@gmail.com" target="_blank"><AiOutlineMail size={50}/></a>

            </div>
        </div>
    )
}