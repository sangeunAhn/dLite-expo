import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ConfirmButton extends Component {
	static defaultProps = {
		buttonColor: '#ADCDE9',
		titleColor: '#3B3B3B',
		onPress: () => null,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={[styles.button, { backgroundColor: this.props.buttonColor }]}
				onPress={this.props.onPress}
			>
				{this.props.title == '로딩' ? (
					<ActivityIndicator color="white" />
				) : (
					<Text style={[styles.title, { color: this.props.titleColor }]}>{this.props.title}</Text>
				)}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: height*0.01,
		borderRadius: 15,
		height: height * 0.07,
		shadowColor: 'rgba(0,0,0, .4)', // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		elevation: 2, // Android
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
	},
});
