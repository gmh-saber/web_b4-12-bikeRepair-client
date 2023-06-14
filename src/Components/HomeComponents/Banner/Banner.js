import { motion } from "framer-motion";
import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <motion.section className="h" id="home">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/motorbike-repair-shop-picture-id654376016?k=20&m=654376016&s=612x612&w=0&h=7rhtUYc0oOf2mS14mhbg0cWNMslRf7NzacFhuFioOlc="
            alt="First slide"
          />
          {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/mechanic-repairing-customized-motorcycle-picture-id1019948816?k=20&m=1019948816&s=612x612&w=0&h=JS_Arw9YW3D_hM6eF8QY2KF4uktQZiIpnAmiqZ1WWuQ="
            alt="Second slide"
          />
          {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/this-bike-will-be-perfect-picture-id614415432?k=20&m=614415432&s=612x612&w=0&h=pxoABtoInMevUnC08h4rlbBVqc-5q1f4Pv4JW37SfAI="
            alt="Third slide"
          />
          {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </motion.section>
  );
};

export default Banner;

{
  /*  */
}
