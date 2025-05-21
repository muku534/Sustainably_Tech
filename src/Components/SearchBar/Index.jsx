import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'
import fontFamily from '../../../constants/fontFamily'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../Pixel/Index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient'


const SearchBar = ({ searchText, setSearchText, onFilterPress }) => {
    return (
        <View>
            <View style={styles.searchContainer}>
                {searchText.length === 0 && (
                    <Octicons
                        name="search"
                        size={hp(2.5)}
                        color={COLORS.darkgray}
                        style={styles.searchIcon}
                    />
                )}
                <TextInput
                    placeholder="Search your favorite product..."
                    placeholderTextColor={COLORS.darkgray}
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                    style={styles.searchInput}
                />
            </View>

            {/* Floating Filter Button */}
            <TouchableOpacity activeOpacity={0.7} onPress={onFilterPress}>
                <LinearGradient
                    colors={['#4A46E9', '#B494F7']}
                    style={styles.filterButton}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <MaterialCommunityIcons name="tune-variant" size={hp(3)} color={COLORS.tertiaryWhite} />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer: {
        marginVertical: hp(1.2),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: wp(8),
        paddingHorizontal: wp(4),
        marginHorizontal: wp(3.5),
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 4,
        // elevation: 3,
    },
    searchIcon: {
        marginRight: wp(2),
    },
    searchInput: {
        flex: 1,
        justifyContent: 'center',
        fontSize: hp(1.7),
        height: hp(6),
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.Medium,
    },
    filterButton: {
        position: 'absolute',
        bottom: hp(1.2),
        right: wp(4.5),
        // backgroundColor: COLORS.lightBlue,
        backgroundColor: '#4A46E9',
        borderRadius: hp(3),
        padding: hp(1.5),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
})