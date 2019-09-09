import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, Text, View, Platform } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import UpdateButton from '../../../components/Button/updateClubButton/UpdateButton';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper'
import Modal from "react-native-simple-modal";


const { width, height } = Dimensions.get('window');

 
  
const UpdateClub = props => (
	<>
		<View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => props.navigation.goBack()}
			>
				<SafeAreaView>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</SafeAreaView>
			</TouchableOpacity>

			<Text style={styles.screenTitle}>동아리 수정</Text>

			<View style={styles.container}>
				<View style={{alignItems: 'center'}}>
					<UpdateButton title={'정보 수정'} sub={'우리 동아리는요!'} press={props.gotoSignUp} />
					<View style={styles.emptyPlace} />
					<UpdateButton title={'특징 수정'} sub={'이렇게 다양한 매력을 가졌답니다 :)'} press={props.gotoChar} />
					<View style={styles.emptyPlace} />
					<UpdateButton title={'기록 수정'} sub={'이야기 책 속의 여행처럼,우리 함께 할래요?'} press={props.gotoRecord} />

				</View>
				<View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', height: height * 0.07, bottom: 20 }}>
					<TouchableOpacity style={{ paddingBottom: height * 0.005, paddingLeft:height*0.01 }} onPress={props.changePw}>
						<Text style={{ color: '#888888', fontSize: height * 0.018, padding:4 }}>비밀번호 변경하기</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ padding: height * 0.01 }} onPress={props.goodBye}>
						<Text style={{ color: '#888888', fontSize: height * 0.018, padding:4 }}>탈퇴하기</Text>
					</TouchableOpacity>
				</View>
			</View>

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
		padding: 10,
		paddingTop: height*0.15,
		justifyContent: 'center',
	},
	screenTitle: {
		marginTop: Platform.OS === 'ios' ? height * 0.1 : height * 0.07,
		marginLeft: width * 0.05,
		fontSize: width * 0.09,
		fontWeight: '700',
		backgroundColor: '#FAFAFA',
	},
	box1: {
		width: width * 0.9,
		height: height * 0.1,
		backgroundColor: 'white',
		borderRadius: 5,
		shadowColor: '#A8A8A8', // IOS
		shadowOffset: { height: 0, width: 0 }, // IOS
		shadowOpacity: 5, // IOS
		shadowRadius: 5, //IOS
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
	content: {
		flex: 1,
		flexWrap: 'wrap',
	},
	title: {
		justifyContent: 'center',
	},
	sub: {
		marginLeft: width * 0.007,
		justifyContent: 'center',
	},
	titleText: {
		fontSize: width * 0.07,
		fontWeight: 'bold',
	},
	subText: {
		fontSize: width * 0.032,
		color: '#BBBBBB',
	},
	emptyPlace: {
		width: '100%', height: height * 0.05
	}
});

export default UpdateClub;
