import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-action";
import LogoHeader from "../logo-header/logo-header";
import PageFooter from "../page-footer/page-footer";

class AuthScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._emailRef = createRef();
    this._passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit} = this.props;

    onSubmit({
      email: this._emailRef.current.value,
      password: this._passwordRef.current.value
    });
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">

          <LogoHeader />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
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
};

AuthScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(null, mapDispatchToProps)(AuthScreen);
