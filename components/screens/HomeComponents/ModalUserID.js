import React from 'react';
import { View, Modal, TextInput } from 'react-native';

export default class extends React.Component {
    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    onRequestClose={() => { }}
                    swipeArea={20}
                >
                    <View style={{ marginLeft: 20, marginTop: 20, width: 200, height: 100, backgroundColor: 'white' }}>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            onSubmitEditing={(event) => {
                                console.log(`IEC ID: `, event.nativeEvent.text)
                                this.props.setUserID(event.nativeEvent.text)
                            }}
                            placeholder=' IEC Employee ID'
                        />
                    </View>
                </Modal>
            </View>
        )
    }
}