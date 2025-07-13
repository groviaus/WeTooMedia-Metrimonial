import Hero from './hero'
import Header from './header'
import Stats from './stats'
import Footer from './footer'
import Features from './features'
import FAQ from './faq'

const page = () => {
  return (
    <div >
        <Header />
        <Hero />
        <Stats />
        <Features />
        <FAQ />
        <Footer />
    </div>
  )
}

export default page