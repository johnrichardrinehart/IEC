import React from 'react'
import { Font } from 'expo';
import ModalUserID from './HomeComponents/ModalUserID'
import HomeScreen from './HomeComponents/HomeScreen'

export default class extends React.Component {
    state = {
        // width: undefined,
        // height: undefined,
        // viewLoaded: false,
        fontLoaded: false,
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto_medium: require('../../assets/fonts/Roboto-Medium.ttf')
        })
        this.setState({ fontLoaded: true });
    }

    render() {
        if (this.state.fontLoaded && this.props.userID) {
            return <HomeScreen />
        } else {
            return <ModalUserID setUserID={this.props.setUserID} />
        }
    }

    // _onLayout = ev => {
    //     let { width, height } = ev.nativeEvent.layout
    //     this.setState({ width, height, viewLoaded: true })
    //     console.log("Obtained dimensions.")
    //     console.log(ev.nativeEvent.layout)
    // }
}