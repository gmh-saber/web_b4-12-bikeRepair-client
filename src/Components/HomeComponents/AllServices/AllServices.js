



// import spinner from '../../../images/service-loder.gif';
import './AllServices.css'


import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import NavBar from '../NavBar/NavBar';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://limitless-harbor-90447.herokuapp.com/all-services')
            .then(res => {
                setServices(res.data);
            })
            .catch(error => toast.error(error.message))
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <section className="services" id="services">

                <Container>
                    <h5>What We Do</h5>
                    <h3>Services We Provide</h3>
                    <Row className="mt-5 justify-content-center">
                        {
                            services.length > 0 ?
                                services.map(service => <ServiceDetail key={service._id} service={service} />)
                                :
                                <div className="m-auto">
                                    {/* <img className='img-fluid' src={spinner} alt="..." /> */}
                                </div>
                        }
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default AllServices;