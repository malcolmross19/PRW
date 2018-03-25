import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import ToDoScreen from './screens/ToDoScreen'
import GroceriesScreen from './screens/GroceriesScreen'

const TabNav = TabNavigator(
    {
        Home: {
            path: '/',
            screen: HomeScreen,
        },
        ToDo: {
            path: '/ToDoScreen',
            screen: ToDoScreen,
        },
        Groceries: {
            path: '/GroceriesScreen',
            screen: GroceriesScreen,
        },
    },
    {
       initialRouteName: 'Home',
    },
    {
        tabBarOptions: {
            activeTintColor: '#7a42f4',
            style: {

            }
        }
    }

);

export default TabNav


