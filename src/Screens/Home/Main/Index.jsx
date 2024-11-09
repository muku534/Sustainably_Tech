import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../../../Components/ProductCard/Index';
import Card from '../../../Components/RecentViewCard/Index';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const productData = [
        {
            id: 1,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "MB Air M2 2022",
            productSubtitle: "MacBook Series X",
            price: "$2899.99",
            isFavorited: false, // initial favorite status
        },
        {
            id: 2,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "iPhone 14 Pro Max",
            productSubtitle: "Apple Smartphone",
            price: "$1399.99",
            isFavorited: false, // initial favorite status
        },
        // Add more products here...
    ];

    // State to track the favorite status of each product
    const [favorites, setFavorites] = useState(
        productData.map(product => product.isFavorited)
    );

    // Toggle favorite status for a specific product
    const toggleFavorite = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites[index] = !updatedFavorites[index];
        setFavorites(updatedFavorites);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondaryWhite }}>
            <ScrollView contentContainerStyle={{ paddingBottom: hp(8) }}>
                <View style={styles.headerContainer}>
                    {/* Profile Picture and Icons */}
                    <Image
                        source={require("../../../../assets/images/kemal.jpg")}
                        resizeMode='contain'
                        style={styles.profileImage}
                    />
                    <View style={styles.iconRow}>
                        <TouchableOpacity>
                            <Ionicons
                                name="chatbox-ellipses-outline"
                                size={hp(3.6)}
                                color={COLORS.darkgray1}
                                style={styles.iconSpacing}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons
                                name="notifications-outline"
                                size={hp(3.6)}
                                color={COLORS.darkgray1}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View> {/*Search Bar */}
                    <View style={styles.searchContainer}>
                        {searchText.length === 0 && (
                            <Octicons
                                name="search"
                                size={hp(3)}
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
                    <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
                        <MaterialCommunityIcons name="tune-variant" size={hp(3.5)} color={COLORS.primarygreen} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: hp(1), marginHorizontal: wp(5) }}>
                        <Text style={{ fontSize: hp(2.5), fontFamily: fontFamily.FONTS.Medium, color: COLORS.darkgray, }}>Popular Products</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: hp(1.9), fontFamily: fontFamily.FONTS.regular, color: COLORS.darkgray1, }}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    {/** product card */}
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        marginHorizontal: wp(4),
                        marginBottom: hp(1)
                    }}>
                        {productData.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                imageSource={product.imageSource}
                                productName={product.productName}
                                productSubtitle={product.productSubtitle}
                                price={product.price}
                                onToggleFavorite={() => toggleFavorite(index)}
                                isFavorited={favorites[index]}
                            />
                        ))}
                    </View>
                </View>

                <View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: hp(1), marginHorizontal: wp(5) }}>
                        <Text style={{ fontSize: hp(2.5), fontFamily: fontFamily.FONTS.Medium, color: COLORS.darkgray, }}>Recent Viewed</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: hp(1.9), fontFamily: fontFamily.FONTS.regular, color: COLORS.darkgray1, }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    {productData.map((product, index) => (
                        <Card
                            key={product.id}
                            imageSource={product.imageSource}
                            productName={product.productName}
                            productSubtitle={product.productSubtitle}
                            price={product.price}
                            onToggleFavorite={() => toggleFavorite(index)}
                            isFavorited={favorites[index]}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(4.5),
        marginVertical: hp(1.7),
    },
    profileImage: {
        height: wp(11.5),
        width: wp(11.5),
        borderRadius: wp(2.6),
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginHorizontal: wp(7),
    },
    searchContainer: {
        marginVertical: hp(1.2),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: wp(8),
        paddingHorizontal: wp(4),
        paddingVertical: hp(1),
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
        height: hp(5),
        color: COLORS.darkgray,
        fontFamily: fontFamily.FONTS.regular,
    },
    filterButton: {
        position: 'absolute',
        bottom: hp(1.4),
        right: wp(5),
        backgroundColor: '#ffffff',
        borderRadius: hp(3),
        padding: hp(1.5),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
});
