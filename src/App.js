import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        {localStorage.getItem("logged")==="true" ? <Route exact path="/home" component={Home} /> : <><Route exact path="/" component={Register} /><Route exact path="/login" component={Login} /></>}
      </Switch>
    </Router>
  );
}

export default App;
