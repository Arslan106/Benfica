import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import CustomLogoHeader from '../components/helper/headers/header';
import Swiper from 'react-native-swiper';
import { scale, verticalScale } from '../components/helper/scaling'
import AutoHeightImage from 'react-native-auto-height-image';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';
import {food} from '../../assests/hotel.jpg'

let sliderBannerData = []

const styles = StyleSheet.create({

    sliderBoxView: {
        position: 'absolute',
        width: '100%',
        top: verticalScale(150),
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row'

    },
    boxView: {
        height: verticalScale(60),
        width: scale(80),
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: scale(5),
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        paddingHorizontal: scale(2),

    },
    boxIconView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    boxTextView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }

})



export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderBannerData : [
                require('../../assests/14.jpeg'),
                require('../../assests/15.jpeg'),
                require('../../assests/3.jpeg'),
                require('../../assests/5.jpeg'),
            ]

        }
       
    }




    createBannersSlider = () => {
        console.log('sliderBannerData', sliderBannerData)
        return (
            <View style={{ marginBottom: verticalScale(40) }}>
                <Swiper style={{ height: verticalScale(180) }}
                    autoplay={true}
                    dot={<View style={{
                        backgroundColor: 'transparnet',
                        // borderColor: 'white',
                        // shadowColor: '#000',
                        // shadowOffset: {
                        //     width: 0,
                        //     height: 2
                        // },
                        // shadowOpacity: 0.9,
                        // elevation: 1,
                        // shadowRadius: 4,
                        // width: scale(5),
                        // height: verticalScale(3),
                        // borderRadius: verticalScale(4),
                        // marginLeft: scale(2),
                        // marginRight: scale(2),
                        // // top: 18,
                        // paddingBottom: verticalScale(12),

                    }} />}
                    activeDot={
                        <View style={{
                            backgroundColor: 'transparent',
                            // width: scale(6),
                            // height: verticalScale(3),
                            // // marginTop: verticalScale(24),
                            // borderRadius: verticalScale(4),
                            // marginLeft: scale(2),
                            // marginRight: scale(2),
                            // top: 18
                        }} />

                    }
                >
                    {
                        this.state.sliderBannerData.map((img, i) => {
                            console.log('hereee i am ', img)
                            return (
                                <TouchableOpacity
                                    key={i}
                                    activeOpacity={img.navigate_to != undefined ? 0.4 : 1}

                                >
                                    <View style={{}}>

                                        <View key={i}>
                                            <Image
                                                style={{ width: '100%', height: '100%' }}
                                                source={img}
                                                resizeMode='stretch'
                                            // width={Dimensions.get('window').width}

                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }

                </Swiper>
                <View style={styles.sliderBoxView}>
                    <TouchableOpacity style={styles.boxView}>
                        <View style={styles.boxIconView}>
                            <Icon color={'gray'} name="heart" type="entypo" size={20} />

                        </View>
                        <View style={styles.boxTextView}>
                            <Text style={{ fontSize: scale(8), fontWeight: 'bold', color: 'gray' }}>
                                {/* {"FAVOURITES"} */}
                                {"FAVORITAS"}
                            </Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxView}>
                        <View style={styles.boxIconView}>
                            <Icon color={'gray'} name="notifications" type="materialIcons" size={20} />

                        </View>
                        <View style={styles.boxTextView}>
                            <Text style={{ fontSize: scale(8), fontWeight: 'bold', color: 'gray' }}>
                                {/* {"NOTIFICATIONS"} */}
                                {"NOTIFICAÇÕES"}
                            </Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxView}>
                        <View style={styles.boxIconView}>
                            <Icon color={'gray'} name="calendar" type="entypo" size={20} />

                        </View>
                        <View style={styles.boxTextView}>
                            <Text style={{ fontSize: scale(8), fontWeight: 'bold', color: 'gray' }}>
                                {/* {"CALENDAR"} */}
                                {"CALENDÁRIO"}
                            </Text>

                        </View>

                    </TouchableOpacity>

                </View>
            </View>


        );
    }




    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomLogoHeader nav={this.props.navigation} />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        {this.createBannersSlider()}
                    </View>

                    <View style={{ flex: 2, marginVertical: verticalScale(12) }}>

                        <TouchableOpacity
                            onPress={() => {
                                let nav_to = "WhishList"
                                console.log('this . popssss', this.props.navigation)
                                const { navigate, dispatch } = this.props.navigation;
                                navigate(nav_to)
                            }}
                            style={{ paddingHorizontal: scale(12), }}>

                            <ImageBackground
                                style={{ borderRadius: 5, backgroundColor: 'rgba(52, 52, 52, 0.8)', height: verticalScale(60), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                             source={require('../../assests/10.jpeg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'LISTA DE PREFERÊNCIAS'}</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            let nav_to = "Category"
                            console.log('this . popssss', this.props.navigation)
                            const { navigate, dispatch } = this.props.navigation;
                            navigate(nav_to)
                        }}
                         style={{ paddingHorizontal: scale(12), marginTop: verticalScale(12) }}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 5 }}
                                style={{ height: verticalScale(80), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                                source={require('../../assests/12.jpeg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'CATEGORIAS'}</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                        <View style={{ paddingHorizontal: scale(12), marginTop: verticalScale(12) }}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 5 }}
                                style={{ height: verticalScale(80), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                                source={require('../../assests/9.jpeg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'OFERTAS'}</Text>
                            </ImageBackground>

                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                let nav_to = "Messages"
                                console.log('this . popssss', this.props.navigation)
                                const { navigate, dispatch } = this.props.navigation;
                                navigate(nav_to)
                            }}
                            style={{ paddingHorizontal: scale(12), }}
                            style={{ paddingHorizontal: scale(12), marginTop: verticalScale(12) }}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 5 }}
                                style={{ height: verticalScale(80), width: '100%', alignItems: 'center', justifyContent: 'center' }}
                                source={require('../../assests/11.jpeg')}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'MENSAGENS'}</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.5, backgroundColor: '#201f2d', alignItems: 'center', justifyContent: 'center', }}>
                        {/* <Text style={{ alignSelf: 'center', color: 'white' }}>Benfica</Text> */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <SocialIcon
                                    type="facebook"
                                    onPress={() => {
                                        alert('facebook');
                                    }}
                                />
                                <Text style={{ color: 'white', textAlign: 'center' }}>facebook</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <SocialIcon

                                    type="google"
                                    onPress={() => {
                                        alert('google');
                                    }}
                                />
                                <Text style={{ color: 'white', textAlign: 'center' }}>Gmail</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <SocialIcon

                                    type="twitter"
                                    onPress={() => {
                                        alert('google');
                                    }}
                                />
                                <Text style={{ color: 'white', textAlign: 'center' }}>Twitter</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}