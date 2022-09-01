
import './App.css'
import Counter from './components/pages/Counter/Counter';
import CounterProvider from './contexts/Counter-context';


function App() {
  return (
    <div className="App">

      <CounterProvider>
        <Counter/>
      </CounterProvider>

    </div>
  )
}

export default App
