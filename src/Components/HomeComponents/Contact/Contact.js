import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import swal from "sweetalert";
import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const loading = toast.loading("Please wait...!");
    emailjs
      .send(
        "service_fv0zysr",
        "template_m4iuf66",
        data,
        "user_zZK9MBuRLGpjW0IhFgaL6"
      )
      .then(
        (res) => {
          toast.dismiss(loading);
          if (res.text === "OK") {
            reset();
            return swal(
              "Thank you!",
              "Your message was sent successfully.",
              "success"
            );
          }
          swal(
            "Sorry!",
            "Something went wrong. Please try again later",
            "error"
          );
        },
        (err) => {
          toast.dismiss(loading);
          swal(
            "Sorry!",
            "Something went wrong. Please try again later",
            "error"
          );
        }
      );
  };

  return (
    <section className="contact-container  pb-5" id="contact">
      <Container className="pt-5 text-secondary">
        <h3 className="text-center fs-1">Get In Touch</h3>
        <p className="row col-md-8 text-center m-auto">
          We would Love to hear from you . Whether you have a question or just
          want to say hi, fell free to drop a message. I'll try my best to get
          back to you
        </p>
        <div className="mt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form shadow shadow-lg"
          >
            <Row>
              <Col md="6">
                <div className="contact-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                    required
                  />
                </div>

                <div className="contact-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                    required
                  />
                </div>

                <div className="contact-group">
                  <label>Phone</label>
                  <input
                    type="phone"
                    name="subject"
                    placeholder="Enter Your Phone Number"
                    {...register("subject", { required: true })}
                    required
                  />
                </div>
              </Col>

              <Col md="6">
                <div className="contact-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Your Message Here..."
                    {...register("message", { required: true })}
                    required
                  />
                </div>
              </Col>
            </Row>
            <div className="mt-3 text-center">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255 255 255)",
                  boxShadow: "0px 0px 8px rgb(255 255 255)",
                }}
                className="btn btn-primary"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
