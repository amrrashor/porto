import React from "react";
import Form from "../../components/form/Form";
import './_signup.scss';
import Map from './../../components/map/Map';

const Signup = () => {
    return (  
        <div className="container">
            <h1 className="sign-up">
                sign up
            </h1>
            <div className="sign-up-wrapper">
                <div className="map-wrapper"><Map/></div>
                <div className="form-wrapper"><Form /></div>
            </div>
        </div>
    );
}

export default Signup;