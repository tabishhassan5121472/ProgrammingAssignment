import React from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const GetPhoto = props => {
    return (
        <ScrollView >
            <View>
                <Text style={{ padding: 10, fontSize: 24 }}>{props.Photo.id}</Text>
            </View>
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <TouchableOpacity >
                    <Image source={{ uri: props.Photo.url }} style={{ height: deviceHeight / 2, width: deviceWidth / 2, borderRadius: 10, margin: 2 }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
export default GetPhoto;