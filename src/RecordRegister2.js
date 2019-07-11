import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	TextInput,
	AsyncStorage,
	Dimensions,
	KeyboardAvoidingView,
	Platform,
	Image,
	ActivityIndicator,
} from 'react-native';
import { ImagePicker, Constants, Permissions } from 'expo';
import * as axios from 'axios';
import RegisterButton from '../components/RegisterButton';
import RegisterButtonN from '../components/RegisterButtonN';
import { scale, moderateScale, verticalScale } from '../components/Scaling';
import PhotoRegister from '../components/PhotoRegister';
import PhotoModify from '../components/PhotoModify';
import uuidv1 from 'uuid/v1';

const { width, height } = Dimensions.get('window');

export default class RecordRegister extends React.Component {
	static navigationOptions = {
		title: '기록생성',
		style: { elevation: 0, shadowOpacity: 0 },
		headerStyle: {
			height: Platform.OS === 'ios' ? 70 : 10,
			elevation: 0,
			shadowColor: 'transparent',
			borderBottomWidth: 0,
			paddingBottom: 10,
			paddingTop: Platform.OS === 'ios' ? 40 : 5,
		},
		headerTitleStyle: {
			color: '#2eaeff',
			fontSize: Platform.OS === 'ios' ? 25 : 18,
			textAlign: 'center',
			flex: 1,
			fontWeight: 'bold',
		},
		tintColor: '#2eaeff',
	};
	constructor(props) {
		super(props);
		this.state = {
			images: {},
			image: null,
			disabled: false,
			count: 0,
			text: '',
			plds: [],
			comment: '',
			name: '',
			isSubmitting: false,
			isGetting: false,
		};
	}

	componentWillMount = async () => {
		if (this.props.navigation.getParam('to', 'NO-ID') == 'm') {
			await this._getDatas();
		}
	};

	render() {
		const { images, isGetting } = this.state;
		return (
			<>
				{isGetting == false && this.props.navigation.getParam('to', 'NO-ID') == 'm' ? (
					<ActivityIndicator size="large" style={styles.activityIndicator} />
				) : (
					<>
						<ScrollView>
							<View style={styles.container}>
								{/* <KeyboardAvoidingView
									behavior="padding"
									keyboardVerticalOffset={Platform.OS === 'ios' ? '200' : '10'}
								> */}
								{/* 밑에 완료버튼 빼고 나머지 화면 스크롤 */}

								{/* 맨 위 활동 내용 적는 곳 */}

								{/* 사진 넣는 곳 */}
								{Object.values(images).map(image => (
									<PhotoModify
										key={image.id}
										deleteImage={this._deleteImage}
										updateImage={this._updateImage}
										updateComment={this._updateComment}
										{...image}
									/>
								))}
								<PhotoRegister addImage={this._addImage} />

								{/* 완료버튼 */}
								{/* </KeyboardAvoidingView> */}
							</View>
						</ScrollView>
						<View style={styles.footer}>
							{this.state.count === 0 ? (
								<RegisterButtonN title={'사진을 넣어주세요.'} />
							) : (
								<TouchableOpacity onPress={this._ButtonPress}>
									{this.state.isSubmitting ? (
										<RegisterButton title={'로딩'} />
									) : (
										<RegisterButton title={'확인'} />
									)}
								</TouchableOpacity>
							)}
						</View>
					</>
				)}
			</>
		);
	}

	_addImage = image => {
		this.setState(prevState => {
			const ID = uuidv1();
			const count = this.state.count;
			const newToDoObject = {
				[ID]: {
					id: ID,
					image: image,
					comment: '',
					createdAt: Date.now(),
				},
			};
			const newState = {
				count: count + 1,
				images: {
					...prevState.images,
					...newToDoObject,
				},
			};
			return { ...newState };
		});
		console.log(this.state.images);
	};

	_deleteImage = async id => {
		await this.setState(prevState => {
			const images = prevState.images;
			const count = this.state.count;
			delete images[id];
			const newState = {
				...prevState,
				...images,
				count: count - 1
			};
			return { ...newState };
		});
	};

	_updateImage = (id, image) => {
		this.setState(prevState => {
			const newState = {
				...prevState,
				images: {
					...prevState.images,
					[id]: { ...prevState.images[id], image: image },
				},
			};
			return { ...newState };
		});
		console.log(this.state.images);
	};

	_updateComment = async (id, comment) => {
		await this.setState(prevState => {
			const newState = {
				...prevState,
				images: {
					...prevState.images,
					[id]: { ...prevState.images[id], comment: comment },
				},
			};
			return { ...newState };
		});
		console.log(comment);
		console.log(this.state.images);
	};

	_getDatas = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var recordNo = navigation.getParam('recordNo', 'NO-ID');
		const t = this;

		this.setState({ image: navigation.getParam('image', 'NO-ID') });

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/GetRecordPictureM.php', {
				recordNo: recordNo,
			})
			.then(function(response) {
				t._setDatas(response);
			});

		this.setState({ isGetting: true });
	};
	_setDatas = async response => {
		var str = JSON.stringify(response.data.message.recordName);
		var recordName = str.substring(1, str.length - 1);
		this.setState({
			name: recordName,
		});

		var str = JSON.stringify(response.data.message.recordContent);
		var recordContent = str.substring(1, str.length - 1);
		this.setState({
			comment: recordContent,
		});
	};

	_ButtonPress = async () => {
		const { navigation } = this.props;
		if (navigation.getParam('to', 'NO-ID') == 'm') {
			await this._inputM1();
		} else {
			await this._input1();
		}

		this.setState({ image: null });
		this.props.navigation.navigate('SignUpRecord');
	};

	_input1 = async () => {
		const { name, image, comment } = this.state;
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		this.setState({ isSubmitting: true });

		let formData = new FormData();
		formData.append('recordName', name);
		formData.append('image', { uri: image, name: 'image.png', type: 'image/png' });
		formData.append('recordContent', comment);
		formData.append('userNo', userNo);

		// 데이터베이스에 넣기
		await fetch('http://dkstkdvkf00.cafe24.com/SetRecord.php', {
			method: 'POST',
			body: formData,
			header: {
				'content-type': 'multipart/form-data',
			},
		});
	};

	_inputM1 = async () => {
		const { name, image, comment } = this.state;
		const { navigation } = this.props;
		var recordNo = navigation.getParam('recordNo', 'NO-ID');
		this.setState({ isSubmitting: true });

		let formData = new FormData();
		formData.append('recordName', name);
		formData.append('image', { uri: image, name: 'image.png', type: 'image/png' });
		formData.append('recordContent', comment);
		formData.append('recordNo', recordNo);

		// 데이터베이스에 넣기
		await fetch('http://dkstkdvkf00.cafe24.com/UpdateRecord.php', {
			method: 'POST',
			body: formData,
			header: {
				'content-type': 'multipart/form-data',
			},
		});
	};

	componentDidMount = () => {
		AsyncStorage.getItem('plds').then(data => {
			const plds = JSON.parse(data || '[]');
			this.setState({ plds });
		});
	};

	removePld = index => {
		let plds = [...this.state.plds];
		plds.splice(index, 1);
		this.setState({
			plds: plds,
		});
	};

	addPld = pld => {
		// 새로운 특성(char) 객체 생성
		const newPld = {
			id: Date.now(), // 등록시간
			text: pld, // 특성 내용
		};
		// state 업데이트
		this.setState(prevState => {
			prevState.plds.push(newPld);
			return prevState;
		});
	};
	componentWillMount() {
		this.setState({
			text: '',
			plds: [],
		});
	}

	state = {
		count: 0,
	};

	_updateCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scroll: {
		flex: 1,
		padding: 10,
	},
	header: {
		width: moderateScale(300),
		height: 50,
		backgroundColor: '#32AAFF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginBottom: 40,
		textAlign: 'center',
	},
	footer: {
		width: '100%',
		height: 70,
	},
	button: {
		flex: 1,
		backgroundColor: '#50C8FF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 20,
		color: '#fff',
	},
	titleInput: {
		color: '#fff',
		//   backgroundColor: '#32AAFF',
		fontSize: 20,
		textAlign: 'center',
	},
	buttonStyle: {
		width: 150,
		height: 75,
		backgroundColor: 'ivory',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15,
	},
	contentBackground: {
		marginTop: scale(50),
		backgroundColor: '#f2f2f2',
		marginBottom: 15,
		width: moderateScale(310),
		height: verticalScale(360),
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		//그림자효과
		shadowColor: '#dbdbdb',
		shadowOpacity: 0.8,
		shadowRadius: 5,
		shadowOffset: {
			height: 5,
			width: 5,
		},
		elevation: 3,
	},
	content: {
		backgroundColor: '#fff',
		width: moderateScale(270),
		height: moderateScale(280),
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},
	commentInput: {
		fontSize: 21,
		textAlign: 'center',
		paddingTop: 30,
		paddingBottom: 5,
	},
});
