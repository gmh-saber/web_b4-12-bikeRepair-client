import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer pt-5 pb-3">
          <div className="container">
            <div className=" ">
              <div className="d-flex flex-column align-items-center justify-content-center  my-auto">
                <Link
                  className="navbar-brand text-light fw-bold fs-1"
                  to="/home"
                >
                  <span className="text-info">Bike</span>Repair <br />
                </Link>
                <h3 className="mt-3">Need Help With Anything?</h3>
                <p className="w-75 foot fs-6 text fs-4">
                  Receive updates, hot deals, tutorials, discounts sent straignt
                  in your inbox every month
                </p>
                <div className="input-group mx-auto mb-3 w-75 fs-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
                <NavLink to="/commingSoon">
                  <span
                    className="input-group-text btn btn-travel bg-primary text-white rounded-start border-start-0"
                    id="basic-addon2"
                  >
                    Subscribe
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
