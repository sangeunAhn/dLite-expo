import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, View, Image, TouchableOpacity, TextInput } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import PhotoLoading from './PhotoLoding';



export default class PhotoModify extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commentValue: '',
			disabled: true,
		};
	}

	componentWillMount = async () => {
		const { comment } = this.props;
		this.setState({ commentValue: comment });
	};

	Press = () => {
		this.state.disabled == true ? this.setState({ disabled: false }) : this.setState({ disabled: true });
	};

	static propTypes = {
		id: PropTypes.string.isRequired,
		deleteImage: PropTypes.func.isRequired,
		image: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
		updateLoading: PropTypes.bool.isRequired,
	};
	render() {
		const { id, deleteImage, image } = this.props;
		var { height, width } = Dimensions.get('window');
		return (
			<>
			{this.props.updateLoading ? (
					<PhotoLoading />
				) : (
				<View style={styles.container}>
					<View style={styles.body}>
						{this.state.disabled == true ? (
							<TouchableOpacity onPress={this.Press}>
								<View style={styles.image}>
									<AutoHeightImage
										width={width - 20}

										source={{ uri: image }}
									/>
								</View>
							</TouchableOpacity>
						) : (
								<TouchableOpacity onPress={this.Press}>
									<View style={styles.image}>
										<AutoHeightImage
											width={width - 20}
											blurRadius={10}

											source={{ uri: image }}
										/>
									</View>
									<View
										style={styles.edit}
									>
										<TouchableOpacity style={{}} onPress={this._pickImage}>
											<Feather name="edit" size={width * 0.15} color="black" />
										</TouchableOpacity>
									</View>
									<View
										style={styles.delete}
									>
										<TouchableOpacity style={{}} onPressOut={() => deleteImage(id)}>
											<Entypo name="circle-with-cross" size={width * 0.15} color="black" />
										</TouchableOpacity>
									</View>
								</TouchableOpacity>
							)}
					</View>

					<View style={styles.bottom}>
						<TextInput
							style={styles.text}
							placeholder={'간단한 코멘트를 입력해주세요'}
							placeholderTextColor={'#bebebe'}
							maxLength={20}
							onChangeText={comment => this._updateComment(comment)}
							value={this.state.commentValue}
							autoCorrect={false}
						/>
					</View>
				</View>
				)}
			</>
		);
	}

	_updateComment = comment => {
		this.setState({ commentValue: comment });
		const { id, updateComment } = this.props;
		updateComment(id, comment);
	};

	// 이미지피커
	_pickImage = async () => {
		setTimeout(() => {
			this.props.changeUpdateLoading(id);
		}, 1000);
		const permissions = Permissions.CAMERA_ROLL;
		const { status } = await Permissions.askAsync(permissions);
		const { id, updateImage } = this.props;

		if (status === 'granted') {
			let result = await ImagePicker.launchImageLibraryAsync({
				quality: 0.5,
			});

			if (!result.cancelled) {
				this.setState({ image: result.uri, disabled: true });
				updateImage(id, result.uri);
				this.props.changeUpdateLoading(id);
			} else {
				this.props.changeUpdateLoading(id);
			}
		}
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		borderRadius: 9,
		shadowColor: '#A8A8A8',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 5,
		shadowRadius: 5,
		elevation: 3,
	},
	image: {
		borderTopLeftRadius: 9,
		borderTopRightRadius: 9,
		overflow: 'hidden'
	},
	edit: {
		position: 'absolute',
		top: 0,
		left: '25%',
		right: 0,
		bottom: 0,
		justifyContent: 'center',
	},
	delete: {
		position: 'absolute',
		top: 0,
		right: '25%',
		bottom: 0,
		justifyContent: 'center',
	},
	bottom: {
		height: 80,
		borderRadius: 9,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
		color: '#3B3B3B',
	},
});
