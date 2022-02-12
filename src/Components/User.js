import React from 'react';
import { Text, ScrollView } from 'react-native';
const User = props => {
    return (
        <ScrollView>
            <Text style={{ padding: 10, fontSize: 24, }}>{props.user.name}</Text>
        </ScrollView>
    );
};
export default User;