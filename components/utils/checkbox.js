import React from 'react';
import {CheckBox as CB} from 'native-base';

export default class CheckBox extends React.Component {
  state = {
    checked: false,
  }

  toggleState = () => {
      this.setState({checked: !this.state.checked});
  }

  render() {
    return <CB checked={this.state.checked} onPress={this.toggleState} />
  }
}