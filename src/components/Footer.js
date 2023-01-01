import { Container, Row, Col } from "reactstrap";
import Logo from '../app/assets/img/backpack_logo.png';
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
        <Container>
            <Row>
                <Col sm='2'>
                    <img alt ='backpack icon' src={Logo} style={{ width: 80 }}/>
                </Col>
                <Col sm='2'>
                    <h2>PackStrap</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={{ size: 3 }} sm='2'>
                    <h5>Gear</h5>
                    <ul className="list-unstyled">
                        <li>Gear Lists</li>
                        <li>Add Gear</li>
                        <li>Edit Gear</li>
                    </ul>
                </Col>
                <Col>
                    <h5>Trips</h5>
                    <ul className="list-unstyled">
                        <li>Plan Trips</li>
                        <li>Edit Trip</li>
                        <li>Completed Trips</li>
                    </ul>
                </Col>
                <Col>
                    <h5>Friends</h5>
                    <ul className="list-unstyled">
                        <li>Feed</li>
                        <li>Activity</li>
                        <li>Post Update</li>
                    </ul>
                </Col>
                <Col>
                    <h5>Calendar</h5>
                    <ul className="list-unstyled">
                        <li>Find Events</li>
                        <li>Make Event</li>
                        <li>Edit Event</li>
                    </ul>
                </Col>
                <Col>
                    <h5>Training</h5>
                    <ul className="list-unstyled">
                        <li>Training Schedule</li>
                        <li>Find Program</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Contact us</h5>
                    <i className="fa fa-facebook fa-lg" />{' '}
                    <i className="fa fa-instagram fa-lg" />{' '}
                    <i className="fa fa-twitter fa-lg" />{' '}
                    <i className="fa fa-envelope fa-lg" />
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer





