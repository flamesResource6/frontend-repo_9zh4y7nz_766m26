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
  const scrollToStory = () => storyRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-[#f6efe7]">
      <Hero onDiscover={scrollToStory} />
      <div ref={storyRef}>
        <BrandFilm />
        <VisualGrid />
        <FoundersVision />
        <Ingredients />
        <Packaging />
        <Moodboard />
        <Journal />
        <Community />
        <SocialFooter />
      </div>
    </div>
  )
}

export default App
