import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
            size={hp(4)}
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
                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                        >
                            <FontAwesome5
                                name="chevron-left"
                                size={hp(3)}
                                color={COLORS.darkgray1}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Profile</Text>
                        <View style={styles.headerPlaceholder} />
                    </View>

                    {/* Profile Section */}
                    <View style={styles.profileSection}>
                        <View style={styles.profileImageWrapper}>
                            <Image
                                source={require('../../../../assets/images/kemal.jpg')}
                                resizeMode="contain"
                                style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.profileDetails}>
                            <Text style={styles.profileName}>Mukesh Prajapati</Text>
                            <Text style={styles.profileEmail}>Mukesh0422@gmail.com</Text>
                        </View>
                        <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.6}>
                            <AntDesign
                                name="edit"
                                size={hp(2.5)}
                                color={COLORS.secondaryWhite}
                                style={styles.editIcon}
                            />
                            <Text style={styles.editText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Options */}
                    <View style={styles.optionsContainer}>
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="theme-light-dark"
                            iconSize={hp(3.5)}
                            label="Appearance"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="bell-ring"
                            iconSize={hp(3.5)}
                            label="Notifications"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="folder-open"
                            iconSize={hp(3.5)}
                            label="Data Usage"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="help-circle"
                            iconSize={hp(3.5)}
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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Setting

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginVertical:hp(3),
        backgroundColor: COLORS.secondaryWhite,
    },
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(3),
        marginHorizontal: wp(3.5),
    },
    backButton: {
        width: wp(10),
        height: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        // padding: hp(1),
        borderRadius: wp(3),
    },
    headerTitle: {
        color: COLORS.darkgray,
        fontSize: hp(2.8),
        fontFamily: fontFamily.FONTS.bold,
    },
    headerPlaceholder: {
        width: hp(6),
    },
    profileSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(2),
    },
    profileImageWrapper: {
        backgroundColor: '#4A46E9',
        padding: hp(0.5),
        height: wp(38),
        width: wp(38),
        borderRadius: wp(38),
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        height: wp(36),
        width: wp(36),
        borderRadius: wp(36),
    },
    profileDetails: {
        marginVertical: hp(1.3),
        alignItems: 'center',
    },
    profileName: {
        color: COLORS.darkgray,
        fontSize: hp(3.4),
        fontFamily: fontFamily.FONTS.bold,
    },
    profileEmail: {
        color: COLORS.gray,
        fontSize: hp(2),
        fontFamily: fontFamily.FONTS.bold,
        paddingVertical: hp(0.5),
    },
    editProfileButton: {
        backgroundColor: '#4A46E9',
        width: wp(40),
        height: hp(5),
        borderRadius: wp(5),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    editIcon: {
        paddingHorizontal: wp(1),
    },
    editText: {
        paddingHorizontal: wp(1.5),
        color: COLORS.secondaryWhite,
        fontSize: hp(2.2),
        fontFamily: fontFamily.FONTS.Medium,
    },
    optionsContainer: {
        marginHorizontal: wp(3.5),
        marginVertical: hp(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionContainer: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        paddingHorizontal: wp(4.8),
        height: hp(8),
        borderRadius: wp(3),
        marginVertical: hp(0.5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionIcon: {
        paddingRight: wp(4),
    },
    optionText: {
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(2.3),
        flex: 1
    },
});