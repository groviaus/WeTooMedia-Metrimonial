import Hero from './hero'
import Header from './header'
import Stats from './stats'
import Footer from './footer'
import Features from './features'

const page = () => {
  return (
    <div >
        <Header />
        <Hero />
        <Stats />
        <Features />
        <Footer />
    </div>
  )
}

export default page