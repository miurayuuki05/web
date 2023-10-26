"use client"
import { getPostBySlug } from '@/sanity/sanity.query'
import { Inter } from 'next/font/google';
import { useParams } from 'next/navigation';
import Cubeanimation from '../components/Cubeanimation';

const inter = Inter({weight:"800", subsets: ['latin']})

export default async function Productsdata (){
    const result = useParams();
    const slug = result.productSlug;;
    const post = await getPostBySlug(slug);
    return(
        <div className={inter.className + " mt-44"}>
            {post && post.map((data : any) => (
                <div className='text-center' key={post.title}>
                    <p className='text-3xl mb-20 text-yellow-100'>{data.title}</p>
                    <div className='border-4 border-gray-300 rounded-xl flex-wrap flex justify-center md:mx-28 mx-5'>
                        <div className='md:w-1/2 md:mt-6'><img className='md:rounded-xl rounded-md' src={data.imageUrl} /></div>
                        <div className='border-4 rounded-xl'><p className='m-5 sm:text-sm text-base'>{data.body}</p></div>
                        <Cubeanimation/>
                    </div>
                </div>
            ))}

        </div>
    )
}