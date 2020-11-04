const ActionType = {
  CHANGE__FILTER: `CHANGE__FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  CLEAR_SHOWN_FILMS: `CLEAR_SHOWN_FILMS`
};

const ActionCreator = {
  changeFilter: (genre) => ({
    type: ActionType.CHANGE__FILTER,
    payload: genre
  }),
  getFilmByGenre: (genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS
  }),
  clearShownFilms: () => ({
    type: ActionType.CLEAR_SHOWN_FILMS
  })
};

export {ActionType, ActionCreator};
