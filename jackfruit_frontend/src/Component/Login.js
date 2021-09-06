import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Axios from "axios";

function Login() {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const PostData = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:4000/api/login", {
        email,
        password,
      })
        .then((res) => {
          console.log(res);

          console.log(res.data);
          window.alert("Successfully login");
          history.push("/signup");
          // <Redirect to="/login" />;
        })
        .catch((err) => {
          window.alert("incorect password or email");
          history.push("/");
        });
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <div>
      <form>
        <div className="form-group col-sm-6 mw-80 col-md-4 col-lg-4  mx-auto mt-5 ">
          <label className="form-label mt-4">Login</label>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button type="submit" class="btn btn-primary" onClick={PostData}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
