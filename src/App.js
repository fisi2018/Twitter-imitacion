import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        {localStorage.getItem("logged")==="true" ? <Route exact path="/home" component={Home} /> : <Route exact path="/login" component={Login} />}
      </Switch>
    </Router>
  );
}

export default App;
