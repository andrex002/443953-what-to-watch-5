import React from "react";
import PropTypes from "prop-types";

const AuthFormError = (props) => {
  const {isValidEmail, isValidPassword} = props;
  const checkFields = () => {
    if (!isValidEmail) {
      return <p>Please enter a valid email address</p>;
    } else if (!isValidPassword) {
      return <p>We can’t recognize this email <br /> and password combination. Please try again.</p>;
    }
    return ``;
  };

  return (
    <div className="sign-in__message">
      {checkFields()}
    </div>
  );
};

AuthFormError.propTypes = {
  isValidEmail: PropTypes.bool.isRequired,
  isValidPassword: PropTypes.bool.isRequired
};

export default AuthFormError;
