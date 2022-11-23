import React from "react";
// react plugin used to create datetimepicker

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
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Create Events</h4>
                      <hr className="line-primary" />
                      <p>
                        Connect your wallet to create events and share 
                        your event information with the public to RSVP 
                        for your event.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">RSVP for Events</h4>
                      <hr className="line-warning" />
                      <p>
                        RSVP for events you are interested in.
                        Paste the event information to make your reservations.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Check-in to Events</h4>
                      <hr className="line-success" />
                      <p>
                        Check-in to events you are attending and get your rewards.
                      </p>
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
