import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Income from "./Component/Income";
import Invest from "./Component/Invest";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/income" exact component={Income} />
          <Route path="/invest" exact component={Invest} />
          {/* <PrivateRoute path="/home" component={Home} /> */}

          {/* <PrivateRoute path="/profile" component={Profile} /> */}

          {/* <header className="App-header">
            <Route path="/login" component={Login} />
            <Route path="/signup" exact component={Signup} />
          </header> */}

          {/* <Route path="/logout" component={Logout} /> */}

          {/* <Route path="/signup" component={Signupuser} /> */}
          {/* <Route path="/form" component={Forms} />

          <Route path="/loginpage" component={LoginPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
