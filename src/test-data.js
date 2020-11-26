export const film = {
  "id": 1,
  "title": "The Grand Budapest Hotel",
  "image": "img/the-grand-budapest-hotel-poster.jpg",
  "previewImage": "img/the-grand-budapest-hotel.jpg",
  "bgImage": "img/the-grand-budapest-hotel-bg.jpg",
  "bgColor": "#ffffff",
  "srcVideo": "https://some-link",
  "video": "https://some-link",
  "previewVideo": "https://some-link",
  "description": "In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.",
  "rating": {
    "score": 8.9,
    "count": 240
  },
  "director": "Wes Andreson",
  "actors": ["Bill Murray", "Edward Norton", "Jude Law", "Willem Dafoe", "Saoirse Ronan"],
  "duration": 99,
  "genre": "Comedy",
  "year": 2014,
  "isFavorite": false
};

export const films = [
  {
    "id": 1,
    "title": "The Grand Budapest Hotel",
    "image": "img/the-grand-budapest-hotel-poster.jpg",
    "previewImage": "img/the-grand-budapest-hotel.jpg",
    "bgImage": "img/the-grand-budapest-hotel-bg.jpg",
    "bgColor": "#ffffff",
    "video": "https://some-link",
    "previewVideo": "https://some-link",
    "description": "In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.",
    "rating": {
      "score": 8.9,
      "count": 240
    },
    "director": "Wes Andreson",
    "actors": ["Bill Murray", "Edward Norton", "Jude Law", "Willem Dafoe", "Saoirse Ronan"],
    "duration": 99,
    "genre": "Comedy",
    "year": 2014,
    "isFavorite": false
  },
  {
    "id": 2,
    "title": "The Grand Budapest Hotel",
    "image": "img/the-grand-budapest-hotel-poster.jpg",
    "previewImage": "img/the-grand-budapest-hotel.jpg",
    "bgImage": "img/the-grand-budapest-hotel-bg.jpg",
    "bgColor": "#ffffff",
    "video": "https://some-link",
    "previewVideo": "https://some-link",
    "description": "In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.",
    "rating": {
      "score": 8.9,
      "count": 240
    },
    "director": "Wes Andreson",
    "actors": ["Bill Murray", "Edward Norton", "Jude Law", "Willem Dafoe", "Saoirse Ronan"],
    "duration": 99,
    "genre": "Comedy",
    "year": 2014,
    "isFavorite": false
  }
];

export const comment = {
  "id": 1,
  "userId": 4,
  "userName": "Kate Muir",
  "rating": 8.9,
  "textComment": "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.",
  "date": "2019-05-08T14:13:56.569Z"
};

export const comments = [
  {
    "id": 1,
    "userId": 4,
    "userName": "Kate Muir",
    "rating": 8.9,
    "textComment": "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.",
    "date": "2019-05-08T14:13:56.569Z"
  },
  {
    "id": 2,
    "userId": 4,
    "userName": "Kate Muir",
    "rating": 8.9,
    "textComment": "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.",
    "date": "2019-05-08T14:13:56.569Z"
  },
];

export const defaultState = {
  DATA: {
    allFilms: films,
    filteredFilms: films,
    promoFilm: film,
    currentFilm: film,
    favoriteFilms: films,
    comments: comments,
    numberFilmsShown: 8,
    isCommentSending: false,
    isCommentSendError: false
  },
  FILTER: {
    activeGenre: `All genres`,
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
    name: `userName`,
    avatar: `avatar.jpg`
  }
};

export const noop = () => {};