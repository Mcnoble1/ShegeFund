import React, {useState} from "react";
import { useForm } from "react-hook-form";
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

const stdlib = loadStdlib('ALGO');


export default function MakeRsvp(props) {
  const { handleSubmit } = useForm();

  const [title, setTitle] = useState("");
  const [fee, setFee] = useState();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [tickets, setTickets] = useState();
  const [organizer, setOrganizer] = useState("");
  
  const [action, setAction] = useState("RSVP for event");
  const [info, setInfo] = useState("");

  const [miniModal1, setMiniModal1] = React.useState(false);
  const [miniModal2, setMiniModal2] = React.useState(false);
  const [miniModal3, setMiniModal3] = React.useState(false);
  const [formModal, setFormModal] = useState(false);


  const handleClick = event => {
      event.currentTarget.parentElement.parentNode.classList.add('d-none');
      setFormModal(true);
  };

  const checkin = event => {
    event.currentTarget.classList.add('d-none');
    setMiniModal2(true);
    };

  const Rsvp = () => {
    setInfo("");
    attach(info)
  }

  async function attach(info) {
    try {
      const acc = await account();
    const ctc = acc.contract(backend, JSON.parse(info));
    const { fee } = await ctc.unsafeViews.Info.details();
    const { title } = await ctc.unsafeViews.Info.details();
    const { location } = await ctc.unsafeViews.Info.details();
    const { date } = await ctc.unsafeViews.Info.details();
    const { description } = await ctc.unsafeViews.Info.details();
    const { tickets } = await ctc.unsafeViews.Info.details();
    const { organizer } = await ctc.unsafeViews.Info.details();

    setFee(stdlib.formatCurrency(fee));
    setTitle(title);
    setLocation(location);
    setDate(date);
    setDescription(description);
    setTickets(stdlib.formatCurrency(stdlib.parseCurrency(tickets)));
    setOrganizer(organizer);

      await ctc.apis.Attendee.rsvpForEvent(title, location, fee, tickets, organizer, date, description);
      await ctc.apis.Attendee.checkIn()

      setAction("Check-In");
      setFormModal(false);
      setMiniModal1(true);
    } catch (err) {
      setMiniModal3(true);
    }
  }

  return (  
    <>
        <Button className="btn-wrapper btn-simple" color="primary" to="/rsvp" tag={Link} onClick={handleClick}>
            {action}
        </Button>
          <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Paste the contract Info</h3>
              </div>
            </div>
            <div className="modal-body">             
            <Row>
              <Col md="">
                <Card className="card-plain">
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
                        RSVP
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </div>
        </Modal>
        
           <Modal
            modalClassName="modal-black modal"
            isOpen={miniModal1}
            toggle={() => setMiniModal1(false)}
          >
            <Container id='rsvp'>
             <UncontrolledAlert className="alert-with-icon" color="transparent">
              <span data-notify="icon" className="tim-icons icon-trophy" />
              <span>
                <b>WAGMI! 🔥🎉🎊🍾 </b>
                You have successfully registered for {title} event. 
                Remember to check in on the event date.
              </span>
              </UncontrolledAlert>
              <Row>
              <Col className="text-center">
                <hr className="" />
                <h3>
                  Event Details
                </h3>
              </Col>
            </Row>
            <Row>
              <Col md="12">
              <Card className="card-coin card-plain">
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase" >{title}</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Fee: {fee} {stdlib.standardUnit}</ListGroupItem>
                        <ListGroupItem>Details: {description}</ListGroupItem>
                        <ListGroupItem>Venue: {location}</ListGroupItem>
                        <ListGroupItem>Date: {date}</ListGroupItem>
                        <ListGroupItem>No of Tickets: {tickets} </ListGroupItem>
                        <ListGroupItem>Organizer: {organizer}</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button className="btn-simple" color="primary"
                    onClick={checkin}>
                      Check In
                    </Button>
                  </CardFooter>
                </Card>
                </Col>
            </Row>
            </Container>
          </Modal>
          <Modal
            modalClassName="modal-black modal-form"
            isOpen={miniModal2}
            toggle={() => setMiniModal2(false)}
          >
             <UncontrolledAlert className="alert-with-icon" color="">
              <span data-notify="icon" className="tim-icons icon-trophy" />
              <span>
                <b>WAGMI! 🤑🪙</b>
                You have successfully checked into your event. Enjoy!.
                You will receive your payment back
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
               Can't get you a reservation because tickets sold out or ensure you have entered the correct information.
              </span>
            </UncontrolledAlert>
          </Modal>
    </>
    );
}
