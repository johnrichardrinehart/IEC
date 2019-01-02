import React from "react";
import {Button} from 'native-base';
import NativeIcon from './nativeIcon';

export default class extends React.Component {
  state = {
    clicked: false, // default
    name: this.props.name, // default
  };

  _onclick = () => {
    if (this.props.clickedName) {
      this.setState({
        name: this.props.isClicked ? this.props.name : this.props.clickedName,
      })
    }
    this.props.clickHandler();
  }

  render() {
    return (
      <Button transparent onPress={this._onclick}>
        <NativeIcon name={this.state.name} />
      </Button>
    )
  }
};