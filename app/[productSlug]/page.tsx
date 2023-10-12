"use client"
import Productsdata from "./Productsdata"
import Header from "../components/HeaderProduct"
import Spacer from "../components/Spacer"
import Contact from "../components/Contact"
import Svgspacer from "../components/Svgspacer"


export default async function Products (){
    return(
        <div className="flex flex-col min-h-screen items-center justify-between z-20">
            <Header/>
            <Productsdata/>
            <Spacer/>
            <Spacer/>
            <Contact/>
            <Svgspacer/>
        </div>
    )
}