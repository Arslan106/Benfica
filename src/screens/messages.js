import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native'
import CustomBackHeader from '../components/helper/headers/header-back-button'
import SearchBar from '../components/helper/searchBar';
import { Icon } from 'react-native-elements'
import { scale, verticalScale } from '../components/helper/scaling';

export default class Messages extends React.Component {

    renderMessages = () => {
        return (
            <TouchableOpacity
            onPress={()=>{alert('Message Here')}}
                style={{ borderColor: 'black', borderBottomWidth: 0.5, justifyContent: 'center', height: verticalScale(50) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon color={'black'} name="disc" type="feather" size={20} />
                    </View>
                    <View style={{ flex: 1, marginLeft: scale(12), flexDirection: 'column', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>
                                {'Benfica na Mão'}
                            </Text>

                        </View>
                        <View style={{ marginTop: verticalScale(6) }}>
                            <Text style={{ color: 'gray' }}>
                                {'25/09/2019 9:30'}
                            </Text>

                        </View>
                    </View>
                    <View style={{ flex: 0.2, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                        <View>
                            <Icon color={'gray'} name="heart" type="entypo" size={20} />

                        </View>
                        <View>
                            <Icon color={'black'} name="chevron-right" type="entypo" size={20} />

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomBackHeader nav={this.props.navigation} title={'Mensagem'} />
                <View style={{ flex: 1, }}>
                    <SearchBar />
                    <View style={{ paddingHorizontal: scale(12) }}>
                        {this.renderMessages()}
                    </View>
                </View>
            </View>
        )
    }
}