import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text, Platform, SafeAreaView } from 'react-native';
import SchoolBtn from '../../../components/Button/SchoolBtn';
import { Ionicons } from 'react-native-vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

const Schools = props => (
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
				<Text style={styles.title}>학교 선택</Text>
				<View style={{ flexDirection: 'column', height: height * 0.83 }}>
					<View style={styles.schools}>
						<SchoolBtn
							school={'상언대학교'}
							backgroundColor={'white'}
							lineColor={'#34495e'}
							onPress={props.AAPress}
						/>
						<SchoolBtn
							school={'강민대학교'}
							backgroundColor={'white'}
							lineColor={'#e67e22'}
							onPress={props.BBPress}
						/>
					</View>
					<View style={styles.schools1}></View>
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
	schools: {
		flex: 1,
		marginHorizontal: width * 0.03,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	schools1: {
		flex: 1,
		marginHorizontal: width * 0.03,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		left: width * 0.04,
	},
});

export default Schools;
