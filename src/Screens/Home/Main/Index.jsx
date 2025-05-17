import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { COLORS } from '../../../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductCard from '../../../Components/ProductCard/Index';
import Card from '../../../Components/RecentViewCard/Index';
import RBSheet from 'react-native-raw-bottom-sheet';
import SearchBar from '../../../Components/SearchBar/Index';

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const refRBSheet = useRef();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null); // New state for price range

    const categories = ['Computers', 'Laptops', 'Accessories',];
    const brands = ['Apple', 'Samsung', 'HP', 'Dell'];
    const priceRanges = ['Under $500', '$500 - $1000', '$1000 - $1500', 'Above $1500'];

    const productData = [
        {
            id: 1,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "MB Air M2 2022",
            productSubtitle: "MacBook Series X with M2 Chip 13.6-inch Retina Display, All-day Battery",
            price: "$2899.99",
            isFavorited: false, // initial favorite status
        },
        {
            id: 2,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "iPhone 14 Pro Max",
            productSubtitle: "Apple iPhone 14 Pro Max 6.7-inch OLED, A16 Bionic, Triple Camera",
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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, justifyContent: 'center' }}>
            <ScrollView contentContainerStyle={{ paddingVertical: hp(5), paddingBottom: hp(12) }}>
                {/**Header */}
                <View style={styles.headerContainer}>
                    {/* Profile Picture and Icons */}
                    <Image
                        source={require("../../../../assets/images/kemal.jpg")}
                        resizeMode='contain'
                        style={styles.profileImage}
                    />
                    <View style={styles.iconRow}>
                        <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
                            <Ionicons
                                name="chatbox-ellipses-outline"
                                size={hp(3.3)}
                                color={COLORS.darkgray}
                                style={styles.iconSpacing}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                            <Ionicons
                                name="notifications-outline"
                                size={hp(3.3)}
                                color={COLORS.darkgray}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/**Search bar*/}
                <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    onFilterPress={() => refRBSheet.current.open()}
                />

                {/**Filter Bottom Sheet */}
                <RBSheet
                    ref={refRBSheet}
                    height={hp(35)} // Set a fixed height for the bottom sheet
                    openDuration={250}
                    closeOnDragDown={true}
                    // dragFromTopOnly={true}
                    draggable={true}
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: 'white',
                        },
                        draggableIcon: {
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',

                        }
                    }}
                >
                    <ScrollView style={styles.scrollContainer}>
                        <View style={styles.filterContainer}>
                            <Text style={styles.filterTitle}>Filter By</Text>

                            {/* Category Filter */}
                            <Text style={styles.sectionTitle}>Category</Text>
                            {categories.map((category, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.radioButtonContainer}
                                    onPress={() => setSelectedCategory(category)}
                                >
                                    <View style={styles.radioButton}>
                                        {selectedCategory === category && <View style={styles.radioButtonSelected} />}
                                    </View>
                                    <Text style={styles.radioButtonText}>{category}</Text>
                                </TouchableOpacity>
                            ))}

                            {/* Brand Filter */}
                            <Text style={styles.sectionTitle}>Brand</Text>
                            {brands.map((brand, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.radioButtonContainer}
                                    onPress={() => setSelectedBrand(brand)}
                                >
                                    <View style={styles.radioButton}>
                                        {selectedBrand === brand && <View style={styles.radioButtonSelected} />}
                                    </View>
                                    <Text style={styles.radioButtonText}>{brand}</Text>
                                </TouchableOpacity>
                            ))}

                            {/* Price Range Filter */}
                            <Text style={styles.sectionTitle}>Price Range</Text>
                            {priceRanges.map((priceRange, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.radioButtonContainer}
                                    onPress={() => setSelectedPriceRange(priceRange)}
                                >
                                    <View style={styles.radioButton}>
                                        {selectedPriceRange === priceRange && <View style={styles.radioButtonSelected} />}
                                    </View>
                                    <Text style={styles.radioButtonText}>{priceRange}</Text>
                                </TouchableOpacity>
                            ))}

                            {/* Apply Button */}
                            <TouchableOpacity
                                style={styles.applyButton}
                                onPress={() => {
                                    refRBSheet.current.close();
                                    console.log('Selected Category:', selectedCategory);
                                    console.log('Selected Brand:', selectedBrand);
                                    console.log('Selected Price Range:', selectedPriceRange);
                                }}
                            >
                                <Text style={styles.applyButtonText}>Apply Filters</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </RBSheet>

                {/** product card */}
                <View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: hp(1), marginHorizontal: wp(5) }}>
                        <Text style={{ fontSize: hp(2.2), fontFamily: fontFamily.FONTS.bold, color: COLORS.darkgray, }}>Popular Products</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                            <Text style={{ fontSize: hp(1.8), fontFamily: fontFamily.FONTS.Medium, color: COLORS.darkgray1, }}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        marginHorizontal: wp(3),
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
                                onPress={() => navigation.navigate("ProductDetails")}
                            />
                        ))}
                    </View>
                </View>

                {/** recent viewed product */}
                <View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: hp(1), marginHorizontal: wp(5) }}>
                        <Text style={{ fontSize: hp(2.2), fontFamily: fontFamily.FONTS.bold, color: COLORS.darkgray, }}>Recent Viewed</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                            <Text style={{ fontSize: hp(1.8), fontFamily: fontFamily.FONTS.Medium, color: COLORS.darkgray1, }}>View All</Text>
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
    },
    profileImage: {
        height: wp(11),
        width: wp(11),
        borderRadius: wp(2.6),
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginHorizontal: wp(5),
    },

    scrollContainer: {
        flex: 1,
    },
    filterContainer: {
        padding: hp(2),
    },
    filterTitle: {
        fontSize: hp(2.3),
        fontWeight: 'bold',
        color: COLORS.darkgray,
        marginBottom: hp(1),
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(1),
    },
    radioButton: {
        height: wp(5.5),
        width: wp(5.5),
        borderRadius: wp(5.5),
        borderWidth: 2,
        borderColor: COLORS.primaryBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(2),
    },
    radioButtonSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: COLORS.primaryBlue,
    },
    radioButtonText: {
        fontSize: hp(2.2),
        color: COLORS.darkgray,
    },
    applyButton: {
        marginTop: hp(3),
        backgroundColor: COLORS.primaryBlue,
        paddingVertical: hp(1.5),
        borderRadius: hp(1),
        alignItems: 'center',
    },
    applyButtonText: {
        color: 'white',
        fontSize: hp(2.1),
    },
    sectionTitle: {
        fontSize: hp(2),
        color: COLORS.darkgray,
        fontWeight: 'bold',
        marginVertical: hp(1),
    },
});
