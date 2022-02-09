import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import User from './User';
const Users = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    return (
        <View style={{ padding: 20 }}>
            {isLoading ? <Text>Loading...</Text> :
                (
                    <FlatList
                        data={users}
                        keyExtractor={({ id }) => id.toString()}
                        renderItem={
                            ({ item }) =>
                                <TouchableOpacity
                                    onPress={() =>
                                        props.navigation.navigate('User', {
                                            id: item.id
                                        })
                                    }
                                >
                                    <ScrollView>
                                        <Text style={{ padding: 10, fontSize: 44, }}>{props.user.item.name}</Text>
                                    </ScrollView>
                                </TouchableOpacity>
                        }
                    />
                )}
        </View>
    );
};
export default Users;