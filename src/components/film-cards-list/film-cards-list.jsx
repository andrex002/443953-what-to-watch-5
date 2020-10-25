import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

class FilmCardsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmCard: null
    };

    this.handleHoverFilmCard = this.handleHoverFilmCard.bind(this);
  }

  handleHoverFilmCard(filmId) {
    this.setState({
      activeFilmCard: filmId
    });
  }

  render() {
    const {films, onFilmCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <FilmCard
              id={film.id}
              key={film.id}
              title={film.title}
              image={film.image}
              handleHoverFilmCard={this.handleHoverFilmCard}
              onFilmCardClick={onFilmCardClick}
              srcVideo={film.video}
              isActive={film.id === this.state.activeFilmCard}
            />
          );
        })}
      </div>
    );
  }
}

FilmCardsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  })),
  onFilmCardClick: PropTypes.func.isRequired
};

export default FilmCardsList;
