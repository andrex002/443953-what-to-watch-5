import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../store/api-action";
import LogoHeader from "../logo-header/logo-header";
import PageFooter from "../page-footer/page-footer";
import {AuthorizationStatus} from "../../const";
import AuthFormError from "../auth-form-error/auth-form-error";

class AuthScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isValidEmail: true,
      isValidPassword: true,
    };

    this._emailRef = createRef();
    this._passwordRef = createRef();

    this._validateEmail = this._validateEmail.bind(this);
    this._validatePassword = this._validatePassword.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _validateEmail(email) {
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        isValidEmail: true
      });
      return true;
    } else {
      this.setState({
        isValidEmail: false,
      });
      return false;
    }
  }

  _validatePassword(password) {
    if (password) {
      this.setState({
        isValidPassword: true
      });
      return true;
    } else {
      this.setState({
        isValidPassword: false,
      });
      return false;
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit} = this.props;
    const email = this._emailRef.current.value;
    const password = this._passwordRef.current.value;

    if (this._validateEmail(email) && this._validatePassword(password)) {
      onSubmit({
        email: this._emailRef.current.value,
        password: this._passwordRef.current.value
      });
    }
  }

  render() {
    const {authorizationStatus} = this.props;
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Redirect to={`/`} />;
    }

    const {isValidEmail, isValidPassword} = this.state;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">

          <LogoHeader />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
            {
              <AuthFormError isValidEmail={isValidEmail} isValidPassword={isValidPassword} />
            }
            <div className="sign-in__fields">
              <div className={isValidEmail ? `sign-in__field` : `sign-in__field sign-in__field--error`}>
                <input ref={this._emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={this._passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
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
  }
}

AuthScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
