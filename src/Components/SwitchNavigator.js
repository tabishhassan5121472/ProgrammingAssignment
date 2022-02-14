import React from 'react';
import { createAppContainer } from 'react-navigation';
import StackNavigation from '../Screens/StackNavigation';
import { createSwitchNavigator } from "react-navigation";
import SplashScreen from '../Screens/SplashScreen';
const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: StackNavigation,
});


export default createAppContainer(InitialNavigator);