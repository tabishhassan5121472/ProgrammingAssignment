import React from 'react';
import { Text, View } from 'react-native';
import Album from '../Components/Album';
const AlbumScreen = props => {
    return (
        <Album navigation={props.navigation} />
    );
};
AlbumScreen.navigationOptions = {
    title: 'Album List'
};
export default AlbumScreen;
