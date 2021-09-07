import React, { useState } from "react";
import Axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import HeaderHome from "./HeaderHome";

function Invest() {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [invest, setInvest] = React.useState("");
  const [rent, setRent] = React.useState("");
  const [med, setMed] = React.useState("");
  const [citytype, setCitytype] = React.useState("");

  const PostData = async (e) => {
    e.preventDefault();
    console.log(invest, rent, med, citytype);
    const userId = localStorage.getItem("userId");

    try {
      await Axios.post("http://localhost:4000/api/addinvest", {
        invest,
        rent,
        med,
        citytype,
        userId,
      })
        .then((res) => {
          window.alert("Successfully add invest");
          history.push("/home");
          setInvest("");
          setRent("");
          setMed("");
          setCitytype("");
          // <Redirect to="/login" />;
          setShow(false);
        })
        .catch((err) => {
          window.alert("eerr", err);
        });
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <div className="login">
      <HeaderHome />
      <form>
        <div className="form-group col-sm-6 mw-80 col-md-4 col-lg-4  mx-auto mt-5 ">
          <label className="form-label mt-4">Add invest</label>

          <div className="form-floating mb-3">
            <input
              type="number"
              onChange={(e) => setInvest(e.target.value)}
              value={invest}
              name="basic"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">
              Enter Investments under section 80c
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              onChange={(e) => setRent(e.target.value)}
              value={rent}
              name="lta"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword"> Enter Actual Rent</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              onChange={(e) => setMed(e.target.value)}
              value={med}
              name="fa"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Enter FA</label>
          </div>

          <div className="form-floating mb-3">
            <select
              className="form-select"
              onChange={(e) => setCitytype(e.target.value)}
              value={citytype}
              aria-label="Default select example"
            >
              <option selected>Select this one Metro or Non metro city</option>
              <option value="metro">Metro City</option>
              <option value="non_metro">Non Metro City</option>
            </select>
          </div>
          {/* <button type="submit" class="btn btn-primary" onClick={PostData}>
            Add Income
          </button> */}

          <Button variant="primary" onClick={handleShow}>
            Add Invest
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are Youe Sure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  onChange={(e) => setInvest(e.target.value)}
                  value={invest}
                  name="basic"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">
                  Enter Investments under section 80c
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  onChange={(e) => setRent(e.target.value)}
                  value={rent}
                  name="lta"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword"> Enter Actual Rent</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  onChange={(e) => setMed(e.target.value)}
                  value={med}
                  name="fa"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Enter FA</label>
              </div>

              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  onChange={(e) => setCitytype(e.target.value)}
                  value={citytype}
                  aria-label="Default select example"
                >
                  <option selected>
                    Select this one Metro or Non metro city
                  </option>
                  <option value="metro">Metro City</option>
                  <option value="non_metro">Non Metro City</option>
                </select>
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
        </div>
      </form>
    </div>
  );
}

export default Invest;
