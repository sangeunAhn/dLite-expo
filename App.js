import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screen/Home/Home';
import Schools from './screen/Home/Schools';
import MakeClub from './screen/MakeClub/MakeClub';
import MakeChars from './screen/MakeClub/MakeChars';
import MakeRecord from './screen/MakeClub/MakeRecord';
import MakeRecordPictures from './screen/MakeClub/MakeRecordPictures';
import Main from './screen/Main/Main';
import ClubIntroduce from './screen/Main/ClubIntroduce';
import RecordPictures from './screen/Main/ClubRecordPictures';
import UpdateClub from './screen/MakeClub/UpdateClub';
import Record from './screen/Main/ClubRecord';
import Login from './screen/Login/Login';
import SignUp from './screen/Login/SignUp';
import FindIdPw from './screen/Login/FindIdPw';
import SignUpPermission from './screen/Login/SignUpPermission';
import ChangePW from './screen/Login/ChangePW';

const RootStack = createStackNavigator(
	{
		Home: {
			screen: Home,
		},
		Schools: {
			screen: Schools,
		},
		MakeClub: {
			screen: MakeClub,
		},
		MakeChars: {
			screen: MakeChars,
		},
		MakeRecord: {
			screen: MakeRecord,
		},
		MakeRecordPictures: {
			screen: MakeRecordPictures,
		},
		Main: {
			screen: Main,
		},
		ClubIntroduce: {
			screen: ClubIntroduce,
		},
		RecordPictures: {
			screen: RecordPictures,
		},
		UpdateClub: {
			screen: UpdateClub,
		},
		Record: {
			screen: Record,
		},
		Login: {
			screen: Login,
		},
		SignUp: {
			screen: SignUp
		},
		FindIdPw: {
			screen: FindIdPw
		},
		SignUpPermission: {
			screen: SignUpPermission,
		},
		ChangePW: {
			screen: ChangePW,
		},
	},
	{ 
		initialRouteName: 'Home',
	},
	
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return (
			<>
				<AppContainer />
				<StatusBar
					barStyle="dark-content"
					// dark-content, light-content and default
					hidden={false}
					//To hide statusBar
					backgroundColor="#FAFAFA"
					//Background color of statusBar only works for Android
					translucent={false}
					//allowing light, but not detailed shapes
					networkActivityIndicatorVisible={true}
				/>
			</>
		);
	}
}
