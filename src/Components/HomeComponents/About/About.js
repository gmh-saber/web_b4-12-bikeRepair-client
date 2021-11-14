import { motion } from "framer-motion";
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
// import about from '../../../images/about-section.png';
import './About.css';

const About = () => {
    return (
        <section className="about-container bg-secondary">
            <Container>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Fade left>
                            <Image className="img-fluid border border-4 border-info rounded-pill" src='https://media.istockphoto.com/photos/people-are-repairing-a-motorcycle-picture-id1084092090?k=20&m=1084092090&s=612x612&w=0&h=1y3c0xE-ZEi4wkDrzciUv6DeU6K1LSuAPh8R9ZNwzHE=' alt="..." />
                        </Fade>
                    </Col>
                    <Col className='bg-light shadow-lg border border-2 border-warning rounded p-5' md={6}>
                        <Fade right>
                            <h6 className="text-info">About Us</h6>
                            <h3>Why Choose Us For Repair ?</h3>
                            <span className="animate-border border-black"></span>
                            <p className="text-muted mt-2"> <small>We have expert workers who cares about your bike . your bike our money. We afford best service in budget . we have specialiged garaz.   </small> </p>
                            <motion.button whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(255 255 255)', boxShadow: '0px 0px 8px #17a2b8', transition: { duration: 0.4, yoyo: 'Infinity' } }} className='main-button'>Learn More</motion.button>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;