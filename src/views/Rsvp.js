import React, {useState} from "react";
import Navbar from "components/Navbar/Navbar.js";
import { useForm } from "react-hook-form";
import giphy from "../assets/img/giphy (6).gif";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UncontrolledAlert } from "reactstrap";
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from '../reach/build/index.main.mjs';
import { account } from "./utils"
// reactstrap components
import {
  Button,
  FormGroup,
  Row,
  ListGroup,
  ListGroupItem,
  Container,
  CardFooter,
  Col,
  Modal,
  Form,
  Input,
  Card,
  CardBody,
} from "reactstrap";

const stdlib = loadStdlib();


export default function ProfilePage(props) {
  const { handleSubmit } = useForm();


  const navigate = useNavigate();
  
  const [amount, setAmount] = useState("");

  const [miniModal, setMiniModal] = React.useState(false);
  const [miniModal1, setMiniModal1] = React.useState(false);
  const [miniModal2, setMiniModal2] = React.useState(false);
  const [miniModal3, setMiniModal3] = React.useState(false);

  const info = JSON.parse(localStorage.getItem('info'));
  const fund = event => {
      setMiniModal1(true);
    } 

    async function donate() {
      try { 
        const acc = await account();
        const ctc = acc.contract(backend, info);  
        setMiniModal(true);

        const myGasLimit = 7000000;
        acc.setGasLimit(myGasLimit);  

       await ctc.apis.Donor.donate(stdlib.parseCurrency(amount));
       console.log(`You donated 1 ${stdlib.standardUnit} to the campaign`);
        setMiniModal(false);
       setMiniModal1(false);
       setMiniModal2(true);
      //  navigate('/home');

      } catch (e) {
        console.log(e);
        setMiniModal3(true);
      }

    }

  return (
    <>
      <Navbar />   
      <Container>
            <Container id='rsvp'>
            <UncontrolledAlert className="alert-with-icon" color="transparent">
              <span data-notify="icon" className="tim-icons icon-trophy" />
              <span>
                <b>Welcome 🎉🍾 </b>
                You have successfully attached to {JSON.parse(localStorage.getItem('title'))} fundraising contract
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
                  <Button className="btn-simple" color="primary"
                    onClick={fund}>
                      Make a Donation
                    </Button>
                  </CardFooter>
                </Card>
                </Col>
            </Row>
            </Container>

            <Modal
            modalClassName="modal-black modal-primary modal-form"
            isOpen={miniModal1}
          >
             <Card className="card-coin card-plain">
                  <CardBody>
                    <Form role="form" onSubmit={handleSubmit(donate)}>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <h4>How much would you like to donate? (MATIC)</h4>
                            <Input type="text" placeholder="Enter amount" 
                            required
                            onChange={(e) => setAmount(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                      <Button
                        className="my-4" color="primary" type="submit" 
                      >
                        Donate
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Modal>

              <Modal
            modalClassName="modal-black modal-primary modal-form"
            isOpen={miniModal}
          >
            <img src={giphy} alt="wait until the page loads" height="400px" />
              <h3 className="text-center">Donating to the cause</h3>
          </Modal>

            <Modal
            modalClassName="modal-black modal-primary modal-form"
            isOpen={miniModal2}
            toggle={() => setMiniModal2(false)}
          >
            <UncontrolledAlert className="alert-with-icon" color="transparent">
              <span data-notify="icon" className="tim-icons icon-trophy" />
              <span>
                <b>Cha-Ching 🔥🎉💸🤑🍾 </b>
                You have successfully donated for {JSON.parse(localStorage.getItem('title'))} campaign. 
                Thanks for saving a bro from the streets.
              </span>
              </UncontrolledAlert>
              </Modal>

              <Modal
            modalClassName="modal-black modal-primary modal-form"
            isOpen={miniModal3}
            toggle={() => setMiniModal3(false)}
          >
             <UncontrolledAlert className="alert-with-icon" color="">
              <span data-notify="icon" className="tim-icons icon-" />
              <h3>NGMI! 😢😢</h3>
              <span>
               Can't make a donation because fund target reached 
              </span>
            </UncontrolledAlert>
          </Modal>
          </Container>
    </>
  );
}
