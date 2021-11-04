import React from "react";
import FormBtn from "../buttons/FormBtn";
import './_form.scss';
const Form = () => {
    return (
        <form className="form-container">
            <input type="text" name="name" placeholder="your name" />
            <input type="email" name="email" placeholder="your email"/>
            <input type="number" name="number" placeholder="your number" />
            <FormBtn />
        </form>        
    );
}

export default Form;