import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from './Pixel/Index';
import { Loader } from './Loader';

const Button = ({
    title = "Button", // Default title
    onPress,
    disabled = false,
    loading = false,
    buttonStyle = {}, // Allow custom button styles
    textStyle = {},   // Allow custom text styles
}) => {
    return (
        <View style={[styles.container, buttonStyle]}>
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled || loading}
                style={styles.touchable}
            >
                <LinearGradient
                    colors={['#4A46E9', '#8071F3']} // Gradient colors
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    {loading ? (
                        <Loader
                            isLoading={loading}
                            color={COLORS.secondaryWhite}
                            style={styles.loader}
                        />
                    ) : (
                        <Text style={[styles.text, textStyle]}>
                            {title}
                        </Text>
                    )}
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    touchable: {
        position: 'relative',
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp(4),
        width: wp(90),
        height: hp(6.5), 
    },
    text: {
        color: COLORS.secondaryWhite,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2.5),
        textAlign: 'center',
    },
    loader: {
        position: 'absolute',
        alignSelf: 'center',
    },
});

export default Button;
