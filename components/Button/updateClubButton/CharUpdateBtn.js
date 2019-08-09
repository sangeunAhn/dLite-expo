import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import UpdateClubBtnText from './UpdateClubBtnText';

const { width, height } = Dimensions.get('window');

export default class CharUpdateBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity onPress={this.props.gotoChar}>
				<View style={styles.box1}>
					<View style={styles.box2}>
						<View style={styles.box3}>
							<View style={styles.logo}>
								<FontAwesome name="hashtag" size={width * 0.1} />
							</View>
							<UpdateClubBtnText title={'특징 수정'} sub={'이렇게 다양한 매력을 가졌답니다 :)'} />
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	box1: {
		width: width * 0.9,
		height: height * 0.1,
		backgroundColor: 'white',
		borderRadius: 5,
		shadowColor: 'rgba(0,0,0, .4)', // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		elevation: 2,
	},
	box2: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	box3: {
		flexDirection: 'row'
	},
	logo: {
		marginHorizontal: width * 0.03,
		justifyContent: 'center',
	},
});