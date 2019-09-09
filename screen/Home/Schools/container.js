import React, { Component } from 'react';
import Schools from './presenter';
import { Alert } from 'react-native';

class Container extends React.Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
	}
	render() {
		return <Schools {...this.props} AAPress={this._AAPress} BBPress={this._BBPress} CCPress={this._CCPress} onSwipeRight={this._onSwipeRight} />;
	}

	_AAPress = () => {
		this.props.navigation.navigate('Main', {
			schoolName: '상언대학교',
		});
	};

	_BBPress = () => {
		this.props.navigation.navigate('Main', {
			schoolName: '강민대학교',
		});
	};

	_CCPress = () => {
		this.props.navigation.navigate('Main', {
			schoolName: 'CC대학교',
		});
	};

}

export default Container;
