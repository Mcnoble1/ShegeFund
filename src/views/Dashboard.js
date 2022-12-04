import React, {useState} from "react";
import "./textarea.css";
import { useNavigate } from "react-router-dom";
import Navbar from "components/Navbar/Nav.js";
// react plugin used to create datetimepicker
// import ReactDatetime from "react-datetime";
import { UncontrolledAlert } from "reactstrap";
import {loadStdlib} from '@reach-sh/stdlib';
// reactstrap components
import {
  Row,
  ListGroup,
  Container,
  ListGroupItem,
  CardFooter,
  Col,
  Button,
  Card,
  CardBody,
} from "reactstrap";

const stdlib = loadStdlib();


export default function Dashboard(props) {

    const [details, setDetails] = useState("See Amount Raised"); 

    const raise = async () => {
        const ctcInfoStr = localStorage.getItem('ctcInfo');
        const ctcInfo = JSON.parse(ctcInfoStr);
        const ctc = stdlib.parseCurrency(ctcInfo);
        const amt = await ctc.balance();
        setDetails(amt);
    };
        

    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    
    const donations = async (event) =>  {
      let donor = JSON.parse(localStorage.getItem('donors'));
      let amt = JSON.parse(localStorage.getItem('amount'));
      event.currentTarget.insertAdjacentHTML("afterend", `<h4 className="rsvp">${donor} made a donation of ${amt} MATIC.</h4>`)  
      await sleep(5000);
    }

    const info = JSON.parse(localStorage.getItem('info'));
    const retInfo = info.replaceAll('"', '');

      async function copyToClipboard(button) {
        navigator.clipboard.writeText(retInfo);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
      }

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
                <Button
                className="nav-link d-lg-block"
                color="primary"
                target="_blank"
                href=""
                onClick={raise}
              >
                <i className="" /> {details}
              </Button>
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
                        {/* <ListGroupItem>
                        Picture:  
                          <img src={localStorage.getItem('fileBase64')} alt="" />
                          </ListGroupItem> */}
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
