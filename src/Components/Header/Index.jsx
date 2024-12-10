import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import fontFamily from '../../../constants/fontFamily';
import { COLORS } from '../../../constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../Pixel/Index';
// Icon libraries
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const iconLibraries = {
    MaterialCommunityIcons,
    Ionicons,
    FontAwesome5,
};

const Header = ({
    text = '',
    onPress = () => { },
    iconLibrary = '',
    iconName = '',
    iconColor = COLORS.darkgray1,
    iconSize = hp(3.4),
    navigation
}) => {
    const RightIconComponent = iconLibraries[iconLibrary];
    return (
        <View style={styles.headerContainer}>
            {/* Back Button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <FontAwesome5
                    name="chevron-left"
                    size={hp(2.6)}
                    color={COLORS.darkgray1}
                />
            </TouchableOpacity>

            {/* Header Text */}
            <Text style={styles.headerTitle}>{text}</Text>

            {/* Optional Icon Button */}
            {iconName ? (
                <TouchableOpacity onPress={onPress}>
                    <RightIconComponent
                        name={iconName}
                        size={iconSize}
                        color={iconColor}
                    />
                </TouchableOpacity>
            ) : (
                <View style={{ width: iconSize }} /> // Placeholder for alignment
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp(1.7),
        marginHorizontal: wp(4.5),
    },
    iconSpacing: {
        marginRight: wp(2),
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
        fontSize: hp(2.7),
        fontFamily: fontFamily.FONTS.bold,
    },
});
