import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../../../constants';
import fontFamily from '../../../../constants/fontFamily';

const SettingOption = ({ icon, iconName, label, onPress }) => (
    <TouchableOpacity style={styles.optionRow} onPress={onPress}>
        {React.createElement(icon, {
            name: iconName,
            size: hp(3),
            color: COLORS.darkgray,
            style: styles.optionIcon,
        })}
        <Text style={styles.optionLabel}>{label}</Text>
        <MaterialCommunityIcons
            name="chevron-right"
            size={hp(3)}
            color={COLORS.darkgray1}
        />
    </TouchableOpacity>
);

const Setting = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f4f9' }}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }}>
                <View style={styles.container}>
                    <View style={styles.header} />
                    {/* Profile Section */}
                    <View style={styles.profileContainer}>
                        <Image
                            source={require('../../../../assets/images/kemal.jpg')}
                            style={styles.avatar}
                        />
                        <Text style={styles.name}>Mukesh</Text>
                        <Text style={styles.email}>Mukesh123@gmail.com</Text>
                    </View>

                    {/* Options */}
                    <View style={styles.optionsCard}>
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="account-edit-outline"
                            label="Edit Profile"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="lock-reset"
                            label="Change Password"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="bell-ring-outline"
                            label="Notification Settings"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="shield-lock-outline"
                            label="Privacy Policy"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="file-document-outline"
                            label="Terms and Conditions"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="headset"
                            label="Contact Us"
                            onPress={() => { }}
                        />
                        <SettingOption
                            icon={MaterialCommunityIcons}
                            iconName="delete-outline"
                            label="Delete Account"
                            onPress={() => { }}
                        />
                    </View>
                    {/* Logout Section */}
                    <View style={styles.logoutSection}>
                        <TouchableOpacity style={styles.logoutButton} onPress={() => { }}>
                            <MaterialCommunityIcons
                                name="logout"
                                size={hp(3)}
                                color={COLORS.danger || '#FF3B30'}
                                style={styles.optionIcon}
                            />
                            <Text style={styles.logoutLabel}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Setting;

const styles = StyleSheet.create({
    container: { flex: 1, },
    header: { height: hp(16), backgroundColor: '#e6e3fc' },
    profileContainer: { alignItems: 'center', marginTop: -hp(6) },
    avatar: { width: hp(13), height: hp(13), borderRadius: hp(13) },
    name: { fontSize: hp(2.5), color: COLORS.darkgray, fontFamily: fontFamily.FONTS.bold, marginTop: hp(1) },
    email: { fontSize: hp(1.8), color: COLORS.darkgray1, marginHorizontal: hp(0.5), fontFamily: fontFamily.FONTS.Medium, },
    optionsCard: {
        marginTop: hp(2.5),
        paddingHorizontal: wp(2),
        // backgroundColor: '#F6F6F6',
        // borderRadius: hp(1.5),
        paddingVertical: hp(0.5),
        // elevation: 1,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(1.7),
        paddingHorizontal: wp(4),
        // borderBottomWidth: 0.5,
        // borderBottomColor: '#DADADA',
    },
    optionIcon: {
        marginRight: wp(4),
    },
    optionLabel: {
        fontSize: hp(2),
        color: COLORS.darkgray,
        flex: 1,
        fontFamily: fontFamily.FONTS.Medium,
    },
    logoutSection: {
        marginHorizontal: wp(28),
        marginTop: hp(1.5),
    },

    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(1.7),
        paddingHorizontal: wp(4),
    },

    logoutLabel: {
        fontSize: hp(2.2),
        color: COLORS.danger || '#FF3B30',
        flex: 1,
        fontFamily: fontFamily.FONTS.Medium,
    },

    versionText: { textAlign: 'center', color: COLORS.darkgray1, marginTop: hp(1.8), fontSize: hp(1.7) },
});
