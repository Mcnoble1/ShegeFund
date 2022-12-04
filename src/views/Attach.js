import React, {useState} from "react";
import Navbar from "components/Navbar/Nav.js";
import giphy from "../assets/img/deploy.gif";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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


export default function Attach(props) {
  const { handleSubmit } = useForm();


  const navigate = useNavigate();

  const [info, setInfo] = useState("");

  const [miniModal1, setMiniModal1] = React.useState(false);
  const [miniModal2, setMiniModal2] = React.useState(false);



  const Rsvp = () => {
    setInfo("");
    attach(info)
  }

  async function attach(info) {
    try {
      setMiniModal1(true);
    const acc = await account();
    const ctc = acc.contract(backend, info);  
    const myGasLimit = 7000000;
    acc.setGasLimit(myGasLimit);  


    const { target } = await ctc.unsafeViews.Info.details();
    const { deadline } = await ctc.unsafeViews.Info.details();
    const { creator } = await ctc.unsafeViews.Info.details();
    const { title } = await ctc.unsafeViews.Info.details();
    const { story } = await ctc.unsafeViews.Info.details();
    // const { picture } = await ctc.unsafeViews.Info.details();

    localStorage.setItem('target', JSON.stringify(stdlib.formatCurrency(stdlib.parseCurrency(target))));
    localStorage.setItem('deadline', JSON.stringify(stdlib.formatCurrency(stdlib.parseCurrency(deadline))));
    localStorage.setItem('creator', JSON.stringify(creator));
    localStorage.setItem('title', JSON.stringify(title));
    localStorage.setItem('story', JSON.stringify(story));
    localStorage.setItem('info', JSON.stringify(info));

      navigate("/donate")
    } catch (err) {
      console.log(err);
      setMiniModal2(true);
      setMiniModal1(false);
    }
  }

  return (  
    <>
        <Navbar />   
           <div className="mt-5">
          <Container>
            <div className="justify-content-center">
              <div className="text-muted text-center">
                <h2 className="text-white text-center">
                Save a bro from seeing Shege 🫰💷💸            
                </h2>
                <h2 className="text-white text-center">
                Paste the contract Info               
                </h2>
              </div>
            </div>
            <div className="modal-body">             
            <Row>
              <Col>
                <Card className="card-plain card-coin">
                  <CardBody>
                    <Form role="form" onSubmit={handleSubmit(Rsvp)}>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Input placeholder="{ }" type="textarea"
                            spellCheck="false"
                            required
                            onChange={(e) => setInfo(e.target.value)}
                             />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="my-4" color="primary" type="submit"
                      >
                        Attach
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
          >
            <img src={giphy} alt="wait until the page loads" />
              <h3 className="text-center">Attaching to the contract</h3>
          </Modal>

          <Modal
            modalClassName="modal-black modal-primary modal-form"
            isOpen={miniModal2}
            toggle={() => setMiniModal2(false)}
          >
             <UncontrolledAlert className="alert-with-icon" color="">
              <span data-notify="icon" className="tim-icons icon-" />
              <h3>NGMI! 😢😢</h3>
              <span>
               Can't attach to the contract, ensure you have entered the correct information.
              </span>
            </UncontrolledAlert>
          </Modal>
    </>
    );
}
