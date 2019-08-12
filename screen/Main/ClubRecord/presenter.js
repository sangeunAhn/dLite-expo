import React from 'react';
import { StyleSheet, View, ActivityIndicator, TouchableOpacity, Dimensions, Platform } from 'react-native';
import MasonryList from 'react-native-masonry-list';
import { Ionicons } from '@expo/vector-icons';
import HeaderScrollView from 'react-native-header-scroll-view';

const { width, height } = Dimensions.get('window');

const ClubRecord = props => (
	<>
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.backBtn}
				onPress={() => {
					props.navigation.goBack();
				}}
			>
				<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
			</TouchableOpacity>
			<View style={styles.container}>
				<HeaderScrollView
					containerStyle={{ backgroundColor: '#FAFAFA' }}
					headerContainerStyle={{
						justifyContent: 'center', alignItems: 'center', height: Platform.OS === 'ios'
							? height * 0.1
							: height * 0.08
					}}
					headlineStyle={{
						height: height * 0.1, textAlign: 'center', justifyContent: 'center', alignItems: 'center',
						alignSelf: 'center', fontSize: width * 0.05,
						paddingTop: Platform.OS === 'ios' ? height * 0.055 : height * 0.048
					}}
					headerComponentContainerStyle={{ justifyContent: 'center', alignItems: 'center', height: height * 0.08 }}
					titleStyle={{
						paddingTop: Platform.OS === 'ios' ? 15 : 0,
						color: '#3B3B3B',
						fontSize: width * 0.09,
					}}
					fadeDirection="up"
					title="동아리 기록"
				>
					{props.isGetting ? (
						<MasonryList
							backgroundColor='#FAFAFA'
							imageContainerStyle={{ borderRadius: 17 }}
							spacing={4}
							images={props.listRecords}
							onPressImage={(item, index) => {
								props.goToPictures(item.uri);
							}}
							sorted={true}
						/>
					) : (
							<ActivityIndicator size="large" style={styles.activityIndicator} />
						)}
				</HeaderScrollView>
			</View>
		</View>
	</>
);

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
	header: {
		width: '100%',
		height: 70,
		// backgroundColor:'#A0AFFF',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	content: {
		flex: 1,
	},
	footer: {
		width: '100%',
		height: 70,
		// backgroundColor: '#5CEEE6',
		borderTopWidth: 1,
	},
	button: {
		backgroundColor: '#0064FF',
		width: 50,
		height: 50,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 20,
		borderRadius: 50,
	},
	text: {
		fontSize: 25,
		color: '#fff',
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
});

export default ClubRecord;
