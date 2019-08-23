import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import UpdateClubBtnText from './UpdateClubBtnText';

const { width, height } = Dimensions.get('window');

export default class ClubUpdateBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.shadow}>
			<TouchableOpacity onPress={this.props.gotoSignUp}>
				<View style={styles.box1}>
					<View style={styles.box2}>
						<View style={styles.box3}>
							<View style={styles.logo}>
								<EvilIcons name="user" size={width * 0.1} />
							</View>
							<UpdateClubBtnText title={'정보 수정'} sub={'우리 동아리는요!'} />
						</View>
					</View>
				</View>
			</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box1: {
		width: width * 0.9,
		height: height * 0.1,
		backgroundColor: 'white',
		borderRadius: 5,
	
	},
	shadow:{
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
		marginHorizontal: width * 0.04,
		justifyContent: 'center',
	},
});
