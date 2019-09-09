import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, ActivityIndicator, SafeAreaView, Platform, Text } from 'react-native';
import RecordButtonN from '../../../components/Button/RecordButtonN';
import RecordButton from '../../../components/Button/RecordButton';
import MasonryList from 'react-native-masonry-list';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from 'react-native-vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window');

const MakeRecord = props => (
   <>
      {props.isGetting ? (
         <>
            <TouchableOpacity
               style={styles.backBtn}
               onPress={() => {
                     props.navigation.goBack()
               }}
            >
               <SafeAreaView>
                  <Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
               </SafeAreaView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addBtn} onPress={props.iconPress}>
               <SafeAreaView>
                  <Text style={{ ...ifIphoneX({ paddingTop: 5 }, { paddingTop: 0 }),fontSize: width * 0.05, color: '#3B3B3B', fontWeight: '600' }}>추가</Text>
               </SafeAreaView>
            </TouchableOpacity>
            <View style={styles.container}>
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
                     paddingTop: Platform.OS === 'ios' ? height * 0.065 : height * 0.048,
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
                  title="기록 생성"
               >
                  {props.count >= 1 ? (
                     <>
                        <MasonryList
                           backgroundColor="#FAFAFA"
                           imageContainerStyle={{ borderRadius: 6, marginBottom: 9, }}
                           spacing={2}
                           images={props.listRecords}
                           onPressImage={(item, index) => {
                              props.RecordRegister(item.uri);
                           }}
                           sorted={true}
                        />
                     </>
                  ) : (
                        <>
                           <View
                              style={{
                                 width: width,
                                 paddingTop: height * 0.01,
                                 height: height * 0.6,
                                 justifyContent: 'center',
                                 alignContent: 'center',
                              }}
                           >
                              <Text
                                 style={{
                                    fontSize: width * 0.05,
                                    color: '#BBBBBB',
                                    textAlign: 'center',
                                    alignSelf: 'center',
                                 }}
                              >
                                 최소 1개 이상 기록해야 합니다.
                           </Text>
                           </View>
                        </>
                     )}
               </HeaderScrollView>

               {/* 완료버튼 */}
               <View style={styles.footer}>
                  {/* true면 <RecordTrue /> false면 <RecordFalse /> */}
                  {props.count >= 1 ? <RecordButton onPress={props.btnPress} /> : <RecordButtonN />}
               </View>
            </View>
         </>
      ) : (
            <ActivityIndicator size="large" style={styles.activityIndicator} />
         )}
   </>
);

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
   },
   backBtn: {
      position: 'absolute',
      width: width * 0.2,
      height: height * 0.07,
      top: Platform.OS === 'ios' ? 30 : 15,
      left: 10,
	  zIndex: 1,
	//   backgroundColor: 'blue'
   },
   addBtn: {
      position: 'absolute',
      width: width * 0.25,
      height: height * 0.07,
      top: Platform.OS === 'ios' ? 32 : 15,
      right: 10,
      zIndex: 1,
      fontSize: width * 0.05,
	  alignItems: 'flex-end',
	//   backgroundColor: 'blue'

   },
   header: {
      paddingTop: 23,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      fontSize: width * 0.05,
   },
   content: {
      flex: 1,
   },
   footer: {
      height: height * 0.09,
      marginTop: height * 0.02,
      paddingHorizontal: width * 0.03,
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
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default MakeRecord;