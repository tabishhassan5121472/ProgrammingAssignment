import React from 'react';
import { Text, View } from 'react-native';
import Photo from '../Components/Photo';
const PhotoScreen = props => {
    return (
        <Photo navigation={props.navigation} />
    );
};
PhotoScreen.navigationOptions = {
    title: 'Photo List'
};
export default PhotoScreen;
