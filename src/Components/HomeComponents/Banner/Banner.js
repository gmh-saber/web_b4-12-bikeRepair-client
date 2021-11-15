import { motion } from "framer-motion";
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <motion.section id='home' >
            <Container>
                <Row className="align-items-center justify-content-center banner">
                    <Col className=" px-0 " md={6}>
                        <Image className="img-fluid border border-4 border-info rounded-pill" src='https://dcist.com/wp-content/uploads/sites/3/2019/08/dunnlewis_04-3000x2250.jpg' alt="..." />
                    </Col>

                    <Col md={5}>
                        <h1>We’re Finding Solution For Your Problems</h1>
                        <p className="text-muted"><small>Our repair technicians have a wealth of experience repairing motor cycles and diagnosing wealth of great thing experience repairing errors.</small></p>
                        <motion.button whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(255 255 255)', boxShadow: '0px 0px 8px #17a2b8', transition: { duration: 0.4, yoyo: 'Infinity' } }} className='main-button'>Get Started</motion.button>
                    </Col>

                </Row>
            </Container>
        </motion.section>
    );
};

export default Banner;