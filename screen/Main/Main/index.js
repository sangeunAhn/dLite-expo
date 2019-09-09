import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Platform, BackHandler, SafeAreaView } from 'react-native';
import ClubDiv from '../../../components/Main/ClubDiv';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from 'react-native-vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

export default class Main extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null,
	});
	constructor(props) {
		super(props);
		this._handleBackButtonClick = this._handleBackButtonClick.bind(this);
		this.state = {
			schoolName: '',
		};
	}

	componentWillMount = () => {
		BackHandler.addEventListener('hardwareBackPress', this._handleBackButtonClick);

		const { navigation } = this.props;
		const schoolName = navigation.getParam('schoolName', 'NO-ID');
		this.setState({ schoolName: schoolName });
	};

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this._handleBackButtonClick);
	}

	_handleBackButtonClick = () => {
		this.props.navigation.goBack();
		return true;
	};

	render() {
		let { schoolName } = this.state;
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backBtn}
					onPress={() => {
						this.props.navigation.getParam('makeClub', 'NO-ID') == 'done'
							? this.props.navigation.navigate('Home')
							: this.props.navigation.goBack();
					}}
				>
					<SafeAreaView>
						<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
					</SafeAreaView>
				</TouchableOpacity>
				<HeaderScrollView
					headerContainerStyle={{
						justifyContent: 'center',
						alignItems: 'center',
						...ifIphoneX({ paddingTop: 18 }, { paddingTop: 0 }),
						height: Platform.OS === 'ios' ? height * 0.1 : height * 0.08,
					}}
					headlineStyle={{
						height: height * 0.1,
						textAlign: 'center',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						fontSize: width * 0.05,
						paddingTop: Platform.OS === 'ios' ? height * 0.055 : height * 0.048,
					}}
					headerComponentContainerStyle={{
						justifyContent: 'center',
						alignItems: 'center',
						height: height * 0.08,
					}}
					titleStyle={{
						// paddingTop: Platform.OS === 'ios' ? 15 : 0,
						color: '#3B3B3B',
						fontSize: width * 0.09,
					}}
					fadeDirection="up"
					title="동아리 찾기"
				>
					{/* 맨 위 총동연 */}
					<ClubDiv clubKind={'동아리 연합'} school={schoolName} navigation={this.props.navigation} />

					<ClubDiv clubKind={'예술 공연'} school={schoolName} navigation={this.props.navigation} />
					<ClubDiv clubKind={'예술 교양'} school={schoolName} navigation={this.props.navigation} />
					<ClubDiv clubKind={'체육 구기'} school={schoolName} navigation={this.props.navigation} />
					<ClubDiv clubKind={'체육 생활'} school={schoolName} navigation={this.props.navigation} />
					<ClubDiv clubKind={'봉사'} school={schoolName} navigation={this.props.navigation} />
					<ClubDiv clubKind={'국제'} school={schoolName} navigation={this.props.navigation} />
					<ClubDiv clubKind={'종교'} school={schoolName} navigation={this.props.navigation} />
					<ClubDiv clubKind={'학술'} school={schoolName} navigation={this.props.navigation} />
					<ClubDiv clubKind={'기타'} school={schoolName} navigation={this.props.navigation} />
				</HeaderScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	backBtn: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: '#FAFAFA',
	},
	backBtn: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,
	},
	header: {
		paddingTop: 23,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		fontSize: width * 0.05,
	},
	scroll: {
		flex: 1,
		paddingTop: 10,
	},
	div: {
		height: height * 0.1,
		// backgroundColor:'#dcdcdc',
		paddingLeft: 15,
		paddingTop: 15,
		paddingRight: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	school: {
		fontSize: width * 0.06,
	},
	navTitle: {
		color: 'black',
		fontSize: 18,
		backgroundColor: 'transparent',
	},
	title: {
		fontSize: 30,
	},
	section: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
		backgroundColor: 'white',
	},
});
