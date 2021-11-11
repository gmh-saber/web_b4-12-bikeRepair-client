import React from 'react';
import { Image } from 'react-bootstrap';
import spinner from '../../../images/loader.gif';

const Spinner = () => {
    return (
        <section className="w-100 d-flex justify-content-center align-items-center">
            <Image src={spinner} />
        </section>
    );
};

export default Spinner;