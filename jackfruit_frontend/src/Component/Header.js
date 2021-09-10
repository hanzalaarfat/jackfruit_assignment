import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header({ history }) {
  // const [token, setToken] = useState("");

  // const tok = localStorage.getItem("token");
  // useEffect(() => {}, setToken[tok]);

  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/"> Jack Fruit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    // <div>
    //   <div>
    //     <nav className="navbar navbar-expand-lg navbar-light bg-info">
    //       <div className="container-fluid">
    //         <a className="navbar-brand" href="/">
    //           Jack Fruit
    //         </a>
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarNav"
    //           aria-controls="navbarNav"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarNav">
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <a className="nav-link" href="/login">
    //                 Login
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/signup">
    //                 Sign Up
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  );
}

export default Header;
