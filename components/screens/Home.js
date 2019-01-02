import React from 'react';
import { Container, Header, Left, Body, Title} from 'native-base';
import {Font} from 'expo';
import CardsStops from './HomeComponents/CardsStops';

export default class extends React.Component {
    state = {
        fontLoaded: false,
    }

    _header = () => {
        return (
            <Header>
                <Left />
                <Body>
                    <Title>Stops</Title>
                </Body>
            </Header>
        )
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto_medium: require('../../assets/fonts/Roboto-Medium.ttf')
        })
        this.setState({ fontLoaded: true });
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <Container>
                    {this._header()}
                    <CardsStops navigation={this.props.navigation} />
                </Container>
            )
        } else {
            return <Container />
        }
    }
}