import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FullPhoto from './FullPhoto';
import AlbumScreen from './AlbumScreen';
import PhotoScreen from './PhotoScreen';
import UserScreen from './UserScreen';
import MainScreen from './MainScreen';

const StackNavigator = createStackNavigator({
    Main: MainScreen,
    Home: UserScreen,
    Album: AlbumScreen,
    Photo: PhotoScreen,
    Show: FullPhoto,

});


export default createAppContainer(StackNavigator);