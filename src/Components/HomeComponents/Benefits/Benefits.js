import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits-container">
      <Container>
        <Row className="align-items-center justify-content-center banner">
          <Col md={6}>
            <Fade left>
              <Image
                className="img-fluid"
                src="https://quickrentalphuket.com/wp-content/uploads/2018/10/mechanic-321x400.png"
                alt="..."
              />
            </Fade>
          </Col>
          <Col className="offset-md-1" md={5}>
            <Fade right>
              <h1>Here are some of Your Benefits!</h1>
              <p className="text-muted">
                <small>
                  Our repair technicians have a wealth of experience repairing
                  motor cycles and diagnosing wealth of great thing experience
                  repairing errors.{" "}
                </small>
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
                Seee more
              </motion.button>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
