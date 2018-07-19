import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { nopAction } from "../actions/actions";

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.test}</h1>
        <button onClick={this.props.nopAction}>
          Click
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nopAction: nopAction,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
