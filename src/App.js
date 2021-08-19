import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Register} from "./pages/Register.js";
import {Login} from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
