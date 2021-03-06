import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import GetUser from './GetUser';

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

                                        props.navigation.navigate('Album', {
                                            id: item.id
                                        })
                                    }
                                >
                                    <View>
                                        <GetUser user={item} />
                                    </View>
                                </TouchableOpacity>
                        }
                    />
                )}
        </View >
    );
};
export default Users;