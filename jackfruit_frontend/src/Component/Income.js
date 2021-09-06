import React from "react";
import Axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

import Header from "../Component/Header";

function Income() {
  const history = useHistory();

  const [basic, setBasic] = React.useState("");
  const [lta, setLta] = React.useState("");
  const [hra, setHra] = React.useState("");
  const [fa, setFa] = React.useState("");

  const PostData = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:4000/api/income", {
        basic,
        lta,
        hra,
        fa,
      })
        .then((res) => {
          console.log(res);

          console.log(res.data);
          window.alert("Successfully add icmome");
          // history.push("/login");
          // <Redirect to="/login" />;
        })
        .catch((err) => {
          window.alert("eerr", err);
        });
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <div>
      <Header />
      <form>
        <div className="form-group col-sm-6 mw-80 col-md-4 col-lg-4  mx-auto mt-5 ">
          <label className="form-label mt-4">Add income</label>

          <div className="form-floating mb-3">
            <input
              type="text"
              onChange={(e) => setBasic(e.target.value)}
              value={basic}
              name="basic"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword"> Enter Basic Salary</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              onChange={(e) => setLta(e.target.value)}
              value={lta}
              name="lta"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword"> Enter LTA</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              onChange={(e) => setHra(e.target.value)}
              value={hra}
              name="hra"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Enter HRA</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              onChange={(e) => setFa(e.target.value)}
              value={fa}
              name="fa"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Enter FA</label>
          </div>
          <button type="submit" class="btn btn-primary" onClick={PostData}>
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
}

export default Income;
