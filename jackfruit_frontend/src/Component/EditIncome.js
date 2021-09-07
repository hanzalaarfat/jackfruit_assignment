import React from "react";
import Axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

import HeaderHome from "./HeaderHome";

function EditIncome() {
  const history = useHistory();

  const [basic, setBasic] = React.useState("");
  const [lta, setLta] = React.useState("");
  const [hra, setHra] = React.useState("");
  const [fa, setFa] = React.useState("");
  const userId = localStorage.getItem("userId");

  const PostData = async (e) => {
    e.preventDefault();

    try {
      await Axios.patch("http://localhost:4000/api/editincome", {
        basic,
        lta,
        hra,
        fa,
        userId,
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
      <HeaderHome />
      <form>
        <div className="form-group col-sm-6 mw-80 col-md-4 col-lg-4  mx-auto mt-5 ">
          <label className="form-label mt-4">Edit income</label>

          <div className="form-floating mb-3">
            <input
              type="number"
              onChange={(e) => setBasic(e.target.value)}
              value={basic}
              name="basic"
              className="form-control"
              id="floatingPassword"
            />
            <label for="floatingPassword"> Enter Basic Salary</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              onChange={(e) => setLta(e.target.value)}
              value={lta}
              name="lta"
              className="form-control"
            />
            <label for="floatingPassword"> Enter LTA</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setHra(e.target.value)}
              value={hra}
              name="hra"
            />
            <label for="floatingPassword">Enter HRA</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="Number"
              onChange={(e) => setFa(e.target.value)}
              value={fa}
              name="fa"
              className="form-control"
            />
            <label for="floatingPassword">Enter FA</label>
          </div>

          <button type="submit" class="btn btn-primary" onClick={PostData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditIncome;
