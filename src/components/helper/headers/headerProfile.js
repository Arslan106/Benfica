import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import { Icon } from 'react-native-elements'
import { verticalScale, scale } from '../scaling';
import { DrawerActions } from "react-navigation";

class HeaderProfile extends Component {
    render() {
        // console.log(this.props)
        const nav = this.props.nav;
        return (
            <View style={{flex:0.3}}>
                
            </View>
            // <Icon
            //     containerStyle={{
            //         marginLeft: scale(8),
            //         marginBottom: verticalScale(4)
            //     }}
            //     size={30}
            //     name = 'user'
            //     color = "#666666"
            //     type = 'feather'
            //     onPress={
            //         () => {
            //             // nav.navigate("Drawer")
            //             // nav.toggleDrawer();
            //             // nav.navigate('DrawerOpen')
            //             // console.log(nav)
            //             // nav.dispatch(DrawerActions.toggleDrawer());
            //               this.props.nav.dispatch(DrawerActions.toggleDrawer())
            //             // this.props.navigation.navigate('DrawerToggle')
            //         }
            //     }
            // />
        );
    }
}

export default HeaderProfile;
