import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
// import about from '../../../images/about-section.png';
import "./About.css";

const About = () => {
  return (
    <section className="about-container ">
      <Container>
        <Row className="align-items-center justify-content-center banner">
          <Col>
            <Fade
              left
              className="bg-light shadow-lg border border-2 border rounded p-5"
              md={6}
            >
              <h6 className="text-info">About Us</h6>
              <h3>Why Choose Us For Repair ?</h3>
              <hr className="w-25 text-info border border-2 rounded-pill border-info" />
              <p className="text-muted mt-2">
                {" "}
                <small>
                  We have expert workers who cares about your bike . your bike
                  our money. We afford best service in budget . we have
                  specialiged garaz.{" "}
                </small>{" "}
              </p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255 255 255)",
                  boxShadow: "0px 0px 8px #17a2b8",
                  transition: { duration: 0.4, yoyo: "Infinity" },
                }}
                className="btn btn-outline-primary mt-3"
              >
                Learn More
              </motion.button>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade right>
              <Image
                className="img-fluid  rounded"
                src="https://media.istockphoto.com/id/903287126/vector/cartoon-thinking-man-with-question-mark-in-think-bubble-vector-illustration.jpg?s=612x612&w=0&k=20&c=rcnUwBYI7vM5xFOaOrBZASvkcJGtJx-uuxGF_lxz9DQ="
                alt="..."
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
