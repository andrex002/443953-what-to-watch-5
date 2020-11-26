import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";
import {checkAuth, login} from "../../api-action";
import {user} from "./user";
import {noop} from "../../../test-data";

const api = createAPI(noop);

const mockInitialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  name: null,
  avatar: null
};

it(`Reducer without additional parameters should return initial state in User`, () => {
  expect(user(void 0, {})).toEqual(mockInitialState);
});

describe(`Reducer should update state in User`, () => {
  it(`by load status`, () => {
    expect(user(mockInitialState, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual(Object.assign({}, mockInitialState, {
      authorizationStatus: AuthorizationStatus.AUTH
    }));
  });
});

describe(`Async operation work correctly in User`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});

    return checkAuthLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login 2`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@ya.ru`, password: `123`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(`/login`)
      .reply(200, {
        email: `sergeev-002@yandex.ru`,
        
      });

    return loginLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          
            payload: {email: `sergeev-002@yandex.ru`}, "type": ActionType.SAVE_AUTHORIZATION_INFO
            
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/`,
        });

      });
  });

});