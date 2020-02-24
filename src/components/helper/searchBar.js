import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale } from './scaling';
import { Icon } from 'react-native-elements';

const styles = {
    container: {
        width: '100%',
        paddingHorizontal: scale(16),
        paddingVertical: verticalScale(8),
        // backgroundColor: '#201f2d',
    },
    label: {
        color: 'black',
        fontSize: scale(14),
        marginVertical: verticalScale(4),
    },
    searchBox: {
        flexDirection: 'row',
        width: '100%',
        height: verticalScale(30),
        marginVertical: verticalScale(4),
        borderRadius: scale(4),
        borderWidth: 0.4,
        borderColor: 'gray'
        // backgroundColor: '#201f2d',
    },
    textInput: {
        // flex: 1,
        width:'90%',
        // backgroundColor:'orange',
        color: 'black',
        fontSize: scale(14),
        height: verticalScale(30),
        paddingHorizontal: scale(12),
        paddingVertical: 0,
        alignSelf: 'center',
    },
    buttonTitle: {
        fontSize: scale(14),
        color: 'gray',
        alignSelf: 'center',
        paddingHorizontal: scale(6)
    }
};

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        this.searchKey = '';



    }
    componentDidMount = () => {

    };

    render() {
        console.log('this.props', this.props.search)
        const { label, placeholder } = this.props;
        return (
            <View style={styles.container}>
                {label ? (
                    <Text style={styles.label}>{label}</Text>
                ) : null}
                <View style={styles.searchBox}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Icon
                            containerStyle={{
                                marginLeft: scale(8),
                                // marginBottom: verticalScale(4),
                            }}
                            size={20}
                            name='search'
                            color="black"
                            type='feather'
                        />
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.textInput}
                            value={this.state.search}
                            // placeholder={'Search'}
                            placeholder={''}
                            
                            placeholderTextColor="black"
                            returnKeyType={'search'}
                            onChangeText={(search) => {
                                this.setState({ search });
                                this.searchKey = search;
                                if (search.length === 0) {
                                    this.props.onSearch(search);
                                }
                            }}
                            onSubmitEditing={() => { this.props.onSearch(this.searchKey); }}
                        />

                    </View>

                    {this.state.search ?
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => { this.setState({ search: '' }); this.props.onSearch(''); }}
                        >
                            {/* <Image
                                source={close}
                                style={{
                                    marginLeft: scale(12),
                                    padding: 0,
                                    width: 20,
                                    height: 20,
                                    marginRight: 12,
                                }}
                                resizeMode="contain"
                            /> */}
                        </TouchableOpacity>
                        : null}
                </View>
            </View>
        );
    }
}

SearchBar.defaultProps = {
    label: null,
    onSearch: () => { },
    placeholder: '',
};

export default SearchBar;
