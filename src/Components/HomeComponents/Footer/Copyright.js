import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright bg-dark text-white">
            <small>Designed & Functionalized by <a href="mailto:golammuktadirhossain18@gmail.com" style={{ color: 'rgb(26 210 14)' }}>GMH SABER</a></small> <br />
            <small>{(new Date()).getFullYear()} &copy; copyright | GMH SABER</small> <br />
        </div>
    );
};

export default Copyright;