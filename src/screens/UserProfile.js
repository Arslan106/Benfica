import React, { Component } from 'react';
import CustomBackHeader from '../components/helper/headers/header-back-button'
import { scale, verticalScale } from '../components/helper/scaling';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
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
import { connect } from 'react-redux';
import { Avatar } from 'react-native-elements'


export default class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFaceDetected: false,
            cameraType: 'back',
            faces: '',
            first_name: 'Mark',
            last_name: 'Jhon',
            contact_no: '',
            email: 'Mark@gmail.com',
            dbKey: '',
            signin_in_progress: false
        };
    }
    componentWillMount = () => {


        // this.setState({
        //     first_name: this.props.user.firstName,
        //     last_name: this.props.user.lastName,
        //     email: this.props.user.email,
        //     contact_no: this.props.user.phoneNumber,
        //     profileUrl: this.props.user.coverImage

        // })

        // new MyStorage().getDbKey().then(result => {
        //     console.log('resilt is ', result)
        //     this.setState({
        //         dbKey: result
        //     })
        // })
    };

    Update = () => {
        // this.setState({
        //     signin_in_progress: true
        // })

        // console.log('update pressed')
        // var db = firebase.database();
        // var ref = db.ref().child(`providers/${this.state.dbKey}`).update({
        //     firstName: this.state.first_name,
        //     lastName: this.state.last_name,
        //     email: this.state.email

        // }).then(data => {
        //     console.log('firebase updation is: ', data)
        //     this.setState({
        //         signin_in_progress: false
        //     })
        //     alert('Your Data is Updated Successfully')
        // })
        //     .catch(err => {
        //         console.log('error in updaiton is: ', err)
        //         this.setState({
        //             signin_in_progress: false
        //         })
        //         alert('Error in Updating Data')
        //     })

        // console.log('in update', ref)

    }


    handleFirstName = (text) => {
        this.setState({ first_name: text })
        console.log(this.state.first_name)
    }
    handleLastName = (text) => {
        this.setState({ last_name: text })
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }

    activateField = (id) => {
        this.setState({ active_input_id: id });
    }
    deActivateField = () => {
        this.setState({ active_input_id: -1 });
    }

    drawInputItem = (editable, id, label, placeholder, value, input_handler) => {
        return (
            <View
                style={{
                    height:verticalScale(50),
                    // backgroundColor: 'orange',
                    paddingTop: verticalScale(4),
                    width: '100%'
                }}
            >

                <Text
                    style={{
                        color: 'black',
                        fontSize: scale(11),
                    }}
                >
                    {label}
                </Text>

                <View style={{
                    flexDirection: "row",
                    borderColor: this.state.active_input_id == id ? "#FF8500" : "#858585",
                    borderBottomWidth: 1,
                    marginTop: verticalScale(2),
                    // backgroundColor: 'green',
                    flex:1,
                    // height: verticalScale(40),
                    alignItems: "center",
                }} >
                    {
                        <TextInput
                            editable={editable}
                            value={value}
                            placeholder={placeholder}
                            underlineColorAndroid='transparent'
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholderTextColor={'gray'}
                            onChangeText={input_handler}


                            style={{
                                flex: 0.85,
                                color: editable === true ? "#858585" : 'gray',
                                width: "100%",
                                fontSize: scale(12),
                                paddingLeft: scale(12),
                                paddingRight: scale(12),
                            }}
                            onFocus={() => {
                                this.activateField(id)
                            }}
                            onBlur={() => {
                                this.deActivateField();
                            }}
                        />

                    }
                </View>
            </View>

        )

    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View style={styles.container}>
                <CustomBackHeader nav={this.props.navigation} title={'Perfil'} />
                <ScrollView>
                    <View style={styles.header}>
                        <Avatar rounded size={120} style={styles.avatar} showEditButton source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
                        {/* <Avatar
                            rounded
                            title="MD"
                            size={100}
                            showEditButton
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                            }}
                        /> */}
                        {/* {this.state.profileUrl == '' ?
                            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                            :
                            <Image style={styles.avatar} source={{ uri: this.state.profileUrl }} />

                        } */}
                    </View>

                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            {this.drawInputItem(true, 0, "Primeiro Nome", null, this.state.first_name, this.handleFirstName)}
                            {this.drawInputItem(true, 1, "Apelido", null, this.state.last_name, this.handleLastName)}
                            {this.drawInputItem(true, 2, "Email", null, this.state.email, this.handleEmail)}


                        </View>
                    </View>

                </ScrollView>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', paddingHorizontal: scale(12) }}>
                    <Button full style={{ backgroundColor: '#262626', borderRadius: scale(5) }}
                    >
                        {/* <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>{'Update'}</Text> */}
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>{'Atualizar'}</Text>
                    </Button>


                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
    welcome: {
        flex: 2,

        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: "#262626",
        // backgroundColor:'red',
        height: 100,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "transparent",
        marginBottom: 10,
        alignSelf: 'center',
        // marginLeft:scale(10),
        position: 'absolute',
        marginTop: scale(20)
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        flex: 1,
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },

});

