"use client"
import { useState, useEffect } from "react";

export default function Svgspacer() {
    const [isDark, setDark] = useState(true);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if(prefersDark.matches){
            setDark(true);
        }else{
            setDark(false);
        }
    }, []);
    
    return (
        <div className={ isDark ? "svg-spacer layer1" : "svg-spacer layer2"}></div>
    );
    }