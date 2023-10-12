import { motion } from "framer-motion";
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
                <motion.div 
                initial={{y : 100, opacity : 0}}
                whileInView={{y : 0, opacity : 1}}
                whileHover={{y : -10}}
                whileTap={{scale : 0.87}}
                transition={{type : "spring", stiffness : 100}}
                className="mx-16">
                <a href={"/" + data.slug.current}>
                    <Image className="border border-gray-600 hover:border-4" src={data.imageUrl} alt="post" width={400} height={400}/>
                    <p>{data.title}</p>
                </a>
                </motion.div>
            ))}
            
            </div>
        </div>
        </div>
    )
}

