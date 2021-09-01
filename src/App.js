import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Data from './views/Data';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/Dashboard' component={Dashboard}></Route>
          <Route path='/Data' component={Data}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
