import React from "react";

import MakeRsvp from "./MakeRsvp";
// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbar/Navbar.js";

export default function ProfilePage() {

  return (
    <>
      <Navbar />   
        <div className="page-header">         
          <div className="content-center">
            <Row className="row-grid justify-content-center align-items-center">
              <Col  md="" >
                <h1 className="text-white text-center">
                  Make your Reservations               
                </h1>
                <div className="btn-wrapper pt-3">
                  <MakeRsvp/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
    </>
  );
}
