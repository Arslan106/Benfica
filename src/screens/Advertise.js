import React, { Component } from 'react';

import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import CustomBackHeader from '../components/helper/headers/header-back-button'
import { scale, verticalScale } from '../components/helper/scaling';

export default class Advertise extends React.Component {
    render() {
        console.log('here in advertise')
        return (
            <View style={{ flex: 1 }}>
                <CustomBackHeader nav={this.props.navigation} title={'Anúncios'.toUpperCase()} />
                <View style={{ flex: 1,}}>
                    <TouchableOpacity
                        onPress={() => {
                            let nav_to = "Advertise"
                            console.log('this . popssss', this.props.navigation)
                            const { navigate, dispatch } = this.props.navigation;
                            navigate(nav_to)
                        }}
                        style={{ padding: scale(12), }}>

                        <ImageBackground
                            style={{ borderRadius: 5, backgroundColor: 'rgba(52, 52, 52, 0.8)', height: verticalScale(60), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                        // source={{ uri: 'https://i.picsum.photos/id/432/200/100.jpg' }}
                        >
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'Anuncie aqui'.toUpperCase()}</Text>
                        </ImageBackground>

                    </TouchableOpacity>

                </View>


            </View>
        )
    }
}