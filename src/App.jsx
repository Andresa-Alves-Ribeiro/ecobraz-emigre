import './App.css'
import About from './components/about'
import Banner from './components/banner'
import CookiesConsent from './components/cookies-consent'
import Counter from './components/counter'
import Footer from './components/footer'
import News from './components/news'
import RecicleList from './components/recicle-list'
import RoadInfo from './components/roadInfo'
import Testimonials from './components/testimonials'

function App() {
  return (
    <div>
      <Banner />

      <div className='counters-list'>
        <Counter number={300} title='de eletrônicos destinados' quantity='t' />
        <Counter number={28} title='coletas realizadas' quantity='k' />
        <Counter number={14} title='anos de experiência' />
        <Counter number={5} title='empresas atendidas' quantity='k' />
        <Counter number={8} title='pessoas físicas' quantity='k' />
      </div>

      <About />
      <RoadInfo />
      <RecicleList />
      <Testimonials />
      <News />

      <Footer />

      <CookiesConsent />
    </div>
  )
}

export default App