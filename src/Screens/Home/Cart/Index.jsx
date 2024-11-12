import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../Components/Button';

const Cart = ({ navigation }) => {
    const productData = [
        {
            id: 1,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "MB Air M2 2022",
            productSubtitle: "MacBook Series X",
            price: "$2899.99", // price as a number for calculations
            quantity: 1, // default quantity
        },
        {
            id: 2,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "iPhone 14 Pro Max",
            productSubtitle: "Apple Smartphone",
            price: "$1399.99", // price as a number for calculations
            quantity: 1, // default quantity
        },
        // Add more products here...
    ];

    // State to track the quantity of each product
    const [products, setProducts] = useState(productData);

    // Function to increase quantity
    const increaseQuantity = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity += 1;
        setProducts(updatedProducts);
    };

    // Function to decrease quantity (minimum 1)
    const decreaseQuantity = (index) => {
        const updatedProducts = [...products];
        if (updatedProducts[index].quantity > 1) {
            updatedProducts[index].quantity -= 1;
            setProducts(updatedProducts);
        }
    };

    // Function to calculate the total price (converts price string to number)
    const calculateTotalPrice = () => {
        return products.reduce((total, product) => {
            // Remove dollar sign and convert string to number
            const price = parseFloat(product.price.replace('$', ''));
            return total + price * product.quantity;
        }, 0).toFixed(2); // Fix the result to 2 decimal places
    };

    const calculateTotalQuantity = () => {
        return products.reduce((total, product) => total + product.quantity, 0);
    };

    const renderProductItem = ({ item, index }) => (
        <View style={styles.productContainer}>
            <View style={styles.productDetails}>
                <Image source={item.imageSource} resizeMode="contain" style={styles.productImage} />
                <View style={styles.productTextContainer}>
                    <Text style={styles.productName} numberOfLines={1}>
                        {item.productName}
                    </Text>
                    <Text style={styles.productSubtitle} numberOfLines={1}>
                        {item.productSubtitle}
                    </Text>
                </View>
            </View>
            <View style={styles.quantityAndPriceContainer}>
                <View style={styles.quantityControl}>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(index)}>
                        <MaterialCommunityIcons name="minus" size={hp(2.5)} color={COLORS.darkgray1} />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(index)}>
                        <MaterialCommunityIcons name="plus" size={hp(2.5)} color={COLORS.darkgray1} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondaryWhite }}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={hp(3.4)}
                            color={COLORS.darkgray1}
                            style={styles.iconSpacing}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.darkgray, fontSize: hp(2.5), fontFamily: fontFamily.FONTS.bold }}>
                        My Cart
                    </Text>
                    <TouchableOpacity>
                        <Ionicons
                            name="reorder-three"
                            size={hp(3.7)}
                            color={COLORS.darkgray}
                            style={styles.iconSpacing}
                        />
                    </TouchableOpacity>
                </View>


                {/* Cart Items */}
                <FlatList
                    data={products}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.flatListContent}
                />

                <View style={styles.bottomContainer}>
                    <View style={styles.summary}>
                        <SummaryRow label="Total Items:" value={calculateTotalQuantity()} />
                        <SummaryRow label="Delivery Charge:" value="Free" />
                        <SummaryRow label="Total Amount:" value={`$${calculateTotalPrice()}`} />
                    </View>

                    <Button
                        title={"Checkout"}
                        // onPress={handleSignup}
                        // loading={loading}
                    />
                </View>


            </View>
        </SafeAreaView >
    );
};

const SummaryRow = ({ label, value }) => (
    <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>{label}</Text>
        <Text style={styles.summaryValue}>{value}</Text>
    </View>
);



export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp(1.7),
        marginHorizontal: wp(4.5),
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(4),
        marginVertical: hp(1),
        backgroundColor: COLORS.tertiaryWhite,
        paddingHorizontal: wp(2),
        paddingBottom: hp(1.2),
        borderRadius: wp(5),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 7
    },
    productDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(45)
    },
    productImage: {
        width: wp(22),
        height: wp(22)
    },
    productTextContainer: {
        paddingHorizontal: wp(1.8)
    },
    productName: {
        paddingVertical: hp(0.5),
        fontSize: hp(2),
        color: COLORS.darkgray1,
        fontFamily: fontFamily.FONTS.bold
    },
    productSubtitle: {
        paddingVertical: hp(0.1),
        fontSize: hp(1.6),
        color: COLORS.gray,
        fontFamily: fontFamily.FONTS.Medium
    },
    quantityAndPriceContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: wp(2),
        marginVertical: hp(1.2)
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: COLORS.white,
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
        borderRadius: hp(1.5),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
    },
    quantityText: {
        fontSize: hp(2.2),
        color: COLORS.darkgray1,
        marginHorizontal: wp(3),
        fontFamily: fontFamily.FONTS.bold,
    },
    bottomContainer: {
        height: hp(30),
        backgroundColor: COLORS.white,
        borderTopLeftRadius: wp(8),
        borderTopRightRadius: wp(8),
        padding: hp(2),
        shadowColor: COLORS.darkgray1,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        marginTop: 'auto',
    },
    summary: {
        marginVertical: hp(2),
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp(1),
    },
    summaryLabel: {
        fontSize: hp(2.2),
        fontFamily: fontFamily.FONTS.Medium,
        color: COLORS.darkgray1,
    },
    summaryValue: {
        fontSize: hp(2.2),
        fontFamily: fontFamily.FONTS.Medium,
        color: COLORS.darkgray1,
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#3955E9',
        backgroundColor: '#6A3DE8',
        borderRadius: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp(1.5),
    },
    checkoutButtonText: {
        color: COLORS.white,
        fontSize: hp(2.4),
        fontFamily: fontFamily.FONTS.bold,
    },
});
