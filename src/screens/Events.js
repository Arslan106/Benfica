import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import CustomBackHeader from '../components/helper/headers/header-back-button'
import SearchBar from '../components/helper/searchBar';
import { Icon, } from 'react-native-elements'
import { scale, verticalScale } from '../components/helper/scaling';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';

export default class Events extends React.Component {
    renderEvents = () => {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <ImageBackground source={require('../../assests/13.jpeg')} resizeMode='stretch' style={{ height: 160, width: null, flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: verticalScale(6), marginHorizontal: scale(6), justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ alignItems:'center',justifyContent:'center', padding: scale(6), backgroundColor: 'rgba(52, 52, 52, 0.8)', height: verticalScale(25) }}>
                                        <Text style={{ color: 'white' }}>
                                            {'ATTEND?'}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon color={'gray'} name="heart" type="entypo" size={20} />
                                    </TouchableOpacity>
                                </View>
                                {/* <View style={{backgroundColor:'green', flex:1,flexDirection:'row', justifyContent:'space-between'}}>
                                    <View>

                                    </View>
                                    <View>

                                    </View>

                                </View> */}

                            </ImageBackground>
                        </CardItem>
                        <CardItem>
                            <Text style={{ fontWeight: 'bold' }}>
                            {'Nome do evento : Feira do Vinho na Marginal'}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <View style={{ flexDirection: 'column', }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Icon
                                        color={'black'} name="clock" type="feather" size={16}>
                                    </Icon>
                                    <Text style={{ marginLeft: scale(6) }}>
                                        {'Date : Junho 2020'}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: verticalScale(2) }}>
                                    <Icon
                                        color={'black'} name="map-pin" type="feather" size={16}>
                                    </Icon>
                                    <Text style={{ marginLeft: scale(6) }}>
                                        {'Memorial a Escravatura Ruínas de Cabolombo, Benfica'}
                                    </Text>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomBackHeader nav={this.props.navigation} title={'Eventos'} />
                <View style={{ flex: 1, }}>
                    <SearchBar />
                    <View style={{ flex: 1, paddingHorizontal: scale(12) }}>
                        {this.renderEvents()}
                    </View>
                </View>


            </View>
        )
    }
}