import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import ListItem from '../components/ListItem'
import SavedItem from '../components/SavedItem'

class ToDoScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemArray: [],
            itemText: '',
            savedItems: [],
            error: '',
            disabled: true
        };
        this.addItem = this.addItem.bind(this);
        this.clearList = this.clearList.bind(this);
        this.saveList = this.saveList.bind(this)
    }
    static navigationOptions = {
        tabBarLabel: 'Todos',
        tabBarIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                    name="event-available"
                    size={26}
                    style={{ color: tintColor }} >
                </MaterialIcons>
            )
        }
    }

    saveList() {
        let item = this.state.itemText;
        AsyncStorage.setItem('item', item);
        this.state.savedItems.push({'itemName': this.state.itemText});
        this.setState({'savedItem': item, itemText: ''})
    }

    componentWillMount() {
        this.getItems()
    }

    getItems() {
        AsyncStorage.getItem('item').then((item)=>{
            this.setState({item: item})
        })
    }

    clearList() {
        AsyncStorage.clear();
        this.setState({ savedItems: this.state.savedItems = [], item: ''})
    }

    addItem() {
        if (this.state.itemText) {
            this.state.itemArray.push({'itemName': this.state.itemText});
            this.setState({itemArray: this.state.itemArray, itemText: '', disabled: true, error: ''});
        }
    }

    validate() {
        if(!this.state.itemText) {
            this.setState({error: 'You can not leave this field blank!'})
        } else {
            this.setState({disabled: false});
            this.addItem();
        }
    }

    delItem(key) {
        this.state.itemArray.splice(key, 1);
        this.setState({itemArray: this.state.itemArray});
    }

    render() {
        let myItems = this.state.itemArray.map((val, key) => {
            return <ListItem key={key} keyval={key} val={val} delMe={ () => this.delItem(key)}/>
        });

        let savedItems = this.state.savedItems.map((val, key) => {
            return <SavedItem key={key} keyval={key} val={val} />
        });

        let error = this.state.error

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Todo List - Please add your todo item</Text>
                </View>

                <View style={styles.myBod}>
                    <Text>{error ? error : null}</Text>
                    <TextInput style={styles.input}
                               id=input
                               underlineColorAndroid="transparent"
                               placeholder="Add Item"
                               placeholderTextColor="#9a73ef"
                               autoCapitalize="none"
                               onChangeText={(itemText) => this.setState({itemText})}
                               value={this.state.itemText}/>
                    <View style={styles.btns}>
                        <TouchableHighlight
                            style={styles.submitButton}
                            disabled={!this.state.disabled}
                            onPress={this.validate()}
                            underlayColor="white">
                            <Text style={styles.submitButtonText}>
                                Save
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.submitButton}
                            onPress={this.clearList}>
                            <Text style={styles.submitButtonText}>
                                Clear
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.addItem}>
                        <Text style={styles.submitButtonText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.h1}>
                    <Text style={styles.h1Text}>Todo List</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {myItems}
                </ScrollView>
                <View style={styles.h1}>
                    <Text style={styles.h1Text}>Current State</Text>
                </View>
                <Text style={styles.itemText}>Item: {this.state.itemText}</Text>
                <ScrollView>

                    <Text style={styles.h1Text}>Saved Items</Text>
                    {savedItems}
                </ScrollView>

                <View style={styles.h1}>
                    <Text style={styles.h1Text}>This is my footer...</Text>
                </View>
            </View>
        )
    }
}




export default ToDoScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
    },
    myBod: {
        alignItems: 'center',
        //flexDirection: 'row',
        marginTop: 10,
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
        alignItems: 'flex-start',
        padding: 30,
        margin: 2,
        borderColor: '#FFF',
        borderWidth: 1,
        backgroundColor: '#9a73ef'
    },
    input: {
        alignItems: 'flex-start',
        height: 40,
        width: 150,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: '#9a73ef',
        height: 40,
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
    btns: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: 50,
    },
    h1: {
        flex: .15,
        backgroundColor: '#9a73ef',
        height: 10,
        alignSelf: 'stretch',
        marginBottom: 15,
    },
    h1Text: {
        color: '#FFF',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'left',
    },
    itemText: {
        marginLeft: 10,
    },
    formError: {
        color: '#ff0e10',
    }
});