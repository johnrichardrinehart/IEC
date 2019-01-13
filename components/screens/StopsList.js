import React from 'react';
import { Container, Header, Body, Title } from 'native-base';
import StopsCard from './StopsListComponents/StopsCard';

export default class extends React.Component {
    _header = () => {
        return (
            <Header>
                <Body>
                    <Title>Stops</Title>
                </Body>
            </Header>
        )
    }

    render() {
        return (
            <Container>
                {this._header()}
                <CardsStops navigation={this.props.navigation} />
            </Container>
        )
    }
}