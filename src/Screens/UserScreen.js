import React from 'react';
import { Text, View } from 'react-native';
import Users from '../Components/Users';
const UserScreen = props => {
    return (
        <Users navigation={props.navigation} />
    );
};
UserScreen.navigationOptions = {
    title: 'User List'
};
export default UserScreen;
