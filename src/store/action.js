const ActionType = {
  CHANGE__FILTER: `CHANGE__FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`
};

const ActionCreator = {
  changeFilter: (genre) => ({
    type: ActionType.CHANGE__FILTER,
    payload: genre
  }),
  getFilmByGenre: (genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre
  })
};

export {ActionType, ActionCreator};
