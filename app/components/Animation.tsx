import { Inter } from "next/font/google"
import { useRef } from "react"


const inter = Inter({weight:"700", subsets: ['latin']})


export default function Animation(){
    return(
        <div className={inter.className}>
        <div
        className="w-96 h-72 self-center flex justify-center">
            <div className="cube">
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
            </div>
        </div>
            <div className="text-3xl text-center">
                <p>FROM <span className="text-amber-500">IDEAS</span> TO <span className="text-slate-600">CODE</span>,<br/> WE LEAD</p>
            </div>
        </div>
    )
}