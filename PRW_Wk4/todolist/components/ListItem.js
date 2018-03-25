import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class ListItem extends Component {
    render() {
        const item = this.props.item;
        return(
            <View key={this.props.keyval} style={styles.listItem}>
                <Text style={styles.itemText}>{this.props.val.itemName}</Text>
                <TouchableOpacity onPress={this.props.delMe} style={styles.delItem}>
                    <MaterialIcons
                        name="delete"
                        size={26}>
                    </MaterialIcons>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ListItem


const styles = StyleSheet.create({
    listItem: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#7a42f4'
    },
    itemText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#7a42f4',
    },
    delItem: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7a42f4',
        padding: 10,
        bottom: 0,
        top: 0,
        right: 0,
    },
    delItemText: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }
})