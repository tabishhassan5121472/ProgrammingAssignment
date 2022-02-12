import React from 'react';
import { Text, ScrollView } from 'react-native';
const GetAlbum = props => {
    return (
        <ScrollView>
            <Text style={{ padding: 10, fontSize: 24, }}>{props.Album.title}</Text>
        </ScrollView>
    );
};
export default GetAlbum;