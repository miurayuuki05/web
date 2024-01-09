import Header from './components/Header'
import Products from './components/Products'
import Spacer from './components/Spacer'
import Profile from './components/Profile'
import Animation from './components/Animation'
import AnimationPyramid from './components/AnimationPyramid'
import Particlebg from './components/Particlebg'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Svgspacer from './components/Svgspacer'

export default function Home() {
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
      <Project/>
      <Spacer/>
      <Contact/>
      <Svgspacer/>
    </main>
  )
}
