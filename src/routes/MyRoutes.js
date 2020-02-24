import React, { Component } from 'react';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import SwiperScreen from '../screens/swiperScreen'
import Home from '../screens/Home'
import Messages from '../screens/messages'
import Advertise from '../screens/Advertise'
import Events from '../screens/Events'
import DrawerContent from '../components/helper/Drawers'
import WhishList from '../screens/WhishList'
import Login from '../screens/Login'
import UpdateProfile from '../screens/UserProfile'
import Categories from '../screens/Categories'
import { scale, verticalScale } from '../components/helper/scaling'
const AppNavigator = createStackNavigator(
    {
    
        SwiperScreen: {
            screen: SwiperScreen
        },
        
        // Home: {
        //     screen: Home
        // },
        // Login: {
        //     screen: Login
        // },
    },
    {
        headerMode: 'none',
    }
);
const TabNav = createBottomTabNavigator({
    Início: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon type='EvilIcons' name='home' size={20} style={{ color: focused ? "#ee3818" : "gray" }} />
                );
            }
        }
    },
    Categoria: {
        screen: Categories,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon type='EvilIcons' size={18} name='cube' style={{ color: focused ? "#ee3818" : "gray" }} />
                );
            }
        }
    },

    'Desejos': {
        screen: WhishList,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon type='EvilIcons' size={18} name='bookmark' style={{ color: focused ? "#ee3818" : "gray" }} />
                );
            }
        }
    },
    Conta: {
        screen: UpdateProfile,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon type='EvilIcons' size={18} name='user' style={{ color: focused ? "#ee3818" : "gray" }} />
                );
            }
        }
    }

}, {
    tabBarOptions: {
        activeTintColor: '#ee3818',
        // backgroundColor: '#201f2d'
        // inactiveTintColor: "#363636",
        inactiveTintColor: "gray",
        showIcon: true,
        labelStyle: {
            fontSize: scale(11),
            fontWeight: 'bold',
            textTransform: "uppercase",
            // paddingTop: 10
        },

        style: {
            backgroundColor: "#FFF",
            paddingVertical: 10,
            height: scale(50),
            marginBottom: 0,
            shadowOpacity: 0.05,
            shadowRadius: 10,
            shadowColor: "#000",
            shadowOffset: { height: 0, width: 0 }
        }
    }
}
);
const RootStack = createStackNavigator(
    {


        Tabs: {
            screen: TabNav,
            navigationOptions: ({ navigation }) => {
                return {
                    gesturesEnabled: false,
                    header: null
                }
            }
        },
        AppNavigator: {
            screen: AppNavigator
        },
        Login: {
            screen: Login
        },
        // Home: {
        //     screen: Home
        // },
        Messages: {
            screen: Messages
        },
        Advertise: {
            screen: Advertise
        },
        WhishList: {
            screen: WhishList
        },
        Events: {
            screen: Events
        },
        UpdateProfile: {
            screen: UpdateProfile
        },
        // Categories:{
        //     screen:Categories
        // }



        // AppNavigator: { screen: AppNavigator },
        // TabNav: { screen: TabNav },
        // Menu: { screen: Menu },
    },
    {
        headerMode: 'none',
        initialRouteName: 'AppNavigator'
    }
)
const Drawer = createDrawerNavigator(
    {
        MAIN: RootStack,
    },
    {
        contentComponent: DrawerContent,
        drawerWidth: 300,
        drawerPosition: 'left',
        navigationOptions: {

        }
    }
)

const Root = createAppContainer(Drawer);

export default Root;


