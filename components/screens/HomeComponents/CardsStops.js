import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Content, ListItem, Left, Right, Body, Text } from 'native-base';
import StopContent from './StopContent.js'

import CheckBox from '../../utils/checkbox';
import ButtonIcon from '../../utils/buttonIcon';

export default class CardsStops extends React.Component {
  state = {
    stops: [
      {
        name: `Toshiba`,
        address: `3065 Crossroads Drive`,
        city: `Redding`,
        state: `CA`,
        zip: 96003,
        qr_string: `test`,
      },
      {
        name: `Airgas`,
        address: `653 North Market Street`,
        city: `Redding`,
        state: `CA`,
        zip: 96003,
        qr_string: `http://en.m.wikipedia.org`,
      },
    ],
    isClicked: [] // click state of each arrow
  }

  componentWillMount() {
    this.state.stops.map((_, idx) => (
      this.state.isClicked[idx] = false
    ))
  }

  _updateIsClicked(idx) {
    this.setState(function (prev, props) {
      nextState = { ...prev };
      nextState.isClicked[idx] = !prev.isClicked[idx];
      return nextState;
    })
  }

  render() {
    return (
      <Content>
        {this.state.stops.map((stop, idx) => (
          <View key={idx}>
            <ListItem key={idx} style={styles.listItem}>
              <Left style={styles.listItemLeft}>
                <ButtonIcon
                  name="arrow-dropright"
                  clickedName="arrow-dropdown"
                  isClicked={this.state.isClicked[idx]}
                  clickHandler={() => this._updateIsClicked(idx)}
                />
              </Left>
              <Body style={styles.listItemBody}>
                <Text>
                  {stop.name} - {stop.city}
                </Text>
              </Body>
              <Right style={styles.listItemRight}>
                <CheckBox />
              </Right>
            </ListItem>
            {this.state.isClicked[idx] && <StopContent val={stop} navigation={this.props.navigation} />}
          </View>
        ))}
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  listItemLeft: {
    flex: .15,
  },
  listItemBody: {
    flex: .75,
  },
  listItemRight: {
    flex: .1,
    alignItems: 'center',
  },
})