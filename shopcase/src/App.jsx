import { HeroSection } from "./components/HeroSection/HeroSection";
import { NewArrivals } from "./components/sections/NewArrivals";
import { Category } from "./components/sections/Categories/Category";
import content from "./data/content.json";
import { Footer } from "./components/Footer/Footer";
function App() {
  console.log();

  return (
    <>
      <HeroSection />
      <NewArrivals />
      {content.pages.shop.sections.length > 0 &&
        content.pages.shop.sections.map((item,index) => (
          <Category key={index} title={item.title} data={item.data} />
        ))}
      <Footer content={content.footer} />
    </>
  );
}

export default App;
