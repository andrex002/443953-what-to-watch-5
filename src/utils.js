const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const getRandomListElements = (arr) => {
  let newList = [];
  const numberElements = getRandomInteger(1, arr.length - 1);
  for (let i = 0; i < numberElements; i++) {
    newList.push(getRandomElement(arr));
  }

  return Array.from(new Set(newList));
};

const getRating = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const rating = lower + Math.random() * (upper - lower + 1);

  return rating < 10 ? rating.toFixed(1) : rating;
};

const formatFilmDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
};

const formateDate = (date) => {
  return date.toLocaleString(`en-US`, {month: `long`, day: `numeric`, year: `numeric`});
};

const getRatingLevel = (score) => {
  let ratingLevel = ``;
  if (score < 3) {
    ratingLevel = `Bad`;
  } else if (score >= 3 && score < 5) {
    ratingLevel = `Normal`;
  } else if (score >= 8 && score < 10) {
    ratingLevel = `Good`;
  } else if (score >= 8 && score < 10) {
    ratingLevel = `Very Good`;
  } else if (score === 10) {
    ratingLevel = `Awesome`;
  }
  return ratingLevel;
};

export {getRandomInteger, getRandomElement, getRandomListElements, getRating, formatFilmDuration, formateDate, getRatingLevel};