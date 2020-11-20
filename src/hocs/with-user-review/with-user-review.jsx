import React, {PureComponent} from 'react';

const withUserReview = (Component) => {
  return class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentRating: ``,
        comment: ``
      };

      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
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
      const {currentRating, comment} = this.state;
      return (
        <Component {...this.props}
          currentRating={currentRating}
          comment={comment}
          handleRatingChange={this._handleRatingChange}
          handleCommentChange={this._handleCommentChange}
        />
      );
    }
  };
};

export default withUserReview;
