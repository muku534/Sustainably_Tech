import { ScrollView, Alert, KeyboardAvoidingView, StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import React, { useState } from 'react'
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../Components/Button';
import fontFamily from '../../../../constants/fontFamily';

const Login = ({ navigation }) => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false); // Add loading state

    const handleChange = (key, value) => {
        setForm(prevState => ({ ...prevState, [key]: value }));
    };

    const handleLogin = () => {
        navigation.navigate("TabStack");
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#f6f4f9' }} behavior='padding'>
            <StatusBar backgroundColor={COLORS.lightGolden} barStyle={'dark-content'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <View style={{ marginTop: hp(1) }}>
                            <Text style={{ fontSize: hp(2.8), fontFamily: fontFamily.FONTS.bold, color: COLORS.darkgray }}>Welcome! 👋</Text>
                            <Text style={{ paddingVertical: hp(0.5), fontSize: hp(1.8), fontFamily: fontFamily.FONTS.Medium, color: COLORS.darkgray1 }}>We're glad you're here. Sign in to continue!</Text>
                        </View>

                        <View style={{ marginTop: hp(1) }}>
                            <Text style={styles.label}>Email Address</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Enter your Email'
                                    placeholderTextColor={'gray'}
                                    keyboardType='email-address'
                                    style={styles.textInput}
                                    value={form.email}
                                    onChangeText={(text) => handleChange('email', text)}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Enter your Password'
                                    placeholderTextColor={'gray'}
                                    keyboardType='default'
                                    secureTextEntry
                                    style={styles.textInput}
                                    value={form.password}
                                    onChangeText={(text) => handleChange('password', text)}
                                />
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity disabled={loading} activeOpacity={0.7} onPress={handleLogin}>
                                <LinearGradient
                                    colors={['#4A46E9', '#B494F7', '#4A46E9', '#B494F7']} // New lighter gradient
                                    style={styles.gradient}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 0, y: 0 }}
                                >
                                    {loading ?
                                        (
                                            <ActivityIndicator color={COLORS.secondaryWhite} size="large" />
                                        )
                                        : (
                                            <Text style={styles.loginButtonText}>Login</Text>
                                        )}
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
                                <Image source={require("../../../../assets/images/google.png")} style={styles.socialIcon} />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.lineText}>
                        <View style={styles.line} />
                        <Text style={styles.text}>or</Text>
                        <View style={styles.line} />
                    </View>

                    <View style={styles.linkContainer}>
                        <Text style={styles.linkText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.linkbutton}>
                            <Text style={styles.link}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: wp(1)
    },
    image: {
        width: '100%',
        height: hp(42),
    },
    formContainer: {
        marginTop: hp(5),
        justifyContent: 'center',
        marginHorizontal: wp(3),
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
    buttonContainer: {
        marginLeft: wp(2.2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(3),
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(4),
        width: wp(73),
        height: hp(6),
    },
    loginButtonText: {
        fontSize: hp(2.4),
        color: COLORS.tertiaryWhite,
        fontFamily: fontFamily.FONTS.bold
    },
    lineText: {
        marginTop: hp(2.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp(4),
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.darkgray1,
    },
    text: {
        width: wp(10),
        fontSize: hp(2.4),
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.Medium,
        textAlign: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp(2),
    },
    linkText: {
        fontSize: hp(1.8),
        fontFamily: fontFamily.FONTS.Medium,
    },
    linkbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp(1)
    },
    link: {
        color: '#4A46E9',
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2),
    },
    socialLoginContainer: {
        marginVertical: hp(4),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialButton: {
        marginHorizontal: wp(3),
        paddingHorizontal: wp(4),
        backgroundColor: COLORS.secondaryWhite,
        flexDirection: 'row',
        borderRadius: wp(4),
        height: hp(6),
        alignItems: 'center',
        shadowColor: COLORS.darkgray,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    socialIcon: {
        height: hp(4),
        width: wp(9),
    },
    socialText: {
        fontSize: hp(1.9),
        fontFamily: fontFamily.FONTS.bold,
        paddingHorizontal: wp(2),
        color: COLORS.darkgray1,
    },
});