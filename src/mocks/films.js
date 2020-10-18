import {nanoid} from 'nanoid';
import {FILMS_COUNT, TITLES, POSTERS, GENRES, DIRECTORS, ACTORS, DESCRIPTION_TEXTS, REVIEW_TEXTS} from '../const';
import {getRandomInteger, getRandomElement, getRandomListElements, getRating} from '../utils';

const generateReviewInfo = () => {
  return {
    author: `AndreX`,
    text: getRandomElement(REVIEW_TEXTS),
    rating: getRating(0, 10),
    date: getRandomInteger(new Date().setFullYear(new Date().getFullYear() - 10), Date.now())
  };
};

const getReviews = (count) => {
  return new Array(count).fill(``).map(generateReviewInfo);
};

const generateFilmInfo = () => {
  return {
    id: nanoid(),
    title: getRandomElement(TITLES),
    description: getRandomElement(DESCRIPTION_TEXTS),
    image: getRandomElement(POSTERS),
    genre: getRandomElement(GENRES),
    year: getRandomInteger(1990, 2020),
    duration: getRandomInteger(30, 180),
    director: getRandomElement(DIRECTORS),
    actors: getRandomListElements(ACTORS),
    rating: {
      score: getRating(0, 10),
      count: getRandomInteger(1, 500)
    },
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: getReviews(getRandomInteger(1, 10))
  };
};

const films = new Array(FILMS_COUNT).fill(``).map(generateFilmInfo);

const promoFilm = {
  id: nanoid(),
  title: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  year: 2020,
  image: `the-grand-budapest-hotel-poster.jpg`,
  bgImage: `bg-the-grand-budapest-hotel.jpg`
};

export {films, promoFilm};