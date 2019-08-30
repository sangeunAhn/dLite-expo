import React, { Component } from 'react';
import {
	StyleSheet,
	Dimensions,
	TouchableWithoutFeedback,
	Keyboard,
	View,
	BackHandler,
	TouchableOpacity,
	Platform,
	SafeAreaView,
	Text,
	ScrollView,
	CheckBox,
	WebView
} from 'react-native';
import ConfirmButton from '../../../components/Button/ConfirmButton';
import ConfirmButtonN from '../../../components/Button/ConfirmButtonN';
import { TextField } from 'react-native-material-textfield';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper'
import LoginButton from '../../../components/Button/LoginButton';
import LoginButtonN from '../../../components/Button/LoginButtonN';

const { width, height } = Dimensions.get('window');
const PolicyHTML = require('../../../terms2.html');
const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const SignUpPremission = props => (

	<>
	
		<TouchableOpacity
			style={{
				position: 'absolute',
				width: width * 0.2,
				height: height * 0.1,
				top: Platform.OS === 'ios' ? 30 : 15,
				left: 10,
				zIndex: 1,
			}}
			onPress={() => {
				props.navigation.navigate('Home');
			}}
		>
			<SafeAreaView>
				<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
			</SafeAreaView>
		</TouchableOpacity>
		<View style={{backgroundColor: '#FAFAFA', flex:1}}>
			<HeaderScrollView
				headerContainerStyle={{
					justifyContent: 'center', alignItems: 'center', ...ifIphoneX({ paddingTop: 18 }, { paddingTop: 0 }), height: Platform.OS === 'ios'
						? height * 0.1
						: height * 0.08
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
				title="약관 및 개인정보처리방침"
			>
				<View style={styles.container}>
					<Text style={{fontSize:width*0.053, marginTop:height*0.04, color:'#ADCDE9', fontWeight:'bold'}}>
						동방 계정을 생성하려면 약관을 확인하세요.
                    </Text>
					<View style={{ marginVertical: height * 0.05,  width: '100%',  }}>
						<View style={{borderBottomWidth: 1,borderColor: '#CCCFD2'}}>
						<Text style={{ marginBottom: 10, fontSize: width * 0.053, fontWeight: 'bold' }}>
							동방 계정 이용약관
       					</Text>
						   </View>
						<ScrollView nestedScrollEnabled={true} style={{ flex: 1, height: height * 0.4 }}>
							<Text>

								제 1 장 환영합니다!{"\n"}
								제 1 조 (목적){"\n"}
								주식회사 동방(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다. 회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별 서비스에 모두 접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '동방계정 약관(이하 '본 약관')을 마련하였습니다. 본 약관은 여러분이 동방계정 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 주의 깊게 읽어주시기 바랍니다.
{"\n"}
								제 2 조 (약관의 효력 및 변경){"\n"}
								①본 약관의 내용은 동방계정 웹사이트 또는 개별 서비스의 화면에 게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한 여러분 모두에게 그 효력이 발생합니다.{"\n"}
								②회사가 전항에 따라 공지 또는 통지를 하면서 공지 또는 통지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 여러분의 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 여러분이 개정약관에 동의하지 않을 경우 여러분은 이용계약을 해지할 수 있습니다.{"\n"}
								제 3 조 (약관 외 준칙){"\n"}
								본 약관에 규정되지 않은 사항에 대해서는 관련법령 또는 회사가 정한 개별 서비스의 이용약관, 운영정책 및 규칙 등(이하 ‘세부지침’)의 규정에 따릅니다.{"\n"}

								제 4 조 (용어의 정의){"\n"}
								①본 약관에서 사용하는 용어의 정의는 다음과 같습니다.{"\n"}
								1.동방계정: 회사 또는 관계사가 제공하는 개별 서비스를 하나의 로그인계정과 비밀번호로 회원 인증, 회원정보 변경, 회원 가입 및 탈퇴 등을 관리할 수 있도록 회사가 정한 로그인계정 정책을 말합니다.{"\n"}
								2.회원: 동방계정이 적용된 개별 서비스 또는 동방계정 웹사이트에서 본 약관에 동의하고, 동방계정을 이용하는 자를 말합니다.{"\n"}
								3.개별 서비스: 동방계정을 이용하여 접속 가능한 회사 또는 관계사가 제공하는 서비스를 말합니다. 개별 서비스는 추후 추가/변동될 수 있으며 서비스가 추가/변동될 때에는 동방 기업사이트에 변경 사항을 게시합니다.{"\n"}
								4.동방계정 정보 : 동방계정을 이용하기 위해 회사가 정한 필수 내지 선택 입력 정보로서 동방계정 웹사이트 또는 개별 서비스 내 동방계정 설정 화면을 통해 정보 확인, 변경 처리 등을 관리할 수 있는 회원정보 항목을 말합니다.{"\n"}
								제 2 장 동방계정 이용계약{"\n"}
								제 5 조 (계약의 성립){"\n"}
								①동방계정 이용 신청은 모바일 앱 서비스 회원가입 화면에서 여러분이 동방계정 정보에 일정 정보를 입력하는 방식으로 이루어집니다.{"\n"}
								②동방계정 이용계약은 여러분이 본 약관의 내용에 동의한 후 본 조 제1항에서 정한 이용신청을 하면 회사가 입력된 일정 정보를 인증한 후 가입을 승낙함으로써 체결됩니다.{"\n"}
								제 6 조 (동방계정 이용의 제한){"\n"}
								①제5조에 따른 가입 신청자에게 회사는 원칙적으로 동방계정의 이용을 승낙합니다. 다만, 회사는 아래 각 호의 경우에는 그 사유가 해소될 때까지 승낙을 유보하거나 승낙하지 않을 수 있습니다. {"\n"}
								1.회사가 본 약관 또는 세부지침에 의해 여러분의 동방계정을 삭제하였던 경우{"\n"}
								2.여러분이 다른 사람의 명의나 이메일 주소 등 개인정보를 이용하여 동방계정을 생성하려 한 경우{"\n"}
								3.동방계정 생성 시 필요한 정보를 입력하지 않거나 허위의 정보를 입력한 경우{"\n"}
								4.제공 서비스 설비 용량에 현실적인 여유가 없는 경우{"\n"}
								5.서비스 제공을 위한 기술적인 부분에 문제가 있다고 판단되는 경우{"\n"}
								6.기타 회사가 재정적, 기술적으로 필요하다고 인정하는 경우{"\n"}
								7.회사로부터 회원자격정지 조치 등을 받은 회원이 그 조치기간에 이용계약을 임의로 해지하고 재이용을 신청하는 경우{"\n"}
								8.기타 관련법령에 위배되거나 세부지침 등 회사가 정한 기준에 반하는 경우{"\n"}
								②만약, 여러분이 위 조건에 위반하여 동방계정을 생성한 것으로 판명된 때에는 회사는 즉시 여러분의 동방계정 이용을 정지시키거나 동방계정을 삭제하는 등 적절한 제한을 할 수 있습니다.{"\n"}
								제 3 장 동방계정 이용{"\n"}
								제 7 조 (동방계정 제공){"\n"}
								①회사가 개별 서비스와 연동하여 동방계정에서 제공하는 서비스(이하 “동방계정 서비스” 또는 “서비스”) 내용은 아래와 같습니다.{"\n"}
								1.로그인 : 동방계정이 적용된 서비스에서 동방계정과 비밀번호로 로그인할 수 있는 통합 회원 인증 서비스를 이용할 수 있습니다.{"\n"}
								2.동방계정 정보 관리 : 개별 서비스 이용을 위해 동방계정 정보를 통합 관리합니다. 또한, 여러분이 이용하고자 하는 개별 서비스의 유형에 따라 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있고, 이를 동방계정 정보로 저장합니다.{"\n"}
								3.기타 회사가 제공하는 서비스{"\n"}
								②회사는 더 나은 동방계정 서비스의 제공을 위하여 여러분에게 서비스의 이용과 관련된 각종 고지, 관리 메시지 및 기타 광고를 비롯한 다양한 정보를 서비스화면 내에 표시하거나 여러분의 이메일로 전송할 수 있습니다. 광고성 정보 전송의 경우에는 사전에 수신에 동의한 경우에만 전송합니다.{"\n"}
								제 8 조 (동방계정 서비스의 변경 및 종료){"\n"}
								①회사는 동방계정 서비스를 365일, 24시간 쉬지 않고 제공하기 위하여 최선의 노력을 다합니다. 다만, 아래 각 호의 경우 동방계정 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
1.동방계정 서비스용 설비의 유지·보수 등을 위한 정기 또는 임시 점검의 경우{"\n"}
								2.정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 동방계정 이용에 지장이 있는 경우{"\n"}
								3.관계사와의 계약 종료, 정부의 명령/규제 등 회사의 제반 사정으로 동방계정 서비스를 유지할 수 없는 경우{"\n"}
								4.기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우{"\n"}
								①전항에 의한 동방계정 서비스 중단의 경우에는 미리 제12조에서 정한 방법으로 여러분에게 통지 내지 공지하겠습니다. 다만, 회사로서도 예측할 수 없거나 통제할 수 없는 사유(회사의 과실이 없는 디스크 내지 서버 장애, 시스템 다운 등)로 인해 사전 통지 내지 공지가 불가능한 경우에는 그러하지 아니합니다. 이러한 경우에도 회사가 상황을 파악하는 즉시 최대한 빠른 시일 내에 서비스를 복구하도록 노력하겠습니다.{"\n"}
								②여러분에게 중대한 영향을 미치는 서비스의 변경 사항이나 종료는 동방계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 문자메시지 발송하는 방법 등으로 개별적으로 알려 드리겠습니다.{"\n"}
								제 9 조 (동방계정 관리){"\n"}
								①동방계정은 여러분 본인만 이용할 수 있으며, 다른 사람이 여러분의 동방계정을 이용하도록 허락할 수 없습니다. 그리고 여러분은 다른 사람이 여러분의 동방계정을 무단으로 사용할 수 없도록 직접 비밀번호를 관리하여야 합니다. 회사는 다른 사람이 여러분의 동방계정을 무단으로 사용하는 것을 막기 위하여 비밀번호 입력 및 추가적인 본인 확인 절차를 거치도록 할 수 있습니다. 만약 무단 사용이 발견된다면, 고객센터를 통하여 회사에게 알려주시기 바라며, 회사는 무단 사용을 막기 위한 방법을 여러분에게 안내하도록 하겠습니다.{"\n"}
								②여러분은 동방계정 모바일 앱 서비스 내 동방계정 설정 화면을 통하여 여러분의 동방계정 정보를 열람하고 수정할 수 있습니다. 다만, 동방계정 서비스의 제공 및 관리를 위해 필요한 동방계정, 전화번호, 기타 본인확인정보 등 일부 정보는 수정이 불가능할 수 있으며, 수정하는 경우에는 추가적인 본인 확인 절차가 필요할 수 있습니다. 여러분이 이용 신청 시 알려주신 내용에 변동이 있을 때, 직접 수정하시거나 이메일, 고객센터를 통하여 회사에 알려 주시기 바랍니다.{"\n"}
								③여러분이 동방계정 정보를 적시에 수정하지 않아 발생하는 문제에 대하여 회사는 책임을 부담하지 아니합니다.{"\n"}
								제 4 장 계약당사자의 의무{"\n"}
								제 10 조 (회원의 의무){"\n"}
								①여러분이 동방계정 서비스를 이용할 때 아래 각 호의 행위는 하여서는 안 됩니다.{"\n"}
								1.이용 신청 또는 변경 시 허위 사실을 기재하거나, 다른 회원의 동방계정 및 비밀번호를 도용, 부정하게 사용하거나, 다른 사람의 명의를 사용하거나 명의자의 허락 없이 문자메시지(SMS) 인증 등을 수행하는 행위{"\n"}
								2.타인의 명예를 손상시키거나 불이익을 주는 행위{"\n"}
								3.게시판 등에 음란물을 게재하거나 음란사이트를 연결(링크)하는 행위{"\n"}
								4.회사 또는 제3자의 저작권 등 기타 권리를 침해하는 행위{"\n"}
								5.공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음성 등을 타인에게 유포하는 행위{"\n"}
								6.동방계정 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스 감염 자료를 등록 또는 유포하는 행위{"\n"}
								7.동방계정 서비스의 운영을 고의로 방해하거나 안정적 운영을 방해할 수 있는 정보 및 수신자의 명시적인 수신거부의사에 반하여 광고성 정보 또는 스팸메일(Spam Mail)을 전송하는 행위{"\n"}
								8.회사의 동의 없이 서비스 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위와 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 서비스를 복제, 분해 또는 모방하거나 기타 변형하는 행위{"\n"}
								9.타인으로 가장하는 행위 및 타인과의 관계를 허위로 명시하는 행위{"\n"}
								10.다른 회원의 개인정보를 수집, 저장, 공개하는 행위{"\n"}
								11.자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할 목적으로 허위의 정보를 유통시키는 행위{"\n"}
								12.윤락행위를 알선하거나 음행을 매개하는 내용의 정보를 유통시키는 행위{"\n"}
								13.수치심이나 혐오감 또는 공포심을 일으키는 말이나 글, 사진을 계속하여 상대방에게 도달하게 하여 상대방의 일상적 생활을 방해하는 행위{"\n"}
								14.기타 불법한 행위{"\n"}
								②여러분은 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도·증여할 수 없으며, 담보로 제공할 수 없습니다.{"\n"}
								③혹시라도 여러분이 관련 법령, 회사의 모든 약관 또는 정책을 준수하지 않는다면, 회사는 여러분의 위반행위 등을 조사할 수 있고, 여러분의 서비스 이용을 잠시 또는 계속하여 중단하거나, 재가입에 제한을 둘 수도 있습니다.{"\n"}
								④본 조에서 정한 사항 및 그 밖에 동방계정 서비스의 이용에 관한 자세한 사항은 동방 운영정책 등을 참고해 주시기 바랍니다.{"\n"}
								제 11 조 (개인정보의 보호){"\n"}
								여러분의 개인정보의 안전한 처리는 회사에게 있어 중요한 일 중 하나입니다. 여러분의 개인정보는 서비스의 원활한 제공을 위하여 여러분이 동의한 목적과 범위 내에서만 이용됩니다. 법령에 의하거나 여러분이 별도로 동의하지 아니하는 한 회사가 여러분의 개인정보를 제3자에게 제공하는 일은 없습니다. {"\n"}
								{"\n"}

								제 12 조 (회원에 대한 통지 및 공지){"\n"}
								회사는 여러분과의 의견 교환을 소중하게 생각합니다. 여러분은 언제든지 문의하기 공간을 통해 의견을 개진할 수 있습니다. 여러분에게 중대한 영향을 미치는 사항의 경우에는 동방계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 문자메시지 발송하는 방법 등으로 개별적으로 알려 드리겠습니다.{"\n"}
								{"\n"}
								제 5 장 이용계약 해지 등{"\n"}
								제 13 조 (이용계약 해지){"\n"}
								①여러분이 동방계정 이용을 더 이상 원치 않는 때에는 언제든지 서비스 내 제공되는 메뉴를 이용하여 이용계약의 해지 신청을 할 수 있으며, 회사는 법령이 정하는 바에 따라 신속히 처리하겠습니다.{"\n"}
								②회사는 법령에서 정하는 기간 동안 여러분이 동방계정 서비스를 이용하기 위해 동방계정 로그인 혹은 접속한 기록이 없는 경우 여러분이 등록한 이메일주소, 휴대폰번호로 이메일, 문자메시지 또는 동방톡 메시지를 보내는 등 기타 유효한 수단으로 통지 후 여러분의 동방계정 정보를 파기하거나 분리 보관할 수 있으며, 이로 인해 동방계정 서비스 이용을 위한 필수적인 정보가 부족할 경우 이용계약이 해지될 수도 있습니다. {"\n"}
								③이용계약이 해지된 경우라도 여러분은 다시 회사에 대하여 이용계약의 체결을 신청할 수 있습니다.{"\n"}
								제 14 조 (손해배상){"\n"}
								①회사는 회사의 과실로 인하여 여러분이 손해를 입게 될 경우 본 약관 및 관련 법령에 따라 여러분의 손해를 배상하겠습니다. 다만 회사는 회사의 과실 없이 발생된 아래와 같은 손해에 대해서는 책임을 부담하지 않습니다. 또한 회사는 법률상 허용되는 한도 내에서 간접 손해, 특별 손해, 결과적 손해, 징계적 손해, 및 징벌적 손해에 대한 책임을 부담하지 않습니다.{"\n"}
								1.천재지변 또는 이에 준하는 불가항력의 상태에서 발생한 손해{"\n"}
								2.여러분의 귀책사유로 서비스 이용에 장애가 발생한 경우{"\n"}
								3.서비스에 접속 또는 이용과정에서 발생하는 개인적인 손해{"\n"}
								4.제3자가 불법적으로 회사의 서버에 접속하거나 서버를 이용함으로써 발생하는 손해{"\n"}
								5.제3자가 회사 서버에 대한 전송 또는 회사 서버로부터의 전송을 방해함으로써 발생하는 손해{"\n"}
								6.제3자가 악성 프로그램을 전송 또는 유포함으로써 발생하는 손해{"\n"}

								7.전송된 데이터의 생략, 누락, 파괴 등으로 발생한 손해, 명예훼손 등 제3자가 서비스를 이용하는 과정에서 발생된 손해{"\n"}
								8.기타 회사의 고의 또는 과실이 없는 사유로 인해 발생한 손해{"\n"}
								제 15 조 (분쟁의 해결){"\n"}
								본 약관 또는 서비스는 대한민국법령에 의하여 규정되고 이행됩니다. 서비스 이용과 관련하여 회사와 여러분 간에 분쟁이 발생하면 이의 해결을 위해 성실히 협의할 것입니다. 그럼에도 불구하고 해결되지 않으면 민사소송법상의 관할법원에 소를 제기할 수 있습니다.{"\n"}
								{"\n"}
								공고일자 : 2019년 8월 30일{"\n"}
								시행일자 : 2019년 8월 30일{"\n"}
							</Text>
						</ScrollView>
						<View style={{flexDirection:'row', marginTop:10}}>
							<Text>동의</Text><CheckBox onValueChange={props.agree1} value={props.value1} />
						</View>
					</View>
					<View style={{marginBottom:height*0.05}}>
					<View style={{borderBottomWidth: 1,borderColor: '#CCCFD2'}}>
						<Text style={{ marginBottom: 10, fontSize: width * 0.053, fontWeight: 'bold' }}>개인정보 처리방침</Text>
						</View>
						<ScrollView nestedScrollEnabled={true} style={{ flex: 1, height: height * 0.4 }}>
							<Text>
								`동방`은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.{"\n"}
								`동방`  회사는 개인정보처리방침을 개정하는 경우 모바일 앱 서비스(또는 개별공지)를 통하여 공지할 것입니다.{"\n"}
								○ 본 방침은부터 2019년  8월  31일부터 시행됩니다.{"\n"}
								1. 개인정보의 처리 목적 `동방`은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.{"\n"}
								가. 홈페이지 회원가입 및 관리{"\n"}
								회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 등을 목적으로 개인정보를 처리합니다.{"\n"}
								나. 재화 또는 서비스 제공{"\n"}
								서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증 등을 목적으로 개인정보를 처리합니다.{"\n"}
								다. 마케팅 및 광고에의 활용{"\n"}
								신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.{"\n"}
								2. 개인정보 파일 현황{"\n"}
								1. 개인정보 파일명 : '동방' 개인정보- 개인정보 항목 : 이메일, 휴대전화번호, 비밀번호, 로그인ID, 성별, 생년월일, 이름, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 대학교명- 수집방법 : 홈페이지- 보유근거 : 본인 동의- 보유기간 : 5년- 관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년, 표시/광고에 관한 기록 : 6개월{"\n"}
								3. 개인정보의 처리 및 보유 기간① `동방`은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.{"\n"}
								1.`홈페이지 회원가입 및 관리``홈페이지 회원가입 및 관리`와 관련한 개인정보는 수집.이용에 관한 동의일로부터`5년`까지 위 이용목적을 위하여 보유.이용됩니다.-보유근거 : 본인 동의-관련법령 : 1)소비자의 불만 또는 분쟁처리에 관한 기록 : 3년2) 표시/광고에 관한 기록 : 6개월{"\n"}
								4. 개인정보의 제3자 제공에 관한 사항① `동방`은 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.{"\n"}
								{"\n"}
								{"\n"}
								5. 개인정보처리 위탁① `동방`('동방')은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
1. `'동방' 관리팀`- 위탁받는 자 (수탁자) : '동방'- 위탁하는 업무의 내용 : 회원제 서비스 이용에 따른 본인확인, 불만처리 등 민원처리, 고지사항 전달, 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공- 위탁기간 : 5년② `동방`은 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.{"\n"}
								6. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.{"\n"}
								① 정보주체는 동방에 대해 언제든지 개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.② 제1항에 따른 권리 행사는동방에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편, 1:1 문의하기 (카카오톡 플러스친구) 등을 통하여 하실 수 있으며 동방은 이에 대해 지체 없이 조치하겠습니다.③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.⑥ 동방은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.{"\n"}
								7. 처리하는 개인정보의 항목 작성 ① `동방`은 다음의 개인정보 항목을 처리하고 있습니다.{"\n"}
								1`홈페이지 회원가입 및 관리`- 필수항목 : 이메일, 비밀번호, 로그인ID, 성별, 생년월일, 이름, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 대학교명{"\n"}
								8. 개인정보의 파기`동방`('동방')은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.{"\n"}
								-파기절차이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.-파기기한이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.{"\n"}
								-파기방법전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.{"\n"}
								9. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항{"\n"}
								① 동방 은 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠기(cookie)’를 사용합니다. ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. 가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다. 나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구`인터넷 옵션`개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.{"\n"}
								10. 개인정보 보호책임자 작성① 동방은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.{"\n"}
								▶ 개인정보 보호책임자 성명 :이재준직책 :대표직급 :대표연락처 :010-4010-9043, leejjun28@gmail.com, ※ 개인정보 보호 담당부서로 연결됩니다.▶ 개인정보 보호 담당부서부서명 :담당자 :연락처 :, , ② 정보주체께서는 동방의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 동방은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.{"\n"}
								11. 개인정보 처리방침 변경{"\n"}
								①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.{"\n"}
								12. 개인정보의 안전성 확보 조치 `동방`('동방')은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.{"\n"}
								1. 내부관리계획의 수립 및 시행개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.2. 개인정보의 암호화이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.3. 접속기록의 보관 및 위변조 방지개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.4. 개인정보에 대한 접근 제한개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.5. 문서보안을 위한 잠금장치 사용개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.{"\n"}
								{"\n"}
							</Text>
						</ScrollView>
						<View style={{flexDirection:'row', marginTop:10}}>
							<Text>동의</Text><CheckBox onValueChange={props.agree2} value={props.value2} />
						</View>
					</View>
				{props.value1 && props.value2 == true ? (
				<LoginButton title={'다음'} />
				) : (
							<LoginButtonN title={'다음'} onPress={props.login} />
					)} 
				</View>



			</HeaderScrollView>

			</View>
		
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal:'7%',
		backgroundColor: '#FAFAFA',
		
	},
	header: {
		width: '100%',
		height: height * 0.15,
		// backgroundColor: '#ff9a9a',
	},
	title: {
		paddingHorizontal: 10,
		width: '100%',
		// backgroundColor: '#9aa9ff'
	},
	content: {
		// backgroundColor: '#d6ca1a',
	},
	footer: {
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		bottom: 10,
		width: '100%',
		textAlign: 'center',
		backgroundColor: '#FAFAFA',
		paddingTop: 10,
		alignSelf: 'center',

		paddingHorizontal: width * 0.03,
	},
});

export default SignUpPremission;
