import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SocialIcon, Icon } from 'react-native-elements';
import { scale, verticalScale } from './scaling';
import { Avatar } from 'react-native-elements'
import { DrawerActions } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

const _TIMEOUT = 200;
export default class DrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    sectionOne = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Avatar
                    rounded
                    title="MD"
                    size={100}
                    showEditButton
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                />
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingVertical: verticalScale(12) }}>
                        {'mark@gmail.com'}
                    </Text>
                </View>
            </View>
        )

    }
    sectionTwo = () => {
        return (
            <View style={{ flex: 1, paddingVertical: verticalScale(12) }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Home"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={30}
                                name='home'
                                color="#666666"
                                type='entypo'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Home'} */}
                                {'Início'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            // let nav_to = "WhishList"
                            let nav_to = "Desejos"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={30}
                                name='text-document'
                                color="#666666"
                                type='entypo'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {'Lista de preferéncias'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Whishlist"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={30}
                                name='newsletter'
                                color="#666666"
                                type='entypo'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Add Business'} */}
                                {'Adicionar empresa'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Messages"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={30}
                                name='message'
                                color="#666666"
                                type='entypo'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Messages'} */}
                                {'Mensagens'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Messages"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={30}
                                name='notifications-active'
                                color="#666666"
                                type='materialIcons'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Notification'} */}
                                {'Notificação'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Events"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}

                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={30}
                                name='location'
                                color="#666666"
                                type='entypo'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Events'} */}
                                {'Eventos'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Advertise"
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {
                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={25}
                                name='star'
                                color="#666666"
                                type='EvilIcons'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Advertise Here'} */}
                                {'Anuncie aqui'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Categoria"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={25}
                                name='drink'
                                color="#666666"
                                type='entypo'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Categories'} */}
                                {'Categorias'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Home"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={25}
                                name='feedback'
                                color="#666666"
                                type='materialIcons'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Feedback'} */}
                                {'Comentários'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate, dispatch } = this.props.navigation;
                            let nav_to = "Login"
                            // dispatch(DrawerActions.toggleDrawer());
                            dispatch(DrawerActions.closeDrawer());
                            setTimeout(() => {

                                navigate(nav_to);
                            }, _TIMEOUT);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ marginRight: scale(12) }}>
                            <Icon
                                containerStyle={{
                                    marginLeft: scale(8),
                                    marginBottom: verticalScale(4)
                                }}
                                size={25}
                                name='log-out'
                                color="#666666"
                                type='entypo'
                                onPress={
                                    () => {
                                    }
                                }
                            />
                        </View>
                        <View>
                            <Text>
                                {/* {'Logout'} */}
                                {'Sair'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )

    }
    sectionThree = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Image
                        style={{
                            height: verticalScale(70),
                            marginLeft: verticalScale(8),
                            // marginTop: verticalScale(25),
                            width: scale(130)
                        }}
                        resizeMode='contain'
                        source={require('../../../assests/mainicon.jpeg')} />
                </View>
                <View>
                    {/* <Text>{'ALL RIGHTS RESERVED'}</Text> */}
                    <Text>{'Todos os direitos reservados'}</Text>
                </View>
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
        )

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
                <View style={{ flex: 1, paddingHorizontal: scale(6), borderBottomWidth: 0.4 }}>
                    {this.sectionOne()}

                </View>
                <View style={{ flex: 2, paddingHorizontal: scale(6), borderBottomWidth: 0.4 }}>
                    {this.sectionTwo()}

                </View>
                <View style={{ flex: 1, paddingHorizontal: scale(6) }}>
                    {this.sectionThree()}

                </View>

            </View>
        )
    }
}