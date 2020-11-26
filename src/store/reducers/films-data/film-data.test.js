import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {adaptFilmToServer, adaptCommentToServer} from "../../../services/adapters";
import {ActionType} from "../../action";
import {filmsCount} from "../../../const";
import {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments, fetchFilmById, sendComment, sendFavoriteStatus} from "../../api-action";
import {filmsData} from "./films-data";
import {films, comments, noop} from "../../../test-data";

const api = createAPI(noop);

const mockInitialState = {
  allFilms: [],
  filteredFilms: [],
  favoriteFilms: [],
  promoFilm: {},
  currentFilm: {},
  numberFilmsShown: filmsCount.PER_STEP,
  comments: [],
  isCommentSending: false,
  isCommentSendError: false,
  isFilmByIdLoading: true,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsData(void 0, {})).toEqual(mockInitialState);
});


describe(`Reducer should update state`, () => {
  it(`by load films`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_FILMS,
      payload: films,
    })).toEqual(Object.assign({}, mockInitialState, {
      allFilms: films,
      filteredFilms: films
    }));
  });

  it(`by load promo film`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_PROMO,
      payload: films[0],
    })).toEqual(Object.assign({}, mockInitialState, {
      promoFilm: films[0]
    }));
  });


  it(`by load comments`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    })).toEqual(Object.assign({}, mockInitialState, {
      comments
    }));
  });

  it(`by load favorite films`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    })).toEqual(Object.assign({}, mockInitialState, {
      favoriteFilms: films
    }));
  });

  it(`by increase shown films number`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.SHOW_MORE_FILMS
    })).toEqual(Object.assign({}, mockInitialState, {
      numberFilmsShown: 0
    }));
  });

  it(`by reset shown films number`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.CLEAR_SHOWN_FILMS
    })).toEqual(Object.assign({}, mockInitialState, {
      numberFilmsShown: filmsCount.PER_STEP
    }));
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();
    const filmsFromServer = films.map((film) => adaptFilmToServer(film));

    apiMock
      .onGet(`/films`)
      .reply(200, filmsFromServer);

    return filmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: films,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmPromoLoader = fetchPromoFilm();
    const filmFromServer = adaptFilmToServer(films[0]);

    apiMock
      .onGet(`/films/promo`)
      .reply(200, filmFromServer);

    return filmPromoLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: films[0],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();
    const filmsFromServer = films.map((film) => adaptFilmToServer(film));

    apiMock
      .onGet(`/favorite`)
      .reply(200, filmsFromServer);

    return favoriteFilmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: films,
        });
      });
  });

  it(`Should make a correct API call to GET /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(1);
    const commentsFromServer = comments.map((comment) => adaptCommentToServer(comment));

    apiMock
      .onGet(`/comments/` + id)
      .reply(200, commentsFromServer);

    return commentsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: comments,
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const filmByIdLoader = fetchFilmById(1);
    const filmFromServer = adaptFilmToServer(films[0]);

    apiMock
      .onGet(`/films/${id}`)
      .reply(200, filmFromServer);

    return filmByIdLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: films[0]
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_FILM_BY_ID_LOADING,
          payload: false,
        });
      });
  });

  it(`Should make a correct API call to POST /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const postCommentLoader = sendComment(1, {rating: `3`, comment: `comment`});

    apiMock
      .onPost(`/comments/` + id, {rating: `3`, comment: `comment`})
      .reply(200, [{fake: true}]);

    return postCommentLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_COMMENT_SENDING,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/films/` + id,
        });
      });
  });

  it(`Should make a correct API call to /favorite/:film_id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const sendFavStatusLoader = sendFavoriteStatus(1, true);
    const filmFromServer = adaptFilmToServer(films[0]);

    apiMock
      .onPost(`/favorite/${id}/0`)
      .reply(200, filmFromServer);

    return sendFavStatusLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

});