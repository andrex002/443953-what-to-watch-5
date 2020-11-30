import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import LogoHeader from "../logo-header/logo-header";
import PageFooter from "../page-footer/page-footer";
import AuthFormError from "../auth-form-error/auth-form-error";
import {AuthorizationStatus} from "../../const";

const AuthScreen = (props) => {
  const {authorizationStatus, isValidEmail, isValidPassword, renderEmailInput, renderPasswordInput, onFormSubmit} = props;
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={`/`} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <LogoHeader />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onFormSubmit}>
          {
            <AuthFormError isValidEmail={isValidEmail} isValidPassword={isValidPassword} />
          }
          <div className="sign-in__fields">
            <div className={isValidEmail ? `sign-in__field` : `sign-in__field sign-in__field--error`}>
              {renderEmailInput()}
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              {renderPasswordInput()}
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter />

    </div>
  );
};

AuthScreen.propTypes = {
  isValidEmail: PropTypes.bool.isRequired,
  isValidPassword: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  renderEmailInput: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  renderPasswordInput: PropTypes.func.isRequired
};

export default AuthScreen;
