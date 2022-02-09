import React from 'react';
import Users from '../Components/Users';
const HomeScreen = props => {
    return (
        <Users navigation={props.navigation} />
    );
};
HomeScreen.navigationOptions = {
    title: 'User List'
};
export default HomeScreen;