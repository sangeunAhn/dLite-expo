import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions, Text, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import FindId from '../../../components/FindIdPw/FindId';
import FindPw from '../../../components/FindIdPw/FindPw';
import HeaderScrollView from 'react-native-header-scroll-view';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

const Login = props => (
	<>
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => {
					props.navigation.goBack();
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
				title="ID/PW 찾기"
			>
				<View style={styles.container2}>
					<View style={styles.buttons}>
						<View style={{ flex: 1, height: width * 0.15, borderRightWidth: 0.5, borderColor: '#CBCBCB' }}>
							<TouchableOpacity
								style={
									props.selectBtn
										? [styles.button1, { borderTopLeftRadius: 15 }]
										: [styles.button2, { borderTopLeftRadius: 15 }]
								}
								onPress={props.idBtnPress}
							>
								<Text style={props.selectBtn ? styles.buttonText1 : styles.buttonText2}>
									아이디찾기
								</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							style={
								props.selectBtn
									? [styles.button2, { borderTopRightRadius: 15 }]
									: [styles.button1, { borderTopRightRadius: 15 }]
							}
							onPress={props.pwBtnPress}
						>
							<Text style={props.selectBtn ? styles.buttonText2 : styles.buttonText1}>비밀번호찾기</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: height * 0.06, paddingHorizontal: '5%' }}>
						{props.selectBtn ? (
							<FindId
								{...this.props}
								idConfirmBtn={props.idConfirmBtn}
								idEmailChange={props.idEmailChange}
							/>
						) : (
							<FindPw
								{...this.props}
								pwConfirmBtn={props.pwConfirmBtn}
								pwIdChange={props.pwIdChange}
								pwEmailChange={props.pwEmailChange}
							/>
						)}
					</View>
				</View>
			</HeaderScrollView>
		</View>
	</>
);

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FAFAFA',
	},
	title: {
		marginTop: Platform.OS === 'ios' ? height * 0.1 : height * 0.07,
		marginLeft: width * 0.05,
		marginBottom: height * 0.02,
		fontSize: width * 0.09,
		fontWeight: '700',
	},
	container2: {
		backgroundColor: '#F5F5F5',
		// top: height * 0.15,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		height: height * 0.6,
		marginTop: height * 0.1,
	},
	buttons: {
		width: '100%',
		backgroundColor: '#bdc3c7',
		flexDirection: 'row',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	button1: {
		flex: 1,
		backgroundColor: 'white',
		height: width * 0.15,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 30,
	},
	button2: {
		flex: 1,
		backgroundColor: '#F3F3F3',
		height: width * 0.15,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 30,
	},
	buttonText1: {
		fontSize: width * 0.05,
		color: '#3B3B3B',
	},
	buttonText2: {
		fontSize: width * 0.05,
		color: 'gray',
	},
	container3: {
		flex: 1,
		backgroundColor: '#FAFAFA',
		top: -height * 0.05,
	},
});

export default Login;
