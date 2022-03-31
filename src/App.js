import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Gallery from './page/Gallery';
import About from './page/About'
import Todos from './page/Todos'

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Gallery</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/todos">Todos</Link></li>
      </ul>
      <div id='page'>
        <Switch>
          <Route exact path="/" component={Gallery}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/todos" component={Todos}></Route>
      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
