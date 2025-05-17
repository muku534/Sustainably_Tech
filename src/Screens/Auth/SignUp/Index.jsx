import { ScrollView, Alert, KeyboardAvoidingView, StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react'
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../Components/Button';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state

    const handleSignup = () => {
        navigation.navigate("TabStack");
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: COLORS.secondaryWhite }} behavior='position'>
            <StatusBar backgroundColor={COLORS.lightGolden} barStyle={'dark-content'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <View>
                            <Text style={{ fontSize: hp(3.7), fontWeight: '700', color: 'black' }}>Welcome! 👋</Text>
                            <Text style={{ paddingVertical: hp(0.5), fontSize: hp(2.2), fontWeight: '300', color: 'black' }}>We're glad you're here. Sign up to get started!</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Email Address</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Enter your Email'
                                    placeholderTextColor={'gray'}
                                    keyboardType='email-address'
                                    style={styles.textInput}
                                    value={email}
                                    onChangeText={text => setEmail(text)}
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
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.label}>Confirm Password</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Renter your Password'
                                    placeholderTextColor={'gray'}
                                    keyboardType='default'
                                    secureTextEntry
                                    style={styles.textInput}
                                    value={confirmPassword}
                                    onChangeText={text => setConfirmPassword(text)}
                                />
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button
                                title={"Signup"}
                                onPress={handleSignup}
                                loading={loading}
                            />
                        </View>
                    </View>

                    <View style={styles.lineText}>
                        <View style={styles.line} />
                        <Text style={styles.text}>or</Text>
                        <View style={styles.line} />
                    </View>

                    <View style={styles.linkContainer}>
                        <Text style={styles.linkText}>If you alredy have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkbutton}>
                            <Text style={styles.link}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.socialLoginContainer}>
                        <TouchableOpacity style={styles.socialButton} >
                            <Image source={require("../../../../assets/images/google.png")} style={styles.socialIcon} />
                            <Text style={styles.socialText}>Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require("../../../../assets/images/facebook.png")} style={styles.socialIcon} />
                            <Text style={styles.socialText}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:hp(3),
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: hp(42),
    },
    formContainer: {
        marginHorizontal: wp(3),
        marginVertical: hp(2)
    },
    label: {
        color: 'black',
        fontSize: hp(2.2),
        fontWeight: '400',
        marginTop: hp(2.2),
        marginBottom: hp(0.8),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginVertical: hp(1),
        width: '100%',
        height: hp(6.8),
        borderColor: COLORS.gray,
        borderWidth: 0.7,
        borderRadius: wp(2),
        // justifyContent: 'center',
        paddingLeft: wp(2),
    },
    textInput: {
        width: '100%',
        color: 'black',
    },
    buttonContainer: {
        marginVertical: hp(3),
    },
    loginButton: {
        backgroundColor: COLORS.primaryBlue,
        borderRadius: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: hp(2.4),
        paddingVertical: hp(1.5),
        color: COLORS.white,
        fontWeight: '600',
    },
    lineText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(1),
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
        color: 'black',
        textAlign: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp(3),
    },
    linkText: {
        fontSize: hp(2.2),
        color: 'black',
    },
    linkbutton: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    link: {
        color: '#4A46E9',
        fontSize: hp(2.2),
        fontWeight: 'bold',
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
        backgroundColor: '#c0d7d3',
        flexDirection: 'row',
        borderRadius: wp(2),
        padding: hp(0.5),
        alignItems: 'center',
    },
    socialIcon: {
        height: hp(5),
        width: wp(10),
    },
    socialText: {
        fontSize: hp(2.2),
        fontWeight: '700',
        paddingHorizontal: wp(2),
        color: COLORS.darkgray1,
    },
});