import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import GetPhoto from './GetPhoto';
const Photo = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/photos/')
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
                                        props.navigation.navigate('Show', {
                                            url: item.url
                                        })
                                    }
                                >
                                    <View>
                                        <GetPhoto Photo={item} />
                                    </View>
                                </TouchableOpacity>
                        }
                    />
                )}
        </View>
    );
};
export default Photo;