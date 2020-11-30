import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  return class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilmCard: ``
      };

      this._handleFilmCardHover = this._handleFilmCardHover.bind(this);
    }

    _handleFilmCardHover(filmId) {
      this.setState({
        activeFilmCard: filmId
      });
    }

    render() {
      const {activeFilmCard} = this.state;

      return (
        <Component {...this.props}
          activeFilmCard={activeFilmCard}
          onFilmCardHover={this._handleFilmCardHover}
        />
      );
    }
  };
};

export default withActiveCard;
