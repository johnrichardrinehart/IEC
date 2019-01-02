import React from 'react';
import { Linking, StyleSheet } from 'react-native';
import { Text, View, Button} from 'native-base';
import NativeIcon from '../../utils/nativeIcon';
import ButtonIcon from '../../utils/buttonIcon';

export default class extends React.Component {
    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }

    render() {
        const maps_query = `${this.props.val.address}, ${this.props.val.city}, ${this.props.val.state}, ${this.props.val.zip}`;
        const encoded_maps_query = encodeURIComponent(maps_query)
        const url = `https://www.google.com/maps/search/?api=1&query=${encoded_maps_query}`;
        return (
            <View>
                <Button transparent onPress={() => Linking.openURL(url)}>
                    <Text style={styles.link}>Google Maps Link</Text>
                </Button>
                <View style={styles.qrcodeContainer}>
                    <View style={styles.qrcodeLeft}>
                        <ButtonIcon
                            name={`qr-scanner`}
                            clickHandler={() => this.props.navigation.navigate('QRCodeScanner')}
                        />
                    </View>
                    <View style={styles.qrcodeRight}>
                        {
                            this.props.navigation.getParam('qr_code', '') === this.props.val.qr_string ?
                                <NativeIcon name={`checkmark`} style={styles.check} />
                                :
                                <Text style={styles.errorText}>No Match</Text>
                        }
                    </View>
                </View >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    link: {
        fontSize: 14,
        color: `blue`,
    },
    qrcodeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: `space-between`,
        alignItems: `center`,
    },
    qrcodeLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    qrcodeRight: {
        flex: .8,
        alignItems: `flex-end`,
    },
    errorText: {
        color: `red`,
    },
    check: {
        color: `green`,
        fontSize: 28,
    }
})