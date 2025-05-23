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
import Card from '../../../Components/RecentViewCard/Index';
import Header from '../../../Components/Header/Index';

const Whishlists = ({ navigation }) => {
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
        {
            id: 3,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "iPhone 14 Pro Max",
            productSubtitle: "Apple iPhone 14 Pro Max 6.7-inch OLED, A16 Bionic, Triple Camera",
            price: "$1399.99", // price as a number for calculations
            quantity: 1, // default quantity
        },
        // Add more products here...
    ];

    // State to track the quantity of each product
    const [products, setProducts] = useState(productData);

    const [favorites, setFavorites] = useState(
        productData.map(() => true)  // Set default favorite status to true for all products
    );

    // Toggle favorite status for a specific product
    const toggleFavorite = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites[index] = !updatedFavorites[index];
        setFavorites(updatedFavorites);
    };

    // In the Products component...
    const renderProductCard = ({ item, index }) => (
        <Card
            key={item.id} // Not necessary with FlatList, but can be useful in the function
            imageSource={item.imageSource}
            productName={item.productName}
            productSubtitle={item.productSubtitle}
            price={item.price}
            onPress={() => navigation.navigate("ProductDetails")}
            onToggleFavorite={() => toggleFavorite(index)}
            isFavorited={favorites[index]}
        />
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f4f9', }}>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    text="Wishlist"
                    iconLibrary="MaterialCommunityIcons"
                    iconName="shopping-outline"
                    iconColor={COLORS.darkgray1}
                    iconSize={hp(3.5)}
                    onPress={() => navigation.navigate('Cart')}
                    navigation={navigation}
                />

                <FlatList
                    data={products}
                    renderItem={renderProductCard}
                    keyExtractor={(item) => item.id.toString()}
                />

            </View>

        </SafeAreaView>
    )
}

export default Whishlists

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
});
