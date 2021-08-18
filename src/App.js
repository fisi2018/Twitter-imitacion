import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Register} from "./pages/Register.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
