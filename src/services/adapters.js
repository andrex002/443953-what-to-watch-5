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

export {adaptFilmToClient, adaptCommentToClient};
