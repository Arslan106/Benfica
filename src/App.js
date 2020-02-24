import React, { Component } from 'react';
import  Root from './routes/MyRoutes'
import { YellowBox } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true
        YellowBox.ignoreWarnings(['ViewPagerAndroid']);
    }

    render() {
        return (
            <Root />
        )
    }
}