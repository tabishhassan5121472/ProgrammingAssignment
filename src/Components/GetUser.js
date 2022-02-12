import React from 'react';
import { Text, ScrollView } from 'react-native';
const GetUser = props => {
    return (
        <ScrollView>
            <Text style={{ padding: 10, fontSize: 24, }}>{props.user.name}</Text>
        </ScrollView>
    );
};
export default GetUser;