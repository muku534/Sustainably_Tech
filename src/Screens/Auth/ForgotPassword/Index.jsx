import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, ScrollView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../../Components/Pixel/Index';
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from '../../../../constants';
import fontFamily from '../../../../constants/fontFamily';
import Header from '../../../Components/Header/Index';
import ForgotPasswordImage from "../../../../assets/images/Forgot_Password.svg";
import Button from '../../../Components/Button';

const ForgotPassword = ({ navigation, route }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isEditable, setIsEditable] = useState(true);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                    <ScrollView contentContainerStyle={{ flex: 1 }}>
                        <View style={styles.container}>
                            <Header
                                navigation={navigation}
                            />
                            <View style={{ paddingHorizontal: wp(5), marginBottom: hp(2) }}>
                                {/* Forgot Password Icon */}
                                <View style={styles.svgContainer}>
                                    <ForgotPasswordImage width={hp(35)} height={hp(20)} />
                                    <Text style={styles.title}>Forgot Password</Text>
                                    <Text style={styles.instruction}>
                                        Please enter the Email ID that you have registered for the Travelogger account.
                                    </Text>
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        placeholder='Enter your Email'
                                        placeholderTextColor={'gray'}
                                        keyboardType='email-address'
                                        style={styles.textInput}
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                    />
                                </View>
                            </View>
                            <Button
                                title={"send OTP"}
                            />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f4f9'
    },
    container: {
        marginTop: hp(5),
    },
    backButton: {
        position: 'absolute',
        top: hp(2),
        left: wp(4),
    },
    svgContainer: {
        marginTop: hp(2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: hp(3),
        textAlign: 'center',
        fontSize: hp(2.8),
        fontFamily: fontFamily.FONTS.bold,
        color: COLORS.darkgray,
        marginBottom: hp(1),
    },
    instruction: {
        fontSize: hp(1.8),
        textAlign: 'center',
        fontFamily: fontFamily.FONTS.Medium,
        color: COLORS.darkgray,
        marginBottom: hp(3),
    },
    label: {
        fontSize: hp(1.8),
        fontFamily: fontFamily.FONTS.Medium,
        marginTop: hp(2),
        marginBottom: hp(0.8),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: hp(6),
        backgroundColor: COLORS.white,
        // borderColor: COLORS.gray,
        // borderWidth: 0.7,
        borderRadius: wp(2),
        paddingLeft: wp(2),
    },
    textInput: {
        fontSize: hp(1.8),
        paddingHorizontal: wp(3),
        fontFamily: fontFamily.FONTS.Medium,
        color: COLORS.darkgray
    },
    button: {
        width: wp(90),
        alignSelf: 'center',
        borderRadius: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
