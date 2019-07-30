import React, { Component } from 'react';
import { Alert } from 'react-native';
import * as axios from 'axios';
import { ImagePicker, Permissions } from 'expo';
import MakeClub from './presenter';

class Container extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			clubName: '',
			clubKind: '예술 공연',
			clubWellcome: '',
			clubPhoneNumber: '',
			clubIntroduce: '',
			clubLogo: null,
			clubMainPicture: null,
			prevClubLogo: null,
			prevClubMainPicture: null,
			userNo: '',
			isGetting: false,
            isSubmitting: false,
            isFocused: false,
            isFocused1: false,
            isFocused2: false,
            isFocused3: false,
		};
	}

	render() {
        return <MakeClub 
                    {...this.state} 
                    {...this.props} 
                    pickLogo={this._pickLogo}
                    pickMainPicture={this._pickMainPicture}
                    btnPress={this._btnPress}
                    setPrevClubKind={this._setPrevClubKind}
                    clubNameChange={this._clubNameChange}
                    clubIntroduceChange={this._clubIntroduceChange}
                    clubWellcomeChange={this._clubWellcomeChange}
                    clubPhoneNumberChange={this._clubPhoneNumberChange}
                    handleFocus={this._handleFocus}
                    handleBlur={this._handleBlur}
                    handleFocus1={this._handleFocus1}
                    handleBlur1={this._handleBlur1}
                    handleFocus2={this._handleFocus2}
                    handleBlur2={this._handleBlur2}
                    handleFocus3={this._handleFocus3}
                    handleBlur3={this._handleBlur3}
                />;
	}

	componentWillMount = async () => {
		if (this.props.navigation.getParam('from', 'NO-ID') == 'm') {
			await this._getDatas();
		}
	};

	// 데이터 가져오는 함수
	_getDatas = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		const t = this;

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/GetRegister.php', {
				userNo: userNo,
			})
			.then(response => {
				t._setDatas(response);
			});
	};

	// 데이터 넣기
	_setDatas = response => {
		var str = JSON.stringify(response.data.message.clubName);
		var clubName = str.substring(1, str.length - 1);
		this.setState({
			clubName: clubName,
		});

		var str = JSON.stringify(response.data.message.clubWellcome);
		var clubWellcome = str.substring(1, str.length - 1);
		this.setState({
			clubWellcome: clubWellcome,
		});

		var str = JSON.stringify(response.data.message.clubKind);
		var clubKind = str.substring(1, str.length - 1);
		this.setState({
			clubKind: clubKind,
		});

		var str = JSON.stringify(response.data.message.clubPhoneNumber);
		var clubPhoneNumber = str.substring(1, str.length - 1);
		this.setState({
			clubPhoneNumber: clubPhoneNumber,
		});

		var str = JSON.stringify(response.data.message.clubIntroduce);
		var clubIntroduce = str.substring(1, str.length - 1);
		this.setState({
			clubIntroduce: clubIntroduce,
		});

		var str = JSON.stringify(response.data.message.clubLogo);
		var clubLogo = str.substring(1, str.length - 1);
		this.setState({
			clubLogo: clubLogo,
			prevClubLogo: clubLogo,
		});

		var str = JSON.stringify(response.data.message.clubMainPicture);
		var clubMainPicture = str.substring(1, str.length - 1);
		this.setState({
			clubMainPicture: clubMainPicture,
			prevClubMainPicture: clubMainPicture,
		});

		this.setState({ isGetting: true });
	};

	// 로고 가져오기
	_pickLogo = async () => {
		const permissions = Permissions.CAMERA_ROLL;
		const { status } = await Permissions.askAsync(permissions);

		if (status === 'granted') {
			let result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [4, 3],
				quality: 0.5,
			});

			if (!result.cancelled) {
				this.setState({ clubLogo: result.uri });
			}
		}
	};

	// 메인사진 가져오기
	_pickMainPicture = async () => {
		const permissions = Permissions.CAMERA_ROLL;
		const { status } = await Permissions.askAsync(permissions);

		if (status === 'granted') {
			let result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [4, 3],
				quality: 0.5,
			});

			if (!result.cancelled) {
				this.setState({ clubMainPicture: result.uri });
			}
		}
	};

	// 처음 가입
	_insertRegister = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var getUserNo = navigation.getParam('userNo', 'NO-ID');
		var getSchool = navigation.getParam('school', 'NO-ID');
		getUserNo = getUserNo.replace(/[^0-9]/g, '');
		getSchool = getSchool.substring(1, getSchool.length - 1);

		const {
			clubName,
			clubKind,
			clubWellcome,
			clubPhoneNumber,
			clubIntroduce,
			clubLogo,
			clubMainPicture,
		} = this.state;

		if (clubName == '' || clubPhoneNumber == '' || clubIntroduce == '') {
			Alert.alert('내용을 채워주세요');
		} else {
			let formData = new FormData();
			formData.append('clubName', clubName);
			formData.append('clubKind', clubKind);
			formData.append('clubWellcome', clubWellcome);
			formData.append('clubPhoneNumber', clubPhoneNumber);
			formData.append('clubIntroduce', clubIntroduce);
			formData.append('userNo', getUserNo);
			formData.append('school', getSchool);

			if (clubLogo == null) {
				formData.append('clubLogo', null);
			} else {
				formData.append('clubLogo', { uri: clubLogo, name: 'image.png', type: 'image/png' });
			}

			if (clubMainPicture == null) {
				formData.append('clubMainPicture', null);
			} else {
				formData.append('clubMainPicture', { uri: clubMainPicture, name: 'image.png', type: 'image/png' });
			}

			// 데이터베이스에 넣기
			await fetch('http://dkstkdvkf00.cafe24.com/php/MakeClub/UserRegister.php', {
				method: 'POST',
				body: formData,
				header: {
					'content-type': 'multipart/form-data',
				},
			});

			this.props.navigation.navigate('MakeChars', {
				userNo: getUserNo,
			});
		}
	};

	// 정보 수정 함수
	_updatRegister = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var getUserNo = navigation.getParam('userNo', 'NO-ID');
		getUserNo = getUserNo.replace(/[^0-9]/g, '');

		const {
			clubName,
			clubKind,
			clubWellcome,
			clubPhoneNumber,
			clubIntroduce,
			clubLogo,
			clubMainPicture,
		} = this.state;

		if (clubName == '' || clubWellcome == '' || clubPhoneNumber == '' || clubIntroduce == '') {
			Alert.alert('내용을 채워주세요');
		} else {
			let formData = new FormData();
			formData.append('clubName', clubName);
			formData.append('clubKind', clubKind);
			formData.append('clubWellcome', clubWellcome);
			formData.append('clubPhoneNumber', clubPhoneNumber);
			formData.append('clubIntroduce', clubIntroduce);
			formData.append('userNo', getUserNo);

			if (clubLogo == null || clubLogo == 'ul') {
				formData.append('clubLogo', null);
			} else {
				formData.append('clubLogo', { uri: clubLogo, name: 'image.png', type: 'image/png' });
			}

			if (clubMainPicture == null || clubMainPicture == 'ul') {
				formData.append('clubMainPicture', null);
			} else {
				formData.append('clubMainPicture', { uri: clubMainPicture, name: 'image.png', type: 'image/png' });
			}

			// 텍스트 정보 넣기
			await fetch('http://dkstkdvkf00.cafe24.com/php/MakeClub/ModifySignUp.php', {
				method: 'POST',
				body: formData,
				header: {
					'content-type': 'multipart/form-data',
				},
			});

			this.props.navigation.navigate('Home');
		}
	};

	_deleteImages = async () => {
		const { prevClubLogo, prevClubMainPicture } = this.state;

		let formData = new FormData();
		formData.append('clubLogo', prevClubLogo);
		formData.append('clubMainPicture', prevClubMainPicture);

		await fetch('http://dkstkdvkf00.cafe24.com/php/MakeClub/DeleteClubImages.php', {
			method: 'POST',
			body: formData,
			header: {
				'content-type': 'multipart/form-data',
			},
		});
	};

	_btnPress = async () => {
		this.setState({ isSubmitting: true });
		if (this.props.navigation.getParam('from', 'NO-ID') == 'm') {
			await this._updatRegister();
			this._deleteImages();
		} else {
			this._insertRegister();
		}
	};

	_setPrevClubKind = clubKind => {
		this.setState({ clubKind });
    };
    
    _clubNameChange = clubName => {
        this.setState({ clubName })
    }

    _clubIntroduceChange = clubIntroduce => {
        this.setState({ clubIntroduce })
    }

    _clubWellcomeChange = clubWellcome => {
        this.setState({ clubWellcome })
    }

    _clubPhoneNumberChange = clubPhoneNumber => {
        this.setState({ clubPhoneNumber })
    }

    // 테두리 색 변경 효과
	_handleFocus = () => this.setState({ isFocused: true });
    _handleBlur = () => this.setState({ isFocused: false });
    
	_handleFocus1 = () => this.setState({ isFocused1: true });
	_handleBlur1 = () => this.setState({ isFocused1: false });

	_handleFocus2 = () => this.setState({ isFocused2: true });
	_handleBlur2 = () => this.setState({ isFocused2: false });

	_handleFocus3 = () => this.setState({ isFocused3: true });
    _handleBlur3 = () => this.setState({ isFocused3: false });
    
}

export default Container;