import React from "react";
import cry from "../assets/img/cry.png";
import donate from "../assets/img/donate.png";
import circle from "../assets/img/circle.png";


// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Benefit() {

  return (  
    <>
         <section className="section section-lg">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">How it Works</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="">
                        {/* <i className="tim-icons icon-money-coins" /> */}
                        <img alt="..." className="img-fluid" height="100px" src={cry}/>
                      </div>
                      <h3 className="info-title">Create Funding Cause</h3>
                      <hr className="line-primary" />
                      <h4>
                        Connect your wallet to create a cause and share 
                        your contract information with the public to make donations
                      </h4>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                      <img alt="..." className="img-fluid" src={donate}/>
                      </div>
                      <h3 className="info-title">Donate to a Cause</h3>
                      <hr className="line-warning" />
                      <h4>
                        Donate to causes that you are interested in.
                        Paste the event information to make your donation.
                      </h4>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                      <img alt="..." className="img-fluid" src={circle}/>
                      </div>
                      <h3 className="info-title">Saving Circle (AJO)</h3>
                      <hr className="line-success" />
                      <h4>
                        Create and join automated saving circles with your friends (coming soon).
                      </h4>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
    </>
    );
}
