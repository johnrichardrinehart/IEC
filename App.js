import React from 'react';
import AppNavigator from './components/AppNavigator';
import watchLocation from './util/watchLocation'

export default class extends React.Component {
  state = {
    userID: null,
  }

  _setUserID(userID) {
    this.setState(userID)
  }

  componentWillMount() {
    watchLocation() // Alert user if they approach any noteworthy location
  }

  render() {
    return <AppNavigator userID={this.state.userID} setUserID={this._setUserID} /> 
  }
}