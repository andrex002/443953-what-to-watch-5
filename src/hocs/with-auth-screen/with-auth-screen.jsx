import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-action";

const withAuthScreen = (Component) => {
  class WithAuthScreen extends PureComponent {
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
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
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

    _handleFormSubmit(evt) {
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
      const {isValidEmail, isValidPassword} = this.state;
      const {authorizationStatus} = this.props;
      return (
        <Component {...this.props}
          authorizationStatus={authorizationStatus}
          isValidEmail={isValidEmail}
          isValidPassword={isValidPassword}
          onFormSubmit={this._handleFormSubmit}
          renderEmailInput = {() => {
            return (
              <input ref={this._emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
            );
          }}
          renderPasswordInput={() => {
            return (
              <input ref={this._passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
            );
          }}
        />
      );
    }
  }

  WithAuthScreen.propTypes = {
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

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthScreen);
};

export {withAuthScreen};
export default withAuthScreen;
