import Image from "next/image";
import { getPost } from "@/sanity/sanity.query"


import { Inter } from "next/font/google"

const inter = Inter({weight:"800", subsets: ['latin']})

export default async function Products (){
    const post = await getPost();
    return(
        <div className={inter.className} id="products">
        <div className="mt-10 text-center">
            <div><p className="text-3xl text-center">PRODUCTS & SERVICES</p></div>
            <div className="flex flex-wrap justify-evenly mt-20">
            {post && post.map((data : any) => (
                <div 
                key={data.slug.current}
                className="mx-16">
                <a href={"/" + data.slug.current}>
                    <Image className="border border-gray-600 hover:border-4" src={data.imageUrl} alt="post" width={400} height={400}/>
                    <p>{data.title}</p>
                </a>
                </div>
            ))}
            
            </div>
        </div>
        </div>
    )
}

