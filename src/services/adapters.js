const adaptFilmToClient = (film) => {
  const adaptedFilm = Object.assign(
      {},
      {
        id: film.id,
        title: film.name,
        description: film.description,
        image: film.poster_image,
        previewImage: film.preview_image,
        genre: film.genre,
        year: film.released,
        duration: film.run_time,
        director: film.director,
        actors: film.starring,
        rating: {
          score: film.rating,
          count: film.scores_count
        },
        video: film.video_link,
        previewVideo: film.preview_video_link,
        bgImage: film.background_image,
        bgColor: film.background_color,
        isFavorite: film.is_favorite
      }
  );

  return adaptedFilm;
};

const adaptFilmToServer = (film) => {
  const adaptedFilm = Object.assign(
    {},
    {
      background_color: film.bgColor,
      background_image: film.bgImage,
      description: film.description,
      director: film.director,
      genre: film.genre,
      id: film.id,
      is_favorite: film.isFavorite,
      name: film.title,
      poster_image: film.image,
      preview_image: film.previewImage,
      preview_video_link: film.previewVideo,
      rating: film.rating.score,
      released: film.year,
      run_time: film.duration,
      scores_count: film.rating.count,
      starring: film.actors,
      video_link: film.video
    }
  );
  return adaptedFilm;
};

const adaptCommentToClient = (comment) => {
  const adaptedComment = Object.assign(
      {},
      {
        id: comment.id,
        userId: comment.user.id,
        userName: comment.user.name,
        rating: comment.rating,
        textComment: comment.comment,
        date: comment.date
      }
  );

  return adaptedComment;
};

const adaptCommentToServer = (comment) => {
  const adaptedComment = Object.assign(
      {},
      {
        comment: comment.textComment,
        date: comment.date,
        id: comment.id,
        rating: comment.rating,
        user: {
          id: comment.userId,
          name: comment.userName
        }
      }
  );

  return adaptedComment;
};

export {adaptFilmToClient, adaptCommentToClient, adaptFilmToServer, adaptCommentToServer};
