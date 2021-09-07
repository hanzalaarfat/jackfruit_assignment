import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import Header from "../Component/Header";

function Signup() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [basic, setBasic] = React.useState("");
  const [lta, setLta] = React.useState("");
  const [hra, setHra] = React.useState("");
  const [fa, setFa] = React.useState("");

  const PostData = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:4000/api/signup", {
        name,
        email,
        password,
        basic,
        lta,
        hra,
        fa,
      })
        .then((res) => {
          console.log(res);

          console.log(res.data);
          window.alert("Successfully signup");
          setShow(false);
          history.push("/login");
          // <Redirect to="/login" />;
        })
        .catch((err) => {
          window.alert("Email id is already Exist");
        });
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <div className="login">
      <Header />
      <form>
        <div className="  form-group col-sm-6 mw-80 col-md-4 col-lg-4  mx-auto mt-5 ">
          <label className="form-label mt-4">SignUp</label>

          <div className="form-floating mb-3">
            <input
              type="tex"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              id="floatingInput"
              placeholder="Name"
            />
            <label for="floatingInput">Full Name</label>
          </div>

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
              type="number"
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
              type="number"
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
              type="number"
              onChange={(e) => setFa(e.target.value)}
              value={fa}
              name="fa"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Enter FA</label>
          </div>
          {/* ///////////////////////////////////// */}

          <Button variant="primary" onClick={handleShow}>
            Sign Up
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are Youe Sure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-floating mb-3">
                <input
                  type="tex"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  id="floatingInput"
                  placeholder="Name"
                />
                <label for="floatingInput">Full Name</label>
              </div>

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
                  type="number"
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
                  type="number"
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
                  type="number"
                  onChange={(e) => setFa(e.target.value)}
                  value={fa}
                  name="fa"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Enter FA</label>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={PostData}>
                submit Data
              </Button>
            </Modal.Footer>
          </Modal>

          {/* ///////////////////////////////////// */}

          {/* <button type="submit" class="btn btn-primary" onClick={PostData}>
            Sign up
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default Signup;
