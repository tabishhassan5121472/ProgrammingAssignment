import React from 'react';
import { StyleSheet, Text, View, Dimensions, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const MainScreen = props => {

    return (
        <View styles={styles.container}>
            <View >
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <Text style={styles.button1}> User Screen</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => props.navigation.navigate('Album')}>
                    <Text style={styles.button2}> Album Screen </Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => props.navigation.navigate('Photo')}>
                    <Text style={styles.button3}>Photo Screen </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

MainScreen.navigationOptions = {
    title: 'Main Screen'
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button1: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#794257",
        padding: 10,
        margin: 10,
        textAlign: 'center',
        fontSize: 30,

    },

    button2: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#357482",
        padding: 10,
        margin: 10,
        textAlign: 'center',
        fontSize: 30,
    },
    button3: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "pink",
        padding: 10,
        margin: 10,
        textAlign: 'center',
        fontSize: 30,
    },
});

export default MainScreen;
