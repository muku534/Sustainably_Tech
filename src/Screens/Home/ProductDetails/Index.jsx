import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../../constants'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductDetails = ({ navigation }) => {
    const [selectedColor, setSelectedColor] = useState('Black');
    const [selectedRam, setSelectedRam] = useState('8GB');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondaryWhite, marginVertical: hp(3), }}>
            <ScrollView contentContainerStyle={{ paddingBottom: hp(2) }}>
                {/**Header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <FontAwesome5
                            name="chevron-left"
                            size={hp(3)}
                            color={COLORS.darkgray1}
                        />
                    </TouchableOpacity>
                    <View style={styles.iconRow}>
                        <TouchableOpacity onPress={() => navigation.navigate('Whishlists')}>
                            <MaterialCommunityIcons
                                name="cards-heart-outline"
                                size={hp(3.6)}
                                color={COLORS.darkgray1}
                                style={styles.iconSpacing}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <MaterialCommunityIcons
                                name="shopping-outline"
                                size={hp(3.6)}
                                color={COLORS.darkgray1}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Image
                        source={require("../../../../assets/images/Monitor.png")}
                        resizeMode='contain'
                        style={styles.productImage}
                    />
                    <View style={{ marginHorizontal: wp(4), }}>
                        {/** Product Details */}
                        <View style={styles.productDetailsContainer}>
                            <View style={styles.rowBetween}>
                                <Text style={styles.productName}>Samsung QLED 65</Text>
                                {/* Wishlist Icon and Ratings */}
                                <View style={styles.iconAndRatingsContainer}>
                                    <View style={styles.ratingsContainer}>
                                        <MaterialCommunityIcons
                                            name="star"
                                            size={hp(2.8)}
                                            color="#FFC107" // Gold color for the star
                                        />
                                        <Text style={styles.ratingText}>4.5</Text>
                                        <Text style={styles.reviewCountText}>(120 Reviews)</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.productBrand}>By Samsung</Text>
                        </View>

                        {/** Options Section */}
                        <View style={styles.optionsContainer}>
                            {/** Color Selection */}
                            <Text style={styles.optionTitle}>Color:</Text>
                            <View style={styles.colorOptionRow}>
                                {['#333333', '#FFFFFF', '#D4B083'].map((color) => (
                                    <TouchableOpacity
                                        key={color}
                                        style={[
                                            styles.colorOptionButton,
                                            selectedColor === color && styles.selectedColorOptionButton,
                                            { backgroundColor: color }, // Set background color dynamically
                                        ]}
                                        onPress={() => setSelectedColor(color)}
                                    />
                                ))}
                            </View>

                            {/** Memory Selection */}
                            <Text style={styles.optionTitle}>Memory:</Text>
                            <View style={styles.memoryOptionRow}>
                                {['8 GB', '16 GB', '18 GB'].map((ram) => (
                                    <TouchableOpacity
                                        key={ram}
                                        style={[
                                            styles.memoryOptionButton,
                                            selectedRam === ram && styles.selectedMemoryOptionButton,
                                        ]}
                                        onPress={() => setSelectedRam(ram)}
                                    >
                                        <Text
                                            style={[
                                                styles.memoryOptionText,
                                                selectedRam === ram && styles.selectedMemoryOptionText,
                                            ]}
                                        >
                                            {ram}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        {/** Description Section */}
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.descriptionTitle}>Description</Text>
                            <Text style={styles.descriptionText}>
                                Experience unparalleled picture quality with the Samsung QLED 65-inch TV. Perfect for movies, gaming, and everything in between, this TV delivers stunning visuals and premium sound.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/** Price and Add to Cart Section */}
            <View style={styles.bottomButtonContainer}>
                <View style={styles.loginButton1}>
                    <Text style={styles.productPrice}>$1499.99</Text>
                    <Text style={styles.productPrice1}>$1999.99</Text>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Cart")} activeOpacity={0.7}>
                    <Text style={styles.loginButtonText}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(4.5),
        marginVertical: hp(1.7),
    },
    backButton: {
        width: wp(10),
        height: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        // padding: hp(1),
        borderRadius: wp(3),
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginHorizontal: wp(7),
    },
    productImage: {
        width: '100%',
        height: hp(34),
    },
    productDetailsContainer: {
        marginTop: hp(2),
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productName: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2.9),
    },
    iconAndRatingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heartIcon: {
        marginRight: wp(3), // Spacing between heart and ratings
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2),
        marginLeft: wp(1), // Spacing between star and rating
    },
    reviewCountText: {
        color: COLORS.secondaryGray,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(1.8),
        marginLeft: wp(1), // Spacing between rating and review count
    },
    productPrice: {
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2.4),
    },
    productPrice1: {
        color: COLORS.darkgray1,
        fontFamily: fontFamily.FONTS.bold,
        textDecorationLine: 'line-through',
        fontSize: hp(1.8),
    },
    productBrand: {
        color: COLORS.secondaryGray,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(2),
        marginTop: hp(0.5),
    },
    optionsContainer: {
        marginTop: hp(3),
    },
    optionTitle: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2.3),
        marginBottom: hp(1),
    },
    colorOptionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(2),
    },
    colorOptionButton: {
        width: wp(8),
        height: wp(8),
        borderRadius: wp(4), // Makes it circular
        marginHorizontal: wp(2),

    },
    selectedColorOptionButton: {
        borderColor: '#655CEE', // Highlight border color for selected
        borderWidth: hp(0.6),
    },
    memoryOptionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    memoryOptionButton: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(1),
        borderRadius: wp(2), // Rounded edges for pills
        backgroundColor: '#F1F1F1', // Default background
        marginHorizontal: wp(2),
    },
    selectedMemoryOptionButton: {
        backgroundColor: '#655CEE', // Highlight background for selected
    },
    memoryOptionText: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.medium,
        fontSize: hp(2),
    },
    selectedMemoryOptionText: {
        color: COLORS.secondaryWhite, // White text for selected pill
        fontFamily: fontFamily.FONTS.bold,
    },
    descriptionContainer: {
        marginTop: hp(3),
    },
    descriptionTitle: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2.5),
        marginBottom: hp(1),
    },
    descriptionText: {
        color: COLORS.darkgray1,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(2),
        lineHeight: hp(2.8),
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: hp(0.2),
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray,
        borderTopWidth: hp(0.1),
        shadowColor: "#000", // Set the shadow color
        shadowOffset: { width: 0, height: 2 }, // Vertical shadow offset
        shadowOpacity: 0.1, // Opacity of the shadow
        shadowRadius: 4, // Blurring the shadow
        elevation: 5,
    },
    loginButton1: {
        borderRadius: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(48),
        // marginHorizontal: wp(2)
    },
    loginButton: {
        borderRadius: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#655CEE',
        borderRadius: wp(3),
        width: wp(48),
    },
    loginButtonText: {
        color: COLORS.secondaryWhite,
        fontSize: hp(2.5),
        fontFamily: fontFamily.FONTS.bold,
        paddingVertical: hp(1.5),
    },
})