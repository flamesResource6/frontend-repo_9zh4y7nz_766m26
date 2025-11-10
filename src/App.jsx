import { useRef } from 'react'
import Hero from './components/Hero'
import BrandFilm from './components/BrandFilm'
import VisualGrid from './components/VisualGrid'
import FoundersVision from './components/FoundersVision'
import Ingredients from './components/Ingredients'
import Packaging from './components/Packaging'
import Moodboard from './components/Moodboard'
import Journal from './components/Journal'
import Community from './components/Community'
import SocialFooter from './components/SocialFooter'

function App() {
  const storyRef = useRef(null)
  const scrollToStory = () => storyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6efe7] via-[#f3e8da] to-[#efe0cf] text-[#2b2a28]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-white/90 text-[#2b2a28] px-3 py-2 rounded">Skip to content</a>
      <Hero onDiscover={scrollToStory} />
      <main id="main" ref={storyRef} className="">
        <BrandFilm />
        <VisualGrid />
        <FoundersVision />
        <Ingredients />
        <Packaging />
        <Moodboard />
        <Journal />
        <Community />
        <SocialFooter />
      </main>
    </div>
  )
}

export default App
