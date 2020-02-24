/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import { scale, verticalScale } from '../components/helper/scaling'
import {
    Header,
    Button,
    Body,
    Form,
    Item as FormItem,
    Input,
    Label,
    Title,
} from 'native-base';
import MainIcon from '../../assests/icon.png'
import CheckBox from 'react-native-check-box'
const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    slide2: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    slide3: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default class SwiperScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LiteratureIsChecked: false,
            TourismIsChecked: false,
            FoodIsChecked: false,
            AdvertiserIsChecked: false,
            SportsIsChecked: false,
            EntertainmentIsChecked: false,
            BeautyIsChecked: false,
            PropertyIsChecked: false,
            nextButton: false,

        }
    }

    _jumpSlide = () => {
        this._swiper.scrollBy(1)// where n is the number of slides to move
    };
    registerUser = () => {
        Alert.alert(
            'ACCEPT TERMS',
            'By registering an account, you agree to our Terms & Conditions',
            [
                {
                    text: 'CANCEl',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'ACCEPT', onPress: () => this.props.navigation.navigate('Tabs') },
            ],
            { cancelable: false },
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Swiper scrollEnabled={false} loop={true} ref={(swiper) => { this._swiper = swiper; }} paginationStyle={{ justifyContent: 'center', alignItems: 'flex-end', bottom: 80, left: 0, top: 0, right: 0 }} style={styles.wrapper} >
                    <View style={styles.slide1} >
                        <View style={{ flex: 2, paddingHorizontal: 24, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Image style={{ width: 250, height: 250 }} source={MainIcon} resizeMode={'contain'}></Image>
                            <Text style={styles.text}>BENVINDO AO BENFICA</Text>
                            <Text style={{
                                marginTop: 20,
                                color: 'black',
                                fontSize: 15,
                                alignSelf: 'center',
                                textAlign: 'center'
                            }}>{'Para começar a explorar as maravilhosas funcionalidades que a nossa app oferece por favor crie o seu perfil'}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 20, paddingHorizontal: 20 }}>
                            <Button style={{
                                backgroundColor: '#262626',
                                width: '100%', alignItems: 'center',
                                justifyContent: 'center'
                            }}
                                onPress={this._jumpSlide} >
                                {/* <Text style={{ color: 'white' }}>GET STARTED</Text> */}
                                <Text style={{ color: 'white' }}>{'INICIAR'}</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <View style={{ flex: 0.5, paddingHorizontal: 24, justifyContent: 'flex-end' }}>
                            <Text style={styles.text}>
                                {'REGISTER'}
                            </Text>
                            <Text style={{}}>
                                {'Please Create your profile'}
                            </Text>
                        </View>
                        <View style={{ flex: 2, paddingHorizontal: 20, justifyContent: 'space-around' }}>
                            <Form>
                                <FormItem floatingLabel last>
                                    <Label>Nome do utilizador</Label>
                                    <Input onChangeText={(name) => this.setState({ userName: name })} />
                                </FormItem>
                                <FormItem floatingLabel last>
                                    <Label>Email</Label>
                                    <Input onChangeText={(email) => this.setState({ email: email })} />
                                </FormItem>
                                <FormItem floatingLabel last>
                                    <Label>Palavra passe</Label>
                                    <Input onChangeText={(password) => this.setState({ password: password })} secureTextEntry={true} />
                                </FormItem>
                                <FormItem floatingLabel last>
                                    <Label>Confirmação da Palavra passe</Label>
                                    <Input onChangeText={(confirmPassword) => this.setState({ confirmPassword: confirmPassword })} secureTextEntry={true} />
                                </FormItem>
                            </Form>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                                style={{ alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Text style={{ fontSize: 15, color: 'gray' }}>Already registerd? Sign in here</Text> */}
                                <Text style={{ fontSize: 15, color: 'gray' }}>{'Já está cadastrado? assinar em aqui'}</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'flex-end', paddingBottom: 20, paddingHorizontal: 20 }}>
                            <Button style={{
                                backgroundColor: '#262626',
                                width: '100%', alignItems: 'center',
                                justifyContent: 'center'
                            }}
                                onPress={this._jumpSlide} >
                                {/* <Text style={{ color: 'white' }}>NEXT</Text> */}
                                <Text style={{ color: 'white' }}>{'PRÓXIMA'}</Text>
                            </Button>
                        </View>

                    </View>
                    <View style={styles.slide3}>
                        <View style={{ flex: 0.5, paddingHorizontal: 24, justifyContent: 'flex-end' }}>
                            <Text style={styles.text}>
                                {'GRUPOS'}
                            </Text>
                            {/* <Text style={{ fontSize: 12 }}>
                                {'One last thing....'}
                            </Text> */}
                            <Text style={{ marginTop: 10, fontSize: 10, }}>
                                {'Por favor selecione as suas área de interesse, e nós iremos mantê-lo informado'}
                            </Text>
                        </View>
                        <View style={{ flex: 2, paddingHorizontal: 20, justifyContent: 'space-around' }}>
                            <View>
                                <CheckBox
                                    style={{ marginTop: verticalScale(50) }}
                                    onClick={() => {
                                        this.setState({
                                            LiteratureIsChecked: !this.state.LiteratureIsChecked,
                                            nextButton: !this.state.LiteratureIsChecked
                                        })
                                    }}
                                    isChecked={this.state.LiteratureIsChecked}
                                    rightText={"Educação"}
                                />
                                <CheckBox
                                    style={{ marginTop: verticalScale(5) }}
                                    onClick={() => {
                                        this.setState({
                                            TourismIsChecked: !this.state.TourismIsChecked,
                                            nextButton: !this.state.TourismIsChecked
                                        })
                                    }}
                                    isChecked={this.state.TourismIsChecked}
                                    rightText={"Turismo"}
                                />
                                <CheckBox
                                    style={{ marginTop: verticalScale(5) }}
                                    onClick={() => {
                                        this.setState({
                                            SportsIsChecked: !this.state.SportsIsChecked,
                                            nextButton: !this.state.SportsIsChecked
                                        })
                                    }}
                                    isChecked={this.state.SportsIsChecked}
                                    rightText={"Desporto"}
                                />
                                <CheckBox
                                    style={{ marginTop: verticalScale(5) }}
                                    onClick={() => {
                                        this.setState({
                                            EntertainmentIsChecked: !this.state.EntertainmentIsChecked,
                                            nextButton: !this.state.EntertainmentIsChecked
                                        })
                                    }}
                                    isChecked={this.state.EntertainmentIsChecked}
                                    rightText={"Entretenimento"}
                                />
                                <CheckBox
                                    style={{ marginTop: verticalScale(5) }}
                                    onClick={() => {
                                        this.setState({
                                            FoodIsChecked: !this.state.FoodIsChecked,
                                            nextButton: !this.state.FoodIsChecked
                                        })
                                    }}
                                    isChecked={this.state.FoodIsChecked}
                                    rightText={"alimentação"}
                                />
                                <CheckBox
                                    style={{ marginTop: verticalScale(5) }}
                                    onClick={() => {
                                        this.setState({
                                            PropertyIsChecked: !this.state.PropertyIsChecked,
                                            nextButton: !this.state.PropertyIsChecked
                                        })
                                    }}
                                    isChecked={this.state.PropertyIsChecked}
                                    rightText={"habitação"}
                                />
                                <CheckBox
                                    style={{ marginTop: verticalScale(5) }}
                                    onClick={() => {
                                        this.setState({
                                            BeautyIsChecked: !this.state.BeautyIsChecked,
                                            nextButton: !this.state.BeautyIsChecked
                                        })
                                    }}
                                    isChecked={this.state.BeautyIsChecked}
                                    rightText={"Saúde e Beleza"}
                                />
                                <CheckBox
                                    style={{ marginTop: verticalScale(5) }}
                                    onClick={() => {
                                        this.setState({
                                            AdvertiserIsChecked: !this.state.AdvertiserIsChecked,
                                            nextButton: !this.state.AdvertiserIsChecked
                                        })
                                    }}
                                    isChecked={this.state.AdvertiserIsChecked}
                                    rightText={"Publicidade"}
                                />

                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Login')}
                                    style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <Text style={{ fontSize: 15, color: 'gray' }}>Already registerd? Sign in here</Text> */}
                                    <Text style={{ fontSize: 15, color: 'gray' }}>{'Já está cadastrado? assinar em aqui'}</Text>
                                </TouchableOpacity>
                            </View>



                        </View>



                        <View style={{ flex: 0.5, justifyContent: 'flex-end', paddingBottom: 20, paddingHorizontal: 20 }}>
                            <Button style={{
                                backgroundColor: '#262626',
                                width: '100%', alignItems: 'center',
                                justifyContent: 'center'
                            }}
                                onPress={() => this.registerUser()} >
                                {/* <Text style={{ color: 'white' }}>{'REGISTER'}</Text> */}
                                <Text style={{ color: 'white' }}>{'REGISTRO'}</Text>
                            </Button>
                        </View>
                    </View>
                </Swiper>

            </View>
        )
    }
}

