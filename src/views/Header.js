import React from "react";
// react plugin used to create datetimepicker
import CreateEvent from "./CreateEvent";
import MakeRsvp from "./MakeRsvp";
import HeroImage from "../assets/img/cercuri.png";


// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

export default function Header() {
  return (  
    <>
       <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  TIK <br />
                  <span className="text-white"></span>
                </h1>
                <h3 className="text-white mb-3">
                  Decentralized Reservation Platform for Events
                </h3>
                <div className="btn-wrapper pt-3">
                  <CreateEvent />
                  <MakeRsvp />
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={HeroImage}
                />
              </Col>
            </Row>
          </div>
        </div>
    </>
    );
}
