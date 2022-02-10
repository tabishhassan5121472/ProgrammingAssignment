import React from 'react';
import { Text, ScrollView } from 'react-native';
const Albums = props => {
    return (
        <ScrollView>
            <Text style={{ padding: 10, fontSize: 44, }}>{props.Album.title}</Text>
        </ScrollView>
    );
};
export default Albums;