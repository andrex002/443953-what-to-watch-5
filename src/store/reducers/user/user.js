import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  name: null,
  avatar: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });
    case ActionType.SAVE_AUTHORIZATION_INFO:
      return Object.assign({}, state, {
        name: action.payload.name,
        avatar: action.payload.avatar_url
      });
  }

  return state;
};

export {user};
