"use client"
import { useParams } from "next/navigation"

export default function paramsUrl (){
    const slug = useParams();
    const result = slug.productSlug;
    return result;
}