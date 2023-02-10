
import './App.css';
import { CounterApp } from './hooks/01-useState/CounterApp';
import ListaTareas from './hooks/07-useReducer/ListaTareas';
import Hijo from './hooks/08-useContext/Hijo';
import { UserProvider } from './hooks/08-useContext/UserProvider';
import {Counter} from './redux/counter/Counter'

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
       <hr/>
       <h1>Redux</h1>
       <Counter />

    </UserProvider>
  );
}

export default App;
