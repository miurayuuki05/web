import Header from './components/Header'
import Products from './components/Products'
import Spacer from './components/Spacer'
import Profile from './components/Profile'
import Animation from './components/Animation'
import AnimationPyramid from './components/AnimationPyramid'
import Particlebg from './components/Particlebg'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Svgspacer from './components/Svgspacer'
import { getProject } from '@/sanity/sanity.query'
import { Inter } from "next/font/google";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const inter = Inter({weight:"800", subsets: ['latin']})

type ProjectProps  = {
  project: any;
}

export const getServerSideProps = (async () => {
  const project = await getProject();
  return {
      props: {
          project
      }
  }
}) satisfies GetServerSideProps<{ project: ProjectProps }>

export default function Home( { project }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between z-20">
      <Header/>
      <Spacer/>
      <Profile/>
      <Spacer/>
      <Animation/>
      <Spacer/>
      <Products/>
      <Spacer/>
      <Spacer/>
      <AnimationPyramid/>
      <Spacer/>
      <Skills/>
      <Spacer/>
      <div className={inter.className + " text-center pt-20"} id="project">
            <div className="mb-20">
                <p className="text-3xl">PROJECTS</p>
            </div>
            <div className="flex flex-wrap justify-evenly gap-20">
                {project && project.map((data : any) => (
                    <div key={project.title}>
                        <a href={data.link} target="_blank"><img className="md:w-96 md:h-96 w-64 h-64 object-cover hover:border-4 duration-200 mx-10" src={data.imageUrl} alt="project"/></a>
                        <p>{data.title}</p>
                    </div>

                ))}
            </div>
        </div>
      <Spacer/>
      <Contact/>
      <Svgspacer/>
    </main>
  )
}
