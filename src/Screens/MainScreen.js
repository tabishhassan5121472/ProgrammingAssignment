import React, { useEffect } from 'react';
import { Image, Text, View, Dimensions } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const FullPhoto = props => {

    const url = props.navigation.getParam('url');

    useEffect(() => {
        console.log(url);
    }, []);


    return (
        <View >
            <Image source={{ uri: url }} style={{ height: deviceHeight, width: deviceWidth }} />
            {/* 
            <Image source={props.uri}
                
            </Image> */}
        </View>
    );
};

FullPhoto.navigationOptions = {
    title: 'Full Photo'
};

export default FullPhoto;
