"use client"
import { useEffect, useState } from "react"
import {Josefin_Sans } from 'next/font/google'

const JosSan = Josefin_Sans({weight: "700", subsets: ['latin']})

export default function Splash(){
    const [timer, setTimer] = useState(0);

    useEffect(()=>{
        if(timer < 15000){
            setTimer(timer+1)
        }else{
            return clearTimeout(timer);
        }
        
    })

    return(
        <div className={timer == 15000 ? "absolute top-[-200%] w-screen h-screen duration-1000 bg-gray-950" : "bg-gray-950 absolute top-0 w-screen h-screen z-50 duration-1000"}>
            <div className="flex w-screen h-screen justify-center">
            <div className="flex self-center text-2xl"><div className={JosSan.className}>{Math.round(timer/150)} %</div></div>
            </div>
        </div>
    )
}