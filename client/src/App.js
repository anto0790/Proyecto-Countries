import './App.css';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import { Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function App() {

  const location= useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar/>}
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route path='/create' component={Form} />
    </div>
  );
}

export default App;
