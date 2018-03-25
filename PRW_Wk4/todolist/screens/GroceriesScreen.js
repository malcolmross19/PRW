import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class GroceriesScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            names: [
                {'name': 'Ben', 'id': 1},
                {'name': 'Susan', 'id': 2},
                {'name': 'Robert', 'id': 3},
                {'name': 'Mary', 'id': 4},
                {'name': 'Daniel', 'id': 5},
                {'name': 'Laura', 'id': 6},
                {'name': 'John', 'id': 7},
                {'name': 'Debra', 'id': 8},
                {'name': 'Aron', 'id': 9},
                {'name': 'Ann', 'id': 10},
                {'name': 'Steve', 'id': 11},
                {'name': 'Olivia', 'id': 12}
            ]
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Groceries',
        tabBarIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                 name="local-grocery-store"
                 size={26}
                 style={{ color: tintColor }} >
                </MaterialIcons>
            );
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>My Grocery List</Text>
                <Text>Add Item:</Text>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View key = {item.id} style = {styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default GroceriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    myred: {
        color: 'red',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#FFF',
        borderWidth: 1,
        backgroundColor: '#9a73ef'
    }
})