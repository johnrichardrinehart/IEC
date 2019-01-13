import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'native-base';

export default class extends React.Component {
    render() {
        return (
            <Icon name={
                Platform.OS === "ios" ?
                    `ios-${this.props.name}` :
                    `md-${this.props.name}`}
                    style={this.props.style}
                    />
        )
    }
};