import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
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
        }, 300);

        // Clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.secondaryWhite} barStyle='dark-content' />
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <ActivityIndicator size="small" color={COLORS.primaryBlue} style={styles.loader} />
            </View>
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondaryWhite,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(4.5),
        fontWeight: '800',
    },
    loader: {
        marginTop: hp(2),  // Space between text and loader
    },
});
