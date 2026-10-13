import Greeting from './Components/Greetngs';
import './App.css'
import Counter from './Components/Counter';

function App() {
  

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Welcome to My App</h1>
          <Greeting name="KOUASSI" surnom="Richard" profession="ingénieur" Experience={2} />
          <Counter />
        </div>
      </section>

    </>
  )
}

export default App
