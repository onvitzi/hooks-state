
import './App.css';
import { CounterApp } from './components/01-useState/CounterApp';
import ListaTareas from './components/08-useReducer/ListaTareas';
import Hijo from './components/09-useContext/Hijo';
import { UserProvider } from './components/09-useContext/UserProvider';

function App() {


  return (
    <UserProvider>
      <h1>useState</h1>
       <CounterApp/>
       <hr />
       <h1>useContext</h1>
       <Hijo />
       <hr />
       <h1>useReducer</h1>
       <ListaTareas />
    </UserProvider>
  );
}

export default App;
