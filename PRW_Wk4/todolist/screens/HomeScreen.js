import React, { Component } from 'react'
import { AppRegistry, Text, View, Button, Image, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                    name="home"
                    size={26}
                    style={{ color: tintColor }} >
                </MaterialIcons>
            )
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>PRW - React Native CRUD App</Text>
                <Text>Click a link below</Text>
            </View>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    myblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    myred: {
        color: 'red',
    },
})