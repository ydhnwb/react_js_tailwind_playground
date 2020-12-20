import logo from './logo.svg';
import './assets/output.css'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './page/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
