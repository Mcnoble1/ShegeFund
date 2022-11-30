import React, {useState} from "react";
import "./textarea.css";
import { useNavigate } from "react-router-dom";
import Navbar from "components/Navbar/Navbar.js";
// react plugin used to create datetimepicker
// import ReactDatetime from "react-datetime";
import { UncontrolledAlert } from "reactstrap";
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from '../reach/build/index.main.mjs';
import { account } from "./utils"
// reactstrap components
import {
  Row,
  ListGroup,
  Container,
  ListGroupItem,
  CardFooter,
  Col,
  Card,
  CardBody,
} from "reactstrap";

const stdlib = loadStdlib();


export default function Dashboard(props) {
  // onload();

  let donors = [];

  donors.push(JSON.parse(localStorage.getItem('donor')))
  

    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

    // const target = stdlib.parseCurrency(targets);


    
    const donations = event =>  {
      for ( const donor of donors) {
      event.currentTarget.insertAdjacentHTML("afterend", `<p className="rsvp">${donor} made a donation.</p>`)  
      sleep(5000);
      event.currentTarget.nextElement.remove() 
     `<p className="rsvp">See Reservations</p>`
      }
    }

      async function copyToClipboard(button) {
        navigator.clipboard.writeText(JSON.parse(localStorage.getItem('info')));
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
      }
      
      // async function onload() {
      //   const acc = await account();  
      // }
      

     

  return (  
    <>
    <Navbar />   
        
        <Container>
            <Container id='rsvp'>
             <UncontrolledAlert className="alert-with-icon" color="transparent">
              <span data-notify="icon" className="tim-icons icon-trophy" />
              <span>
                <b>WAGMI! 🔥🎉🎊🍾-</b>
                Your fundraising cause has been created successfully
              </span>
              </UncontrolledAlert>
              <Row>
              <Col className="text-center">
                <hr className="" />
                <h3>
                  Fundraise Details
                </h3>
              </Col>
            </Row>
            <Row>
              <Col md="12">
              <Card className="card-coin card-plain">
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase" >{JSON.parse(localStorage.getItem('title'))}</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Target: {JSON.parse(localStorage.getItem('target'))} {stdlib.standardUnit}</ListGroupItem>
                        <ListGroupItem>Shege Story: {JSON.parse(localStorage.getItem('story'))}</ListGroupItem>
                        <ListGroupItem>Deadline: {JSON.parse(localStorage.getItem('deadline'))}</ListGroupItem>
                        <ListGroupItem>Creator: {JSON.parse(localStorage.getItem('creator'))}</ListGroupItem>
                        <ListGroupItem>Picture: {JSON.parse(localStorage.getItem('picture'))}</ListGroupItem>
                        <ListGroupItem>Video: {JSON.parse(localStorage.getItem('video'))}</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                  
                  </CardFooter>
                </Card>
                </Col>
            </Row>
            <h4 className="text-center card-plain" >Share your Fundraising Contract Information</h4>
                <textarea value={JSON.parse(localStorage.getItem('info'))} className="textarea">
                </textarea>
                <button className="btn-wrapper mt-3 mr-3 mb-3 btn-simple btn-success"
                  onClick={(e) => copyToClipboard(e.currentTarget)}
                >Copy to clipboard
                </button>
                <button className="btn-wrapper mt-3 mb-3 btn-simple btn-success"
                 onClick={donations}
                >See Donations
                </button>
            </Container>
          </Container>
    </>
    );
}
