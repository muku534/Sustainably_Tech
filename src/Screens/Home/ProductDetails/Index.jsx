import { Image, SafeAreaView, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import LinearGradient from 'react-native-linear-gradient';

const ProductDetails = ({ navigation }) => {
    const [selectedColor, setSelectedColor] = useState('Black');
    const [selectedRam, setSelectedRam] = useState('8GB');
    const [isFavorited, setIsFavorited] = useState(false);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: 'Check out this amazing app!',
                url: 'https://example.com', // Replace with your app's URL
                title: 'Sustainably_Tech',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f4f9' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: hp(2) }}>
                {/**Header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                        activeOpacity={0.7}
                    >
                        <FontAwesome5
                            name="chevron-left"
                            size={hp(2)}
                            color={COLORS.darkgray1}
                        />
                    </TouchableOpacity>
                    <View style={styles.iconRow}>
                        <TouchableOpacity style={styles.iconSpacing} onPress={() => setIsFavorited(!isFavorited)}>
                            <MaterialCommunityIcons
                                name={isFavorited ? 'cards-heart' : 'cards-heart-outline'}
                                size={hp(3.2)}
                                color={isFavorited ? COLORS.red : COLORS.darkgray1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onShare}>
                            <MaterialCommunityIcons
                                name="share-variant-outline"
                                size={hp(3.2)}
                                color={COLORS.darkgray}
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
                <TouchableOpacity onPress={() => navigation.navigate("Cart")} activeOpacity={0.7}>
                    <LinearGradient
                        colors={['#B494F7', '#4A46E9',]} // New lighter gradient
                        style={styles.loginButton}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <MaterialCommunityIcons name="cart-variant" size={hp(3)} color={COLORS.secondaryWhite} />
                        <Text style={styles.loginButtonText}>Add To Cart</Text>
                    </LinearGradient>
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
        marginTop: hp(5),
        marginBottom: hp(2),
    },
    backButton: {
        width: wp(9),
        height: hp(4.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: wp(3),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
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
        height: hp(30),
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
        fontSize: hp(2.2),
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
        fontSize: hp(1.8),
        marginLeft: wp(1), // Spacing between star and rating
    },
    reviewCountText: {
        color: COLORS.secondaryGray,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(1.6),
        marginLeft: wp(1), // Spacing between rating and review count
    },
    productPrice: {
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2.1),
    },
    productPrice1: {
        color: COLORS.darkgray1,
        fontFamily: fontFamily.FONTS.bold,
        textDecorationLine: 'line-through',
        fontSize: hp(1.6),
    },
    productBrand: {
        color: COLORS.secondaryGray,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(1.6),
        marginTop: hp(0.5),
    },
    optionsContainer: {
        marginTop: hp(3),
    },
    optionTitle: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.bold,
        fontSize: hp(2),
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
        borderWidth: hp(0.4),
    },
    memoryOptionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    memoryOptionButton: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(1),
        borderRadius: wp(2), // Rounded edges for pills
        backgroundColor: COLORS.white, // Default background
        marginHorizontal: wp(2),
    },
    selectedMemoryOptionButton: {
        backgroundColor: '#655CEE', // Highlight background for selected
    },
    memoryOptionText: {
        color: COLORS.black,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(1.8),
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
        fontSize: hp(2),
        marginBottom: hp(1),
    },
    descriptionText: {
        color: COLORS.darkgray1,
        fontFamily: fontFamily.FONTS.Medium,
        fontSize: hp(1.8),
        lineHeight: hp(2.8),
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        marginBottom: hp(2),
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray,
        borderTopWidth: 0.2,

    },
    loginButton1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(48),
        paddingVertical: hp(0.4),
    },
    loginButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#655CEE',
        borderRadius: wp(3),
        width: wp(48),
        paddingVertical: hp(1.5),
    },
    loginButtonText: {
        paddingHorizontal: wp(2.5),
        color: COLORS.secondaryWhite,
        fontSize: hp(2.1),
        fontFamily: fontFamily.FONTS.bold,
    },
})