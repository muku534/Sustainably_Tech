import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from './Pixel/Index';
import { Loader } from './Loader';
import LinearGradient from 'react-native-linear-gradient';
import fontFamily from '../../constants/fontFamily';

const Button = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                onPress={props.onPress}
                disabled={props.disabled || props.loading}
                style={{ position: 'relative' }} // Ensure loader can be absolutely positioned
            >
                <LinearGradient
                    colors={['#3955E9', '#6A3DE8']} // Colors for the gradient
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: wp(2),
                        width: wp(90),
                        height: hp(5.8), // Ensure the height is set even when loading
                        position: 'relative', // Keep the gradient background in place
                    }}
                    start={{ x: 0, y: 0 }} // Gradient start point
                    end={{ x: 1, y: 0 }}   // Gradient end point (horizontal)
                >
                    {props.loading ? (
                        <Loader
                            isLoading={props.loading}
                            color={COLORS.secondaryWhite}
                            style={{
                                position: 'absolute', // Position loader absolutely
                                top: '50%', // Center vertically
                                left: '50%', // Center horizontally
                                transform: [{ translateX: -wp(8) }, { translateY: -hp(2) }], // Adjust loader's position
                            }}
                        />
                    ) : (
                        <Text
                            style={{
                                color: COLORS.secondaryWhite,
                                fontFamily: fontFamily.FONTS.Medium,
                                padding: hp(1.5),
                                fontSize: hp(2.2),
                            }}
                        >
                            {props.title}
                        </Text>
                    )}
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: hp(5.8),
        width: wp(90),
        borderColor: COLORS.primary,
        borderRadius: wp(2),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
});
export default Button;
