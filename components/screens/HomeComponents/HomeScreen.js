import React from 'react'
import { StyleSheet } from 'react-native';
import { Container, Header, Text, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Icon from '../../utils/nativeIcon'

export default class extends React.Component {
    render() {
        return (
            <Container>
                <Header />
                <Grid onLayout={this._onLayout}>
                    <Row style={styles.cell}>
                        <Col style={styles.cell}>
                            <Button
                                rounded
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Stops')}
                            >
                                <Icon name="list">
                                </Icon>
                                <Text>
                                    View Stops
                    </Text>
                            </Button>
                        </Col>
                        <Col style={styles.cell}>
                            <Button rounded style={styles.button}>
                                <Icon name="navigate">
                                </Icon>
                                <Text>
                                    View Route
                    </Text>
                            </Button>
                        </Col>
                    </Row>
                    <Row style={styles.cell}>
                        <Col style={styles.cell}>
                            <Button rounded style={styles.button}>
                                <Icon name="add-circle">
                                </Icon>
                                <Text>
                                    Add Stop
                    </Text>
                            </Button>
                        </Col>
                        <Col style={styles.cell}>
                            <Button rounded style={styles.button}>
                                <Icon name="add">
                                </Icon>
                                <Text>
                                    Add Route
                    </Text>
                            </Button>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})