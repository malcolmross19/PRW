import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class SavedItem extends Component {
    render() {
        const savedItem = this.props.savedItem;
        return(
            <View key={this.props.keyval} style={styles.savedItem}>
                <Text style={styles.itemText}>{this.props.val.itemName}</Text>
            </View>
        )
    }
}

export default SavedItem


const styles = StyleSheet.create({
    savedItem: {
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
    }
})