/* eslint-disable prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from './Pixel/Index';
import { Loader } from './Loader';

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;
    const buttonTextColor = props.disabled ? COLORS.gray : COLORS.white;

    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={{
                    ...styles.button,
                    ...{ backgroundColor: COLORS.lightGreen },
                    ...props.style,
                }}
                onPress={props.onPress} disabled={props.disabled || props.loading}
            >
                {props.loading ? (
                    <Loader isLoading={props.loading} color={COLORS.secondaryWhite} />
                ) : (
                    <Text style={{ color: COLORS.white, fontWeight: '700', fontSize: hp(2.2) }}>{props.title}</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: hp(5.8),
        width: wp(90),
        // paddingBottom: 16,
        // paddingVertical: 10,
        borderColor: COLORS.primary,
        // borderWidth: 2,
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
