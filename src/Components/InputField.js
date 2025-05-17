import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, fontFamily } from "../../constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "./Pixel/Index";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";


const InputField = ({
    label,
    icon,
    placeholder,
    value,
    onChangeText,
    keyboardType = 'default',
    secureTextEntry,
    editable = true,
    toggleSecure,
    isSecure,
    multiline = false,
    numberOfLines = 2,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View>
            {label && <Text style={[styles.label, { color: COLORS.darkgray }]}>{label}</Text>}
            <View style={[
                styles.inputContainer,
                multiline && styles.multilineContainer,
            ]}>
                {icon && icon}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.darkgray1}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    style={[
                        styles.input,
                        multiline && styles.multilineInput,
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    editable={editable}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    textAlignVertical={multiline ? "top" : "center"}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {toggleSecure && !multiline && (
                    <TouchableOpacity onPress={toggleSecure} style={styles.eyeIcon}>
                        <MaterialIcons
                            name={isSecure ? "visibility-off" : "visibility"}
                            size={24}
                            color={COLORS.darkgray}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    label: {
        fontSize: hp(1.8),
        fontFamily: fontFamily.FONTS.Medium,
        marginBottom: hp(0.5),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(1),
        height: hp(6.5),
        borderRadius: wp(4),
        paddingLeft: wp(2),
    },
    multilineContainer: {
        height: 'auto',
        minHeight: hp(12),
        alignItems: 'flex-start',
        paddingVertical: hp(1),
    },
    input: {
        flex: 1,
        fontSize: hp(1.8),
        paddingHorizontal: wp(3),
        fontFamily: fontFamily.FONTS.Medium,
    },
    multilineInput: {
        minHeight: hp(10),
        paddingTop: hp(1.2),
    },
    eyeIcon: {
        position: 'absolute',
        right: wp(4),
        alignSelf: 'center',
    },
});
