import React, {useState} from "react";
import "./textarea.css";
import giphy from "../assets/img/deploy.gif";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "components/Navbar/Nav.js";
// react plugin used to create datetimepicker
// import ReactDatetime from "react-datetime";
import { UncontrolledAlert } from "reactstrap";
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from '../reach/build/index.main.mjs';
import { account } from "./utils"
// reactstrap components
import {
  Button,
  FormGroup,
  Row,
  Container,
  Col,
  Modal,
  Form,
  Input,
  Card,
  CardBody,
} from "reactstrap";

const stdlib = loadStdlib();


export default function CreateEvent(props) {

    const platformAddress = "0xA3113a97DBb1FEaD4E1810583F00022f3b1F35c4";

    const { handleSubmit } = useForm();
    const navigate = useNavigate();

    const [donors, setDonors] = useState([]);
    const [address, setAddress] = useState("")

    const [target, setTarget] = useState("");
    const [deadline, setDeadline] = useState(1);
    const [creator, setCreator] = useState("");
    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const [picture, setPicture] = useState("")

    const [miniModal1, setMiniModal1] = React.useState(false);
    const [miniModal2, setMiniModal2] = React.useState(false);

    const imageUpload = (e) => {
      const file = e.target.files[0];
      getBase64(file).then(base64 => {
        localStorage["fileBase64"] = base64;
        console.debug("file stored",base64);
        // setPicture(base64);
      });
  };

  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }

  let details;

    details = {target, deadline, creator, title, story, picture};

    async function deploy() {

      localStorage.setItem('donors', JSON.stringify());
      localStorage.setItem('amount', JSON.stringify());
      localStorage.setItem('target', JSON.stringify(target));
      localStorage.setItem('deadline', JSON.stringify(deadline));
      localStorage.setItem('creator', JSON.stringify(creator));
      localStorage.setItem('title', JSON.stringify(title));
      localStorage.setItem('story', JSON.stringify(story));
      // localStorage.setItem('picture', picture);

      try{
        const acc = await account();
        const ctc = acc.contract(backend);
        setMiniModal2(true);
        const interact = {
          deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[stdlib.connector],
          platformAddr: platformAddress,
          createFundraiser: details,

          launched: (contract) => {
            console.log(`The event is ready to start accepting donations ${contract}.`);
          },
          seeDonation: (who, amt) => {
            console.log(`${who} donated ${stdlib.formatCurrency(amt)}`);
            localStorage.setItem('donors', JSON.stringify(who));
            localStorage.setItem('amount', JSON.stringify(stdlib.formatCurrency(amt)));

            setAddress(stdlib.formatAddress(who));
            setDonors(donors => [...donors, stdlib.formatAddress(who)]); 
          },
          thankDonor: (who) => {
            console.log(`Thank you for your donation ${who}.`);
          },
        };

        backend.Fundraiser(ctc, interact);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        // let ctcBalance = stdlib.balance();
        // console.log(ctcBalance);
        localStorage.setItem('info', JSON.stringify(ctcInfoStr));
        navigate("/dashboard");

      } catch (err) {
        console.log(err);
        setMiniModal1(true);
        setMiniModal2(false);
      }
    }

  return (  
    <>
    <Navbar />   
        <div className="mt-5">         
          <Container>
            <div className="justify-content-center">
              <div className="text-muted text-center">
              <h1 className="text-white text-center">
                  Get started by creating your Fundraiser                
                </h1>
              </div>
            </div>
            <div className="modal-body">             
            <Row>
              <Col>
                <Card className="card-coin card-plain">
                  <CardBody>
                    <Form role="form" onSubmit={handleSubmit(deploy)}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Title</label>
                            <Input type="text" placeholder="Give the Fundraise a Title" 
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Target (MATIC) </label>
                            <Input placeholder="Fund Target" type="text"
                             required
                            onChange={(e) => setTarget(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Creator</label>
                            <Input placeholder="Firstname Lastname" type="text" 
                            required
                            onChange={(e) => setCreator(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Deadline (Blocks)</label>
                            <Input placeholder="10" type="number" 
                            required
                            onChange={(e) => setDeadline(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Description</label>
                            <Input placeholder="Your Shege story" type="text"
                            required
                            onChange={(e) => setStory(e.target.value)}
                             />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          {/* <FormGroup> */}
                            <label>Picture</label>
                            <Input  type="file"
                            required
                            onChange={imageUpload}
                             /> 
                          {/* </FormGroup> */}
                        </Col>
                      </Row>
                      <Button
                        className="my-4" color="primary" type="submit" 
                      >
                        Start Fundraise
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </div>

                </Container>
        </div>
        
        <Modal
            modalClassName="modal-black modal-primary modal-form"
            isOpen={miniModal1}
            toggle={() => setMiniModal1(false)}
          >
             <UncontrolledAlert className="alert-with-icon" color="">
              <span data-notify="icon" className="tim-icons icon-" />
              <h3>NGMI! 😢😢</h3>
              <span>
                Ensure you enable popup in your browser and have enough funds in your wallet.
              </span>
            </UncontrolledAlert>
          </Modal>

          <Modal
            modalClassName="modal-black modal-primary modal-form"
            isOpen={miniModal2}
          >
            <img src={giphy} alt="wait until the page loads" />
              <h3 className="text-center">Deploying the contract</h3>
          </Modal>

    </>
    );
}
