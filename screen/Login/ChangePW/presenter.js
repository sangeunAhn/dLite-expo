import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions, Text, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { TextField } from 'react-native-material-textfield';
import MainButton from '../../../components/Button/MainButton';
import LoginButton from '../../../components/Button/LoginButton';
import LoginButtonN from '../../../components/Button/LoginButtonN';
import HeaderScrollView from 'react-native-header-scroll-view';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

const ChangePW = props => (
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
					color: '#3B3B3B',
					fontSize: width * 0.09,
				}}
				fadeDirection="up"
				title="비밀번호 변경하기"
			>
				<View style={styles.container2}>
					<TextField
						secureTextEntry={true}
						title="변경할 비밀번호를 입력해주세요."
						titleFontSize={height * 0.015}
						label="새로운 비밀번호"
						labelFontSize={height * 0.018}
						returnKeyType={'done'}
						autoCorrect={false}
						value={props.pw}
						multiline={false}
						onChangeText={props.pwChange}
						fontSize={height * 0.023}
					/>
					<TextField
						title="다시 한번 입력해주세요."
						titleFontSize={height * 0.015}
						label="새로운 비밀번호 확인"
						secureTextEntry={true}
						labelFontSize={height * 0.018}
						returnKeyType={'done'}
						autoCorrect={false}
						value={props.pw2}
						multiline={false}
						onChangeText={props.pw2Change}
						fontSize={height * 0.023}
					/>
					<View style={styles.loginButton}>
						<LoginButton title={'확인'} onPress={props.btnPress} />
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
	container2: {
		paddingHorizontal: '7%',
		paddingTop: '28%',
	},
	loginButton: {
		marginTop: height * 0.1,
	},
});

export default ChangePW;
