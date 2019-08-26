import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import AutoHeightImage from 'react-native-auto-height-image';

const { width, height } = Dimensions.get("window");

export default class ClubChars extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>

				<View style={styles.body}>
					<TouchableOpacity onPress={this._pickImage}>

						<View style={styles.image}>
							<AutoHeightImage
								width={width - 20}
								
								source={require('../../images/addPhoto5.png')}
							/>
						</View>
						<Text style={styles.warning}>부적절한 사진 업로드 시{'\n'}불이익을 받을 수 있습니다.</Text>
					</TouchableOpacity>

				</View>

				<View style={styles.bottom}>
					<Text style={styles.text}>간단한 코멘트를 입력해주세요</Text>
				</View>

			</View>
		);
	}


	// 이미지피커
	_pickImage = async () => {
		setTimeout(() => {
			this.props.changeAddLoading();
		}, 1000)
		
		const permissions = Permissions.CAMERA_ROLL;
		const { status } = await Permissions.askAsync(permissions);

		if (status === 'granted') {
			let result = await ImagePicker.launchImageLibraryAsync({
				quality: 0.4,
				// allowsEditing: true,
				// aspect: [4,3]
			});

			if (!result.cancelled) {
				await this.props.addImage(result.uri);
				this.props.changeAddLoading();
			} else {
				this.props.changeAddLoading();
			}
		}
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 1,

		backgroundColor: 'white',
		borderRadius: 10,

		shadowColor: '#E1E1E1',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 5,
		shadowRadius: 5,
		elevation: 2,

	},
	image: {
		borderTopLeftRadius: 9,
		borderTopRightRadius: 9,
		overflow: 'hidden'
	},
	warning: {
		position: 'absolute',
		top: '66%',
		left: '25%',
		textAlign: 'center',
		fontSize: 15,
		color: '#C1D0DC',
		lineHeight: 25,
	},
	top: {
		height: 40,
		backgroundColor: 'white'
	},

	bottom: {
		height: height * 0.1,
		backgroundColor: 'white',
		justifyContent: 'center',
		borderRadius: 10,
	},
	text: {
		textAlign: 'center',
		justifyContent: 'center',
		fontSize: 19,
		color: '#bebebe',
	},
});