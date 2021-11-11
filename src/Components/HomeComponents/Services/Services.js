import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import spinner from '../../../images/service-loder.gif';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://limitless-harbor-90447.herokuapp.com/all-services')
            .then(res => {
                setServices(res.data);
            })
            .catch(error => toast.error(error.message))
    }, [])

    return (
        <section className="services" id='service'>
            <Container>
                <h5>What We Do</h5>
                <h3>Services We Provide</h3>
                <Row className="mt-5  d-flex justify-content-center">
                    {
                        services.length > 0 ?
                            services.slice(0, 3).map(service => <ServiceDetail key={service._id} service={service} />)
                            :
                            <div className="m-auto d-flex justify-content-center ">
                                <img className='img-fluid' src={spinner} alt="..." />
                            </div>
                    }
                    <Link to="/services" className="btn btn-outline-info mx-auto w-25 rounded-pill my-5">
                        See More
                    </Link>
                </Row>
            </Container>
        </section>
    );
};

export default Services;