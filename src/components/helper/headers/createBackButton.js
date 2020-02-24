import React from 'react';
import { Icon } from 'react-native-elements'

import {
    TouchableOpacity
} from 'react-native';

const CreateBackButton = (props) => {
    return (
        <TouchableOpacity style={{ marginLeft: 12 }}
            onPress={() => {
                if (props.nav_to) {
                    props.navigate.navigate(props.nav_to);
                    return;
                }
                props.navigate.goBack()
            }} >
            <Icon color={'black'} name="chevron-thin-left" type="entypo" size={26} />
        </TouchableOpacity>
    );
}

export default CreateBackButton;