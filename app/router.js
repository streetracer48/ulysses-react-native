import React, { Component } from 'react'
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';
import AddBook from "./screens/AddBok"
import Bookcase from "./screens/Bookcase"
import EditBooks from "./screens/EditBook"
import Profile from "./screens/Profile"
import Explore from "./screens/explore"
import Lists from "./screens/Lists"

let screen = Dimensions.get('window');


export const Tabs = createBottomTabNavigator({
 
    'Bookcase':{
        screen:Bookcase,
        navigationOption:{
            tabBarLabel:'Bookcase',
            tabBarIcon:({tintColor}) => <Icon name="open-book" type="entypo" size={28} color="tintColor"/>
        }
    },

    'Explore': {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({tintColor}) => <Icon name="ios-map" type="ionicon" size={28} color={tintColor}/>
        },
    },

    'AddBook': {
        screen:AddBook,
        navigationOption:{
            tabBarLabel:'AddBook',
            tabBarIcon:({tintColor}) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor}/>
        }
    },
    
    'Lists':{
        screen:Lists,
        navigationOption:{
            tabBarLabel:'Lists',
            tabBarIcon:({tintColor}) => <Icon  name="" type="ionicon" size="28" color={tintColor}/>
        }
    },  

    'My Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor}/>
        },
    },


});

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            Tabs: {
                screen: Tabs,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },

        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );
};