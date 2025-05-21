import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../Components/Header/Index';

const SettingOption = ({ icon, iconName, iconSize, label, onPress }) => (
    <TouchableOpacity
        style={styles.optionContainer}
        onPress={onPress}
        activeOpacity={0.7}
    >
        {React.createElement(icon, {
            name: iconName,
            size: iconSize,
            color: COLORS.darkgray,
            style: styles.optionIcon,
        })}
        <Text style={styles.optionText}>{label}</Text>
        <MaterialCommunityIcons
            name="chevron-right"
            size={hp(3)}
            color={COLORS.darkgray}
            style={styles.editIcon}
        />
    </TouchableOpacity>
);

const Setting = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Header
                        text="Profile"
                        navigation={navigation}
                    />

                    {/* Profile Section */}
                    <View style={styles.profileSection}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../../../../assets/images/kemal.jpg')}
                                resizeMode="cover"
                                style={styles.profileImage}
                            />
                            <TouchableOpacity style={styles.editCameraIcon} activeOpacity={0.7}>
                                <MaterialCommunityIcons name="camera-plus" size={hp(2.2)} color={COLORS.white}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profileDetails}>
                            <Text style={styles.profileName}>Mukesh Prajapati</Text>
                            <Text style={styles.profileEmail}>Mukesh0422@gmail.com</Text>
                        </View>
                    </View>

                    {/* Options */}
                    <View style={styles.optionsContainer}>
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="theme-light-dark"
                            iconSize={hp(3)}
                            label="Appearance"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="bell-ring"
                            iconSize={hp(3)}
                            label="Notifications"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="folder-open"
                            iconSize={hp(3)}
                            label="Data Usage"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="help-circle"
                            iconSize={hp(3)}
                            label="Help"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="share"
                            iconSize={hp(3.5)}
                            label="Invite Your Friend"
                            onPress={() => { }}
                        />
                    </View>

                    {/* Logout Button */}
                    <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
                        <MaterialCommunityIcons name="logout" size={hp(2.5)} color={COLORS.white} />
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Setting

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f4f9',
    },
    container: {
        marginVertical: hp(3),
    },
    profileSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        height: wp(33),
        width: wp(33),
        borderRadius: wp(33),
        borderWidth: 5,
        borderColor: '#4A46E9',
        backgroundColor: '#4A46E9',
    },
    editCameraIcon: {
        position: 'absolute',
        bottom: 5,
        right: 0,
        backgroundColor: '#4A46E9',
        borderRadius: wp(5),
        padding: wp(1.8),
        borderWidth: 2,
        borderColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileDetails: {
        marginVertical: hp(1.3),
        alignItems: 'center',
    },
    profileName: {
        color: COLORS.darkgray,
        fontSize: hp(2.2),
        fontFamily: fontFamily.FONTS.bold,
    },
    profileEmail: {
        color: COLORS.secondaryGray,
        fontSize: hp(1.8),
        fontFamily: fontFamily.FONTS.bold,
        paddingVertical: hp(0.5),
    },
    optionsContainer: {
        marginHorizontal: wp(3.5),
        borderRadius: hp(1.5),
        backgroundColor: 'transparent',
        overflow: 'hidden',
        marginTop: hp(2),
        marginBottom: hp(3),
    },
    optionContainer: {
        backgroundColor: '#f6f4f9',
        width: '100%',
        marginVertical: hp(0.1),
        paddingHorizontal: wp(4),
        height: hp(7),
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionIcon: {
        paddingRight: wp(4),
    },
    optionText: {
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(2),
        flex: 1,
    },
    editIcon: {
        paddingHorizontal: wp(1),
    },
    logoutButton: {
        marginTop: hp(3),
        marginHorizontal: wp(4),
        backgroundColor: COLORS.red,
        paddingVertical: hp(1.6),
        borderRadius: hp(1.5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutText: {
        color: COLORS.white,
        fontSize: hp(2.1),
        fontFamily: fontFamily.FONTS.Medium,
        marginLeft: wp(2),
    },
});
