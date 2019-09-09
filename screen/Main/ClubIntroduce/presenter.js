import React, { Component } from 'react';
import {
	StyleSheet,
	Platform,
	Text,
	View,
	Image,
	Dimensions,
	ScrollView,
	ActivityIndicator,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import IntroduceChars from '../../../components/Char/IntroduceChars';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import ImageView from 'react-native-image-view';
import FastImage from 'react-native-fast-image'

const { width, height } = Dimensions.get('window');

const ClubIntroduce = props => (
	<>
		<ImageView
			images={[
				{
					source: {
						uri: props.clubMainPicture,
					},
					title: '메인사진',
					width: width,
					height: props.imgHeight
				},
				{
					source: {
						uri: props.clubLogo,
					},
					title: '로고사진',
					width: width,
					height: width
				},
			]}
			imageIndex={props.imageViewIndex}
			isVisible={props.isImageViewVisible}
		/>
		{props.isGetting1 && props.isGetting2 ? (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backBtn}
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
					title="동아리 소개"
				>
					<View style={styles.blank} />
					<Text style={styles.text1}>동아리 로고, 메인 사진</Text>

					<TouchableOpacity style={styles.MainPictureView} onPress={props.imageViewVisible1}>
						{props.clubMainPicture === null || props.clubMainPicture == '' ? (
							<View style={styles.clubMainPicture} />
						) : (
							<Image style={styles.clubMainPicture} source={{ uri: props.clubMainPicture }} />
						)}
					</TouchableOpacity>

					<View style={styles.logoView1}>
						{
							<TouchableOpacity style={styles.logoView2} onPress={props.imageViewVisible2}>
								{props.clubLogo === null || props.clubLogo == '' ? (
									<Image style={styles.clubLogo} />
								) : (
									<Image style={styles.clubLogo} source={{ uri: props.clubLogo }} />
								)}
							</TouchableOpacity>
						}
					</View>

					<View style={{ paddingHorizontal: width * 0.05 }}>
						<View style={styles.block}>
							<Text style={styles.text}>동아리 이름</Text>

							<View style={styles.input}>
								<Text style={styles.textIn}>{props.clubName}</Text>
							</View>
						</View>

						<View style={styles.block}>
							<View style={styles.chars}>
								{props.clubChar.map((char, index) => (
									<IntroduceChars key={index} char={char} />
								))}
							</View>
						</View>

						<View style={styles.block}>
							<Text style={styles.text}>동아리 소개</Text>
							<View style={styles.input}>
								<Text style={styles.textIn}>{props.clubIntroduce}</Text>
							</View>
						</View>

						<View style={styles.block}>
							<Text style={styles.text}>연락처</Text>
							<View style={styles.input}>
								<Text style={styles.textIn}>{props.clubPhoneNumber}</Text>
							</View>
						</View>
					</View>
				</HeaderScrollView>
			</View>
		) : (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		)}
	</>
);

const styles = StyleSheet.create({
	backBtn: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: width * 0.028,
		zIndex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: '#FAFAFA',
	},
	chars: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
	},
	blank: {
		width: width,
		height: height * 0.03,
	},
	MainPictureView: {
		alignItems: 'center',
		marginTop: height * 0.007,
		marginHorizontal: width * 0.05,
	},
	logoView1: {
		alignItems: 'center',
		top: -height * 0.036,
		zIndex: 1,
	},
	logoView2: {
		width: height * 0.14,
		height: height * 0.14,
		top: -height * 0.036,
		zIndex: 1,
		borderRadius: height * 0.14 * 0.5,
	},
	clubLogo: {
		backgroundColor: '#ADCDE9',
		width: height * 0.14,
		height: height * 0.14,
		borderRadius: height * 0.14 * 0.5,
	},
	input: {
		borderRadius: 8,
		width: '100%',

		backgroundColor: 'white',
		shadowColor: '#E1E1E1',
		shadowOffset: { height: 1.5, width: 0 },
		shadowOpacity: 5,
		shadowRadius: 3,
		elevation: 1.5,
		marginTop: 5,
	},
	text: {
		color: '#ADCDE9',
		fontSize: width * 0.06,
		fontWeight: 'bold',
	},
	text1: {
		color: '#ADCDE9',
		fontSize: width * 0.06,
		fontWeight: 'bold',
		paddingHorizontal: width * 0.05,
	},
	textIn: {
		flex: 1,
		padding: 7,
		fontSize: width * 0.04,
	},
	block: {
		paddingBottom: 30,
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
	clubMainPicture: {
		marginTop: 5,
		width: width * 0.9,
		height: height * 0.23,
		borderRadius: 15,
		backgroundColor: '#CEE1F2',
	},
});

export default ClubIntroduce;
