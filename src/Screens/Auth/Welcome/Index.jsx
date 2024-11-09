import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';

// Reusable component for Image Container
const ImageContainer = ({ source, containerStyle, imageStyle }) => (
    <View style={[styles.imageContainer, containerStyle]}>
        <Image source={source} resizeMode='contain' style={[styles.image, imageStyle]} />
    </View>
);

const Welcome = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.secondaryWhite} barStyle='dark-content' />
            <ScrollView>

                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Sustainably Tech</Text>
                </View>

                <View>
                    {/* First Row of Images */}
                    <View style={styles.row}>
                        <ImageContainer
                            source={require("../../../../assets/images/Accessories.png")}
                            containerStyle={styles.firstImageContainer}
                            imageStyle={styles.firstImage}
                        />

                        <ImageContainer
                            source={require("../../../../assets/images/Monitor.png")}
                            containerStyle={styles.secondImageContainer}
                            imageStyle={styles.secondImage}
                        />
                    </View>


                    {/* Second Row of Images */}
                    <View style={[styles.row, styles.secondRow]}>
                        <ImageContainer
                            source={require("../../../../assets/images/Accessorie.png")}
                            containerStyle={[styles.firstImageContainer, { marginVertical: hp(1.3) }]}
                            imageStyle={styles.firstImage}
                        />
                        <ImageContainer
                            source={require("../../../../assets/images/banner.png")}
                            containerStyle={styles.secondImageContainer}
                            imageStyle={styles.secondImage}
                        />
                    </View>
                </View>

                <View style={{ marginTop: hp(9), marginHorizontal: wp(3) }}>
                    <Text style={{
                        color: COLORS.darkgray,
                        fontFamily: fontFamily.FONTS.Medium,
                        fontSize: hp(4.2),
                        fontWeight: '700',
                        marginHorizontal: wp(1.2),
                        textAlign: 'auto',
                        // paddingLeft: wp(1),
                        lineHeight: hp(5),
                    }}>
                        Get ready for an incredible shopping journey
                    </Text>
                    <Text style={{
                        marginTop: hp(1.2),
                        color: COLORS.secondaryGray,
                        fontFamily: fontFamily.FONTS.Medium,
                        fontSize: hp(2.4),
                        fontWeight: '600',
                        marginHorizontal: wp(1.2),
                        textAlign: 'auto',
                        // paddingLeft: wp(1),
                        lineHeight: hp(3),
                    }}>
                        Our platform is made for you! Customize your preferences for personalized recommendations, exclusive offers, and updates.
                    </Text>

                    <View style={{ width: '100%', alignItems: 'center', marginTop: hp(4) }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style={{
                                backgroundColor: COLORS.primaryBlue,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: wp(2),
                                width: wp(90),
                                // marginHorizontal: 52
                            }}>
                                <Text style={{ color: COLORS.secondaryWhite, fontWeight: '600', padding: hp(1.5), fontSize: hp(2.2) }}>
                                    Get Started
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondaryWhite,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(2),
    },
    headerText: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.MediumItalic,
        fontSize: hp(2.8),
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
});
