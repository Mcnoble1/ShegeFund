import React from "react";

import CreateEvent from "./CreateEvent";
// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbar/Navbar.js";

// let ps = null;

export default function ProfilePage() {
  
  return (
    <>
      <Navbar />   
        <div className="page-header">         
          <div className="content-center">
            <Row className="row-grid justify-content-center align-items-center">
              <Col  md="" >
                <h1 className="text-white text-center">
                  Get started by creating your event                
                </h1>
                <div className="btn-wrapper pt-3">
                  <CreateEvent/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* <Footer /> */}
    </>
  );
}
