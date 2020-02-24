import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import { scale,verticalScale } from '../components/helper/scaling';
// import newyork from '../../assests/newyork.JPG'
import {
    Container,
    Header,
    Button,
    Body,
    Form,
    Item as FormItem,
    Input,
    Label,
    Title,
    Spinner,
} from 'native-base';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <ImageBackground
                source={require('../../assests/newyork.jpg')}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{
                    flex: 0.5, width: '80%', borderRadius: scale(10), paddingHorizontal: scale(12), backgroundColor: 'white',
                    opacity: 0.8,
                }}>
                    <View style={{flex:0.15,justifyContent:'flex-end' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            {'Login'}
                        </Text>
                    </View>
                    <View style={{ flex: 0.55 ,justifyContent:'center'}}>
                        <Form>
                            <FormItem floatingLabel last style={{borderBottomColor:'gray',}}>
                                <Label style={{ fontSize: 15, color: 'black', }}>Email</Label>
                                <Input onChangeText={(email) => this.setState({ email: email })} />
                            </FormItem>
                            <FormItem floatingLabel last style={{borderBottomColor:'gray',}}>
                                <Label style={{ fontSize: 15, color: 'black', }}>Password</Label>
                                <Input onChangeText={(password) => this.setState({ password: password })} secureTextEntry={true} />
                            </FormItem>

                        </Form>
                    </View>
                    <View style={{flex:0.15,alignItems:'center',justifyContent:'center',marginVertical:verticalScale(6)}}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('SwiperScreen')}
                            style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: 'gray',fontWeight:'bold' }}>Don't have account? Signup here</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.3,justifyContent:'center' }}>
                        <Button full style={{backgroundColor: '#262626', borderRadius:scale(5) }}
                         >
                                <Text style={{ fontSize: 15, color: 'white',fontWeight:'bold' }}> Login </Text>
                        </Button>

                    </View>


                </View>
            </ImageBackground>
        )
    }
}