import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
const Photos = props => {
    return (
        <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
            <View>
                <Text style={{ padding: 10, fontSize: 44 }}>{props.Photo.albumId}</Text></View>
            <View>
                <Image source={{ uri: props.Photo.url }} style={{ width: 200, height: 200, }} />
            </View>
        </ScrollView>
    );
};
export default Photos;