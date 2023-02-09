
import './App.css';
import { CounterApp } from './01-useState/';

function App() {
 
  const list = [1, 5, 20] 

  return (
    <>
       <CounterApp/>
    </>
    // <div className="App">
    //  {list.map((i) => (
    //     <CounterApp/>
    //   ))}
    // </div>
  );
}

export default App;
