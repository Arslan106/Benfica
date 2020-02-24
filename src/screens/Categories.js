import React, { Component } from 'react';
import CustomBackHeader from '../components/helper/headers/header-back-button'
import SearchBar from '../components/helper/searchBar';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import { Icon, } from 'react-native-elements'
import { scale, verticalScale } from '../components/helper/scaling';
import { city } from '../../assests/city.jpg'
import { tech } from '../../assests/tech.png'
import { gym } from '../../assests/gym.jpg'
export default class Categories extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomBackHeader nav={this.props.navigation} title={'Categorias'} />
                <SearchBar />

                <View style={{ flex: 2, }}>
                    <ScrollView>
                    <TouchableOpacity
                            onPress={() => {
                                // let nav_to = "Messages"
                                // const { navigate, dispatch } = this.props.navigation;
                                // navigate(nav_to)
                            }}
                            style={{ paddingHorizontal: scale(12), }}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 5 }}
                                style={{ height: verticalScale(80), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                                source={require('../../assests/6.jpeg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'HABITAÇÃO'}</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // let nav_to = "Messages"
                                // const { navigate, dispatch } = this.props.navigation;
                                // navigate(nav_to)
                            }}
                            style={{ paddingHorizontal: scale(12), }}
                            style={{ paddingHorizontal: scale(12), marginTop: verticalScale(12) }}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 5 }}
                                style={{ height: verticalScale(80), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                                source={require('../../assests/city.jpg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'RESTAURANTES E HOTEL'}</Text>

                            </ImageBackground>

                        </TouchableOpacity>

                        <View style={{ paddingHorizontal: scale(12), marginTop: verticalScale(12) }}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 5 }}
                                style={{ height: verticalScale(80), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                                source={require('../../assests/8.jpeg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'EDUCAÇÃO'}</Text>
                            </ImageBackground>

                        </View>
                        <View style={{ paddingHorizontal: scale(12), marginTop: verticalScale(12) }}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 5 }}
                                style={{ height: verticalScale(80), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                                source={require('../../assests/16.jpeg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'RETALHO'}</Text>
                            </ImageBackground>

                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                // let nav_to = "Messages"
                                // const { navigate, dispatch } = this.props.navigation;
                                // navigate(nav_to)
                            }}
                            style={{ paddingHorizontal: scale(12), }}
                            style={{ paddingHorizontal: scale(12), marginTop: verticalScale(12) }}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 5 }}
                                style={{ height: verticalScale(80), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                                source={require('../../assests/1.jpeg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'MOBÍLIARIAS'}</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                  
                    </ScrollView>
                </View>
            </View>

        )
    }
}