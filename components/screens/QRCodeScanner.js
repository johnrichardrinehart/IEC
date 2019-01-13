import React from 'react';
import { BarCodeScanner } from 'expo';
import { StyleSheet } from 'react-native';

export default class extends React.Component {
    handleBarCodeScanned = ({ type, data }) => {
        const cardID = this.props.navigation.getParam('cardID', null)
        this.props.navigation.navigate(
            'Home',
            { cardID, qr_code: data },
        )
    }

    render() {
        return (
            <BarCodeScanner
                onBarCodeScanned={this.handleBarCodeScanned}
                style={StyleSheet.absoluteFill}
            />
        )
    }
}