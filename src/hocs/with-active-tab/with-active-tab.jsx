import React, {PureComponent} from "react";
import {FilmTabs} from "../../const";

const withActiveTab = (Component) => {
  return class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmTab: FilmTabs.OVERVIEW
      };

      this._handleActiveTab = this._handleActiveTab.bind(this);
    }

    _handleActiveTab(value) {
      this.setState({
        activeTab: value
      });
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component {...this.props}
          activeTab={activeTab}
          handleActiveTab={this._handleActiveTab}
        />
      );
    }
  };
};

export default withActiveTab;
