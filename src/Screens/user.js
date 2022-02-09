import React from 'react';
import { Text, View } from 'react-native';
const UserScreen = props => {
    const id = props.navigation.getParam('id');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is User Details and id is {id}</Text>
        </View>
    );
};
UserScreen.navigationOptions = {
    title: 'User Details'
};
export default UserScreen;