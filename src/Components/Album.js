import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ToastAndroid, TouchableOpacity } from 'react-native';
import GetAlbum from './GetAlbum'
const Album = props => {
    const ids = props.navigation.getParam('id');
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/Albums/')
            .then((response) => response.json())
            .then((json) => {
                if (ids > 0) {
                    json = json.filter((item) => item.userId == ids)
                    console.log(json);
                }
                setUsers(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        console.log(ids);
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

                                        props.navigation.navigate('Photo', {
                                            id: item.id
                                        })
                                    }
                                >
                                    <View>

                                        <GetAlbum Album={item} />
                                    </View>
                                </TouchableOpacity>
                        }
                    />
                )}
        </View>
    );
};
export default Album;