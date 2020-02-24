import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { scale, verticalScale } from '../scaling';


class HeaderLogo extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          // this.props.navigate.popToTop();
        //   this.props.navigate.navigate("HomeTab");
        //   this.props.selectTab(0);
          
        //    EventRegister.emit(SLIDE_TO_COMPONENT, {
        //      slide_to_section: "home",
        //    });
        }}
      >
        <Image
          style={{
            height: verticalScale(30),
            // marginLeft: verticalScale(8),
            // marginTop: verticalScale(25),
            width: scale(155)
          }}
          source={require('../../../../assests/mainicon.jpeg')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}

export default HeaderLogo;
