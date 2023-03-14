import './App.css';
import Landing from './Components/Landing/landing';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/home'
import Form from './Components/Creation/creationForm'
import {Route} from 'react-router-dom'
import PokeDetail from './Components/Detail/detail';


function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Landing />
      </Route>

      <Route path='/poke'>
        <Navbar />
      </Route>

      <Route exact path='/poke/home'>
        <Home/>
      </Route>

      <Route exact path='/poke/createnew'>
        <Form />
      </Route>

      <Route exact path='/poke/detail/:id'>
        <PokeDetail />
      </Route>
    </div>
  );
}

export default App;
