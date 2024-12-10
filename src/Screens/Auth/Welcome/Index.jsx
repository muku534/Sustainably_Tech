import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';
import Button from '../../../Components/Button';

const ImageContainer = ({ source, containerStyle, imageStyle }) => (
    <View style={[styles.imageContainer, containerStyle]}>
        <Image source={source} resizeMode="contain" style={[styles.image, imageStyle]} />
    </View>
);

const Welcome = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleSignup = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.secondaryWhite} barStyle="dark-content" />
            <ScrollView>
                {/* Header */}
                <View style={styles.headerContainer}>

                    <Text style={styles.headerText}>Sustainably Tech</Text>
                </View>

                {/* Images Section */}
                <View>
                    {/* First Row of Images */}
                    <View style={styles.row}>
                        <ImageContainer
                            source={require('../../../../assets/images/Accessories.png')}
                            containerStyle={styles.firstImageContainer}
                            imageStyle={styles.firstImage}
                        />
                        <ImageContainer
                            source={require('../../../../assets/images/Monitor.png')}
                            containerStyle={styles.secondImageContainer}
                            imageStyle={styles.secondImage}
                        />
                    </View>

                    {/* Second Row of Images */}
                    <View style={[styles.row, styles.secondRow]}>
                        <ImageContainer
                            source={require('../../../../assets/images/Accessorie.png')}
                            containerStyle={[styles.firstImageContainer, { marginVertical: hp(1.3) }]}
                            imageStyle={styles.firstImage}
                        />
                        <ImageContainer
                            source={require('../../../../assets/images/banner.png')}
                            containerStyle={styles.secondImageContainer}
                            imageStyle={styles.secondImage}
                        />
                    </View>
                </View>

                {/* Welcome Text */}
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeTitle}>
                        Get ready for an incredible shopping journey
                    </Text>
                    <Text style={styles.welcomeSubtitle}>
                        Our platform is made for you! Customize your preferences for personalized
                        recommendations, exclusive offers, and updates.
                    </Text>

                    {/* Get Started Button */}
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity
                            onPress={handleSignup}
                            disabled={loading}
                            style={styles.button}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondaryWhite,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(3),
    },
    headerText: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.MediumItalic,
        fontSize: hp(3),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    secondRow: {
        marginVertical: hp(-17),
    },
    imageContainer: {
        backgroundColor: COLORS.primaryBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp(8),
    },
    firstImageContainer: {
        height: wp(23),
        width: wp(24),
        borderRadius: wp(22),
    },
    secondImageContainer: {
        height: wp(24),
        width: wp(24),
        borderRadius: wp(24),
        marginVertical: hp(12),
    },
    image: {
        resizeMode: 'contain',
    },
    firstImage: {
        width: wp(33),
        height: wp(33),
    },
    secondImage: {
        width: wp(37),
        height: wp(37),
    },
    textContainer: {
        marginTop: hp(6),
        marginHorizontal: wp(3),
    },
    welcomeTitle: {
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(4.2),
        textAlign: 'left',
        lineHeight: hp(5),
    },
    welcomeSubtitle: {
        marginTop: hp(1.2),
        color: COLORS.secondaryGray,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(2.4),
        textAlign: 'left',
        lineHeight: hp(3),
    },
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
        marginTop: hp(4),
    },
    button: {
        width: wp(80),
        height: hp(6.5),
        borderRadius: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#655CEE'
    },
    buttonText: {
        color: COLORS.secondaryWhite,
        fontSize: hp(2.5),
        fontFamily: fontFamily.FONTS.bold,
    },
});
