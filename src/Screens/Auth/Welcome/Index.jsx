import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
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
        <LinearGradient
            colors={['#4A46E9', '#B494F7', '#4A46E9', '#B494F7']} // New lighter gradient
            style={styles.container}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
        >
            <StatusBar backgroundColor={COLORS.secondaryWhite} barStyle="dark-content" />
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Sustainably Tech</Text>
                </View>

                <View>
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

                <View style={styles.textContainer}>
                    <Text style={styles.welcomeTitle}>
                        Get ready for an incredible shopping journey
                    </Text>
                    <Text style={styles.welcomeSubtitle}>
                        Our platform is made for you! Customize your preferences for personalized recommendations, exclusive offers, and updates.
                    </Text>

                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.button} disabled={loading} activeOpacity={0.8} onPress={handleSignup}>
                            <LinearGradient
                                colors={[COLORS.darkgray, COLORS.darkgray]}
                                style={styles.gradient}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 0, y: 0 }}
                            >
                                <Text style={styles.loginButtonText}>Get Started</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                      
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(5),
    },
    headerText: {
        color: COLORS.white,
        fontFamily: fontFamily.FONTS.boldItalic,
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
        shadowColor: COLORS.white,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
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
        marginTop: hp(10),
        marginHorizontal: wp(3),
    },
    welcomeTitle: {
        color: COLORS.tertiaryWhite,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(3),
    },
    welcomeSubtitle: {
        marginTop: hp(2),
        color: COLORS.secondaryWhite,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(2.2),
        lineHeight: hp(3),
    },
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
        marginTop: hp(5),
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(4),
        width: wp(80),
        height: hp(6),
    },
    loginButtonText: {
        fontSize: hp(2.4),
        color: COLORS.tertiaryWhite,
        fontFamily: fontFamily.FONTS.bold
    },
    button: {
        borderRadius: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.secondaryWhite,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
    },
});
