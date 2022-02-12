import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Photos = props => {
    return (
        <ScrollView horizontal={true} pagingEnabled={true} >
            <View>
                <Text style={{ padding: 10, fontSize: 24 }}>{props.Photo.albumId}</Text></View>
            <View>
                <TouchableOpacity onPress={() => { this.setModalVisible(!this.state.visible) }}>
                    <Image source={{ uri: props.Photo.url }} style={{ width: 200, height: 200, }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
export default Photos;