import './App.css'
import About from './components/about'
import Banner from './components/banner'
import Counter from './components/counter'
import RecicleList from './components/recicle-list'
import RoadInfo from './components/roadInfo'

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
    </div>
  )
}

export default App