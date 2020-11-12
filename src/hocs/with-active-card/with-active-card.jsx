import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  return class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilmCard: ``
      };

      this._handleHoverFilmCard = this._handleHoverFilmCard.bind(this);
    }

    _handleHoverFilmCard(filmId) {
      this.setState({
        activeFilmCard: filmId
      });
    }

    render() {
      const {activeFilmCard} = this.state;

      return (
        <Component {...this.props}
          activeFilmCard={activeFilmCard}
          handleHoverFilmCard={this._handleHoverFilmCard}
        />
      );
    }
  };
};

export default withActiveCard;
