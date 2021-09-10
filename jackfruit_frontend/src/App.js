import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import PrivateRoute from "./Component/PrivateRoute";
import Taxincom from "./Component/Taxincome";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Invest from "./Component/Invest";
import Header from "./Component/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          {/* <Route path="/income" exact component={Income} /> */}

          <PrivateRoute path="/home" component={Invest} />
          <PrivateRoute path="/taxincome" component={Taxincom} />

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
