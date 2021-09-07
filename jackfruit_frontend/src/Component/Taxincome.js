import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import HeaderHome from "./HeaderHome";
import { ListGroup, Card, ListGroupItem } from "react-bootstrap";

function Taxincome() {
  const history = useHistory();
  let [userdata, setUserdata] = useState();
  const [name, setName] = useState();
  const [taxin, setTaxin] = useState();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const PostData = async (e) => {
      console.log(userId);
      try {
        const res = await axios.get(
          `http://localhost:4000/api/apphra/${userId}`
        );
        // .then(async (res) => {
        if (res) {
          console.log(res.data.message);
          let data = await res.data.message;
          // console.log(data);
          await setName(res.data.message.name);
          await setTaxin(data.Taxable_Income);
          setUserdata(res.data.message);
          console.log(userdata);
          console.log(userdata, taxin, name);
        }
      } catch (err) {
        window.alert(err);
      }
    };
    PostData();
  }, []);

  useEffect(() => {
    console.log(userdata); //check the result here
  }, [userdata]);

  return (
    <div className="login ">
      <HeaderHome />
      {/* <h> {userdata.name}</h> */}

      {userdata ? (
        <div>
          <Card
            className="col-sm-6 mw-80 col-md-4 col-lg-4  mx-auto mt-5"
            style={{ width: "40rem" }}
          >
            <Card.Body>
              <Card.Title>
                Name : {userdata.name ? userdata.name : ""}
              </Card.Title>
              <Card.Text>
                <h6>
                  Email id:
                  {userdata.email ? userdata.email : ""}
                </h6>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Taxable_Income :
                {userdata.Taxable_Income ? userdata.Taxable_Income : ""}
              </ListGroupItem>

              <ListGroupItem>
                Applicable HRA :{userdata.apphra ? userdata.apphra : ""}
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                Basic :{userdata.basic ? userdata.basic : ""}
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                Food :{userdata.fa ? userdata.fa : ""}
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                LTA :{userdata.lta ? userdata.lta : ""}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      ) : (
        <h4 className="mt-5"> Server Eror or not Enterd invest value </h4>
      )}
    </div>
  );
}

export default Taxincome;
