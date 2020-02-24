import React from 'react';
import {
    View,
    Platform,
    SafeAreaView,
    Dimensions
} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import HeaderLogo from "./headerLogo";
import HeaderProfile from './headerProfile'
import HeaderDrawer from './headerDrawer';
import { verticalScale } from '../scaling';

const DEVICES = [
    'iPhone X',
    'iPhone XS',
    'iPhone XS Max',
    'iPhone XR'
]

const DEVICE_HEIGHTS = {
    "iPhone X": 812,
    "iPhone XS": 812,
    "iPhone XS Max": 896,
    "iPhone XR": 896,
}


const CustomLogoHeader = (props) => {
    const { nav } = props;

    const { height, width } = Dimensions.get("window");


    const device_name = DeviceInfo.getModel();

    is_zoomed = false;

    if (DEVICES.includes(device_name)) {
        if (DEVICE_HEIGHTS[device_name] > height) {
            is_zoomed = true;
        }
    }

    return (
        <View style={{
            height: Platform.OS == "ios" ? (is_zoomed ? verticalScale(93.75) : verticalScale(63.75)) : verticalScale(55.75),
            backgroundColor: "#fff",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: "flex-end",
            paddingBottom: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0.2 },
            shadowOpacity: is_zoomed ? null : 0.3,
            elevation: 12,
            position: 'relative',
            borderBottomWidth: 0.4,
            borderBottomColor: "rgba(0,0,0,0.3)"
        }} >
            <HeaderDrawer nav={nav} />
            <HeaderLogo navigate={nav} />
            <HeaderProfile nav={nav} />
        </View>
    )
};

export default CustomLogoHeader;