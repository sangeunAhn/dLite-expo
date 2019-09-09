import React, { Component } from 'react';
import { BackHandler, Image, Dimensions } from 'react-native';
import * as axios from 'axios';
import ClubIntroduce from './presenter';

const { width, height } = Dimensions.get('window');

class Container extends Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this._handleBackButtonClick = this._handleBackButtonClick.bind(this);
		this.state = {
			clubName: '',
			clubPhoneNumber: '',
			clubIntroduce: '',
			clubLogo: null,
			clubMainPicture: null,
			clubChar: [],
			isGetting1: false,
			isGetting2: false,
			isImageViewVisible: false,
			imageViewIndex: 0,
			imgWidth: 0,
		};
	}

	render() {
		return <ClubIntroduce {...this.state} {...this.props} imageViewVisible1={this._imageViewVisible1} imageViewVisible2={this._imageViewVisible2} />;
	}

	componentWillMount = () => {
		this._getDatas();
		this._getChars();

		BackHandler.addEventListener('hardwareBackPress', this._handleBackButtonClick);
		const { navigation } = this.props;
		var clubLogo = navigation.getParam('clubLogo', 'NO-ID');
		var clubMainPicture = navigation.getParam('clubMainPicture', 'NO-ID');
		this.setState({
			clubLogo,
			clubMainPicture,
		});

		Image.getSize(clubMainPicture, (width, height) => {
			// calculate image width and height 
			const screenWidth = Dimensions.get('window').width
			this.setState({imgWidth: screenWidth})
		  })
	};

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this._handleBackButtonClick);
	}

	_getDatas = async () => {
		const t = this;
		const { navigation } = this.props;
		var clubName = navigation.getParam('clubName', 'NO-ID');
		var school = navigation.getParam('school', 'NO-ID');

		this.setState({ clubName: clubName });

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/Main/GetClubIntroduce.php', {
				clubName: clubName,
				school: school,
			})
			.then(function(response) {
				t._setDatas(response);
			});

		this.setState({ isGetting1: true });
	};

	_setDatas = response => {
		var str = JSON.stringify(response.data.message.clubPhoneNumber);
		var clubPhoneNumber = str.substring(1, str.length - 1);
		clubPhoneNumber = clubPhoneNumber.replace(/\\n/gi, '\n');
		this.setState({
			clubPhoneNumber: clubPhoneNumber,
		});

		var str = JSON.stringify(response.data.message.clubIntroduce);
		var clubIntroduce = str.substring(1, str.length - 1);
		clubIntroduce = clubIntroduce.replace(/\\n/gi, '\n');
		this.setState({
			clubIntroduce: clubIntroduce,
		});
	};

	//특성 가져오기
	_getChars = async () => {
		const t = this;
		const { navigation } = this.props;
		const { clubChar } = this.state;
		var clubName = navigation.getParam('clubName', 'NO-ID');
		var school = navigation.getParam('school', 'NO-ID');

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/Main/GetClubChars.php', {
				clubName: clubName,
				school: school,
			})
			.then(result => {
				const response = result.data;
				var clubCharArray = new Array();

				response.forEach(row => {
					clubCharArray.push(row.chars);
				});

				this.setState({
					clubChar: clubChar.concat(clubCharArray),
					isGetting2: true,
				});
			});
	};

	_handleBackButtonClick = () => {
		this.props.navigation.goBack();

		return true;
	};

	_imageViewVisible1 = () => {
		this.setState({ isImageViewVisible: true, imageViewIndex: 0 });
	};

	_imageViewVisible2 = () => {
		this.setState({ isImageViewVisible: true, imageViewIndex: 1 });
	};
}

export default Container;
