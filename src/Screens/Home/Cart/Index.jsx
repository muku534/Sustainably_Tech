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
import Header from '../../../Components/Header/Index';

const Cart = ({ navigation }) => {
    const productData = [
        {
            id: 1,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "MB Air M2 2022",
            productSubtitle: "MacBook Series X with M2 Chip 13.6-inch Retina Display, All-day Battery",
            price: "$2899.99",
            quantity: 1, // default quantity
            isFavorited: false, // initial favorite status
        },
        {
            id: 2,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "iPhone 14 Pro Max",
            productSubtitle: "Apple iPhone 14 Pro Max 6.7-inch OLED, A16 Bionic, Triple Camera",
            price: "$1399.99",
            quantity: 1, // default quantity
            isFavorited: false, // initial favorite status
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
        <TouchableOpacity style={styles.productContainer} activeOpacity={0.8} onPress={() => navigation.navigate("ProductDetails")}>
            <View style={styles.productDetails}>
                <Image source={item.imageSource} resizeMode="contain" style={styles.productImage} />
                <View style={styles.productTextContainer}>
                    <Text style={styles.productName} numberOfLines={1}>
                        {item.productName}
                    </Text>
                    <Text style={styles.productSubtitle} numberOfLines={1}>
                        {item.productSubtitle}
                    </Text>
                    <Text style={{ fontSize: hp(2), color: COLORS.darkgray, fontFamily: fontFamily.FONTS.bold }}>{item.price}</Text>
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
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f4f9', }}>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    text="My Cart"
                    navigation={navigation}
                />
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
        marginVertical: hp(3),
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
        paddingHorizontal: wp(3.5),
        width: wp(40)
    },
    productName: {
        paddingTop: hp(0.5),
        fontSize: hp(2),
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.bold
    },
    productSubtitle: {
        paddingVertical: hp(0.2),
        fontSize: hp(1.6),
        color: COLORS.darkgray1,
        fontFamily: fontFamily.FONTS.Medium
    },
    quantityAndPriceContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: hp(1.5),
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
        shadowColor: COLORS.darkgray,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
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
        fontSize: hp(1.9),
        fontFamily: fontFamily.FONTS.Medium,
        color: COLORS.darkgray1,
    },
    summaryValue: {
        fontSize: hp(2),
        fontFamily: fontFamily.FONTS.bold,
        color: COLORS.darkgray1,
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
