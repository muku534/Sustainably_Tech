import React, { useEffect } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Welcome');
        }, 500);

        // Clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.secondaryWhite} barStyle='dark-content' />
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/images/Sustainably_Tech_logo.png')} style={styles.logo} resizeMode="contain" />
            </View>
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f4f9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        width: wp(80),
        height: hp(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});
