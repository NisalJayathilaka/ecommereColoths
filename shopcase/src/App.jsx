import { useState } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { HeroSection } from './components/HeroSection/HeroSection'
import SectionHandling from './components/sections/SectionHandling/SectionHandling'
import { NewArrivals } from './components/sections/NewArrivals'
import { Category } from './components/sections/Categories/Category'
import content from './data/content.json'
function App() {
  return (
    <>
     <Navigation />
     <HeroSection/>
     <NewArrivals/>
     <Category title={content.categories[0].title} data={content.categories[0].data}/>
    </>
  )
}

export default App
