import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

const GetUser = props => {
    return (
        <ScrollView>
            <View style={mainStyle.profileImageContainer}>
                <Image
                    style={mainStyle.profileImage}
                    source={{ uri: "https://st.depositphotos.com/2309453/3449/i/450/depositphotos_34490345-stock-photo-confident-casual-unshaven-young-man.jpg" }}
                    resizeMode="cover"
                />
                <View>
                    <Text style={mainStyle.Text}>{props.user.id}</Text>
                    <Text style={mainStyle.Text}> {props.user.name} </Text>
                    <Text style={mainStyle.Text}> {props.user.email}</Text>
                </View>
            </View>

        </ScrollView >
    );
};

mainStyle = {
    profileImageContainer: {
        flex: 1,
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: "#20232a",
        width: 300,
        height: 220,
        margin: 20,

    },
    profileImage: {
        alignSelf: 'center',
        resizeMode: 'cover',
        height: 86,
        width: 86,
        borderWidth: 2,
        borderRadius: 75,
    },
    Text: {
        textAlign: 'center', shadowRadius: 1, fontSize: 24,

    }

}
export default GetUser;