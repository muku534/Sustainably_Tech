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
        {
            id: 3,
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
            onToggleFavorite={() => toggleFavorite(index)}
            isFavorited={favorites[index]}
        />
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondaryWhite, marginVertical: hp(3), }}>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    text="Wishlist"
                    iconLibrary="MaterialCommunityIcons"
                    iconName="shopping-outline"
                    iconColor={COLORS.darkgray1}
                    iconSize={hp(3.7)}
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
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp(1.7),
        marginHorizontal: wp(4.5),
    },
});
