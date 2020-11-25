import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

const UserBlock = (props) => {
  const {authorizationStatus, userName, userAvatar} = props;

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <div className="user-block__avatar">
          <Link to={`/mylist`}>
            <img src={userAvatar} alt={userName} width="63" height="63" />
          </Link>
        </div>
        : <Link to={`/login`} className="user-block__link">Sign in </Link>
      }
    </div>

  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userName: PropTypes.oneOfType([PropTypes.string.isRequired, () => null]),
  userAvatar: PropTypes.oneOfType([PropTypes.string.isRequired, () => null]),
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userName: USER.name,
  userAvatar: USER.avatar
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
