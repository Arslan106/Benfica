import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import { Icon } from 'react-native-elements'
import { verticalScale, scale } from '../scaling';

import { DrawerActions } from 'react-navigation';

class HeaderDrawer extends Component {
    
    render() {
        console.log(this.props)
        const nav = this.props.nav;
        return (
            <Icon
                containerStyle={{
                    marginLeft: scale(8),
                    // marginBottom: verticalScale(4)
                }}
                size={30}
                name = 'align-justify'
                color = "#666666"
                type = 'feather'
                onPress={
                    () => {
                        // nav.navigate("Drawer")
                        // nav.toggleDrawer();
                        // nav.navigate('DrawerOpen')
                        // console.log(nav, DrawerActions, DrawerActions.toggleDrawer())
                        nav.dispatch(DrawerActions.toggleDrawer());
                    }
                }
            />
        );
    }
}

export default HeaderDrawer;
