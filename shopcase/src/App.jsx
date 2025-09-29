import { useState } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { HeroSection } from './components/HeroSection/HeroSection'
import SectionHandling from './components/sections/SectionHandling/SectionHandling'
import { NewArrivals } from './components/sections/NewArrivals'
import { Category } from './components/sections/Categories/Category'
import content from './data/content.json'
import { Footer } from './components/Footer/Footer'
function App() {
  return (
    <>
     <Navigation />
     <HeroSection/>
     <NewArrivals/>
     {content.categories.length > 0 && content?.categories?.map((item) => (
      <Category key={item.id} title={item.title} data={item.data}/>
     ))}
     <Footer content={content.footer}/>
    </>
  )
}

export default App
