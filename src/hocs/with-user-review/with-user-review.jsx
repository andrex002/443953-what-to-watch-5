import React, {PureComponent} from 'react';

const withUserReview = (Component) => {
  return class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentRating: ``,
        comment: ``
      };
    }

    _handleRatingChange(evt) {
      this.setState({
        currentRating: evt.target.value
      });
    }

    _handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value
      });
    }

    render() {
      const {currentRating} = this.state;
      return (
        <Component {...this.props}
          currentRating={currentRating}
          handleRatingChange={this._handleRatingChange}
          handleCommentChange={this._handleCommentChange}
        />
      );
    }
  };
};

export default withUserReview;
