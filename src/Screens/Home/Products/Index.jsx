import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS } from '../../../../constants'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../../Components/SearchBar/Index';
import RBSheet from 'react-native-raw-bottom-sheet';
import ProductCard from '../../../Components/ProductCard/Index';
import Header from '../../../Components/Header/Index';

const Products = ({ navigation }) => {
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
            productSubtitle: "MacBook Series X",
            price: "$2899.99",
            category: "Laptops",  // Added category
            isFavorited: false,
        },
        {
            id: 2,
            imageSource: require("../../../../assets/images/th__1_-removebg-preview.png"),
            productName: "iPhone 14 Pro Max",
            productSubtitle: "Apple Smartphone",
            price: "$1399.99",
            category: "Accessories",  // Added category
            isFavorited: false,
        },
        {
            id: 3,
            imageSource: require("../../../../assets/images/Accessorie.png"),
            productName: "Sony WH-1000XM4",
            productSubtitle: "Wireless Headphones",
            price: "$349.99",
            category: "Accessories",  // Added category
            isFavorited: false,
        },
        {
            id: 4,
            imageSource: require("../../../../assets/images/Acer_Aspire_3_AMD_3020e_Dual_core_Processor-removebg-preview.png"),
            productName: "Samsung Galaxy Watch 5",
            productSubtitle: "Smartwatch",
            price: "$249.99",
            category: "Accessories",  // Added category
            isFavorited: false,
        },
        {
            id: 5,
            imageSource: require("../../../../assets/images/Lenovo_IdeaPad_Slim_3_Intel-removebg-preview.png"),
            productName: "Dell XPS 13",
            productSubtitle: "Ultrabook Laptop",
            price: "$1199.99",
            category: "Laptops",  // Added category
            isFavorited: false,
        },
        {
            id: 6,
            imageSource: require("../../../../assets/images/Computers.png"),
            productName: "iPad Pro 11\"",
            productSubtitle: "Apple Tablet",
            price: "$899.99",
            category: "Computers",  // Added category
            isFavorited: false,
        },
        {
            id: 7,
            imageSource: require("../../../../assets/images/Monitor.png"),
            productName: "Samsung QLED 65\"",
            productSubtitle: "Smart TV",
            price: "$1499.99",
            category: "Accessories",  // Added category
            isFavorited: false,
        },
        {
            id: 8,
            imageSource: require("../../../../assets/images/Accessorie.png"),
            productName: "Bose SoundLink",
            productSubtitle: "Portable Speaker",
            price: "$199.99",
            category: "Accessories",  // Added category
            isFavorited: false,
        },
        {
            id: 9,
            imageSource: require("../../../../assets/images/banner.png"),
            productName: "Canon EOS R5",
            productSubtitle: "Mirrorless Camera",
            price: "$3899.99",
            category: "Accessories",  // Added category
            isFavorited: false,
        },
        {
            id: 10,
            imageSource: require("../../../../assets/images/th-removebg-preview.png"),
            productName: "Apple Watch Series 8",
            productSubtitle: "Smartwatch",
            price: "$499.99",
            category: "Accessories",  // Added category
            isFavorited: false,
        },
        {
            id: 11,
            imageSource: require("../../../../assets/images/Accessorie.png"),
            productName: "AirPods Pro 2",
            productSubtitle: "Apple Earbuds",
            price: "$249.99",
            category: "Accessories",  // Added category
            isFavorited: false,
        },
        {
            id: 12,
            imageSource: require("../../../../assets/images/Lenovo_IdeaPad_Slim_3_Intel-removebg-preview.png"),
            productName: "Microsoft Surface Pro 9",
            productSubtitle: "2-in-1 Tablet",
            price: "$1299.99",
            category: "Computers",  // Added category
            isFavorited: false,
        },
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

    // Helper function to convert price string to a number
    const parsePrice = (price) => parseFloat(price.replace(/[^0-9.-]+/g, ''));

    // Filter products based on search text, selected category, brand, and price range
    const filteredProducts = productData.filter(product => {
        const matchesSearchText = product.productName.toLowerCase().includes(searchText.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchesBrand = selectedBrand ? product.productSubtitle.includes(selectedBrand) : true;

        const productPrice = parsePrice(product.price);
        const matchesPriceRange = selectedPriceRange ? (
            (selectedPriceRange === 'Under $500' && productPrice < 500) ||
            (selectedPriceRange === '$500 - $1000' && productPrice >= 500 && productPrice <= 1000) ||
            (selectedPriceRange === '$1000 - $1500' && productPrice > 1000 && productPrice <= 1500) ||
            (selectedPriceRange === 'Above $1500' && productPrice > 1500)
        ) : true;

        return matchesSearchText && matchesCategory && matchesBrand && matchesPriceRange;
    });


    // Function to clear all filters
    const clearFilters = () => {
        setSearchText('');
        setSelectedCategory(null);
        setSelectedBrand(null);
        setSelectedPriceRange(null);
        // refRBSheet.current.close(); // Close the filter sheet after clearing
    };

    // In the Products component...
    const renderProductCard = ({ item, index }) => (
        <ProductCard
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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondaryWhite, }}>
            <View style={styles.container}>
                {/**Header */}
                <Header
                    text="Products"
                    iconLibrary="MaterialCommunityIcons"
                    iconName="shopping-outline"
                    iconColor={COLORS.darkgray1}
                    iconSize={hp(3.7)}
                    onPress={() => navigation.navigate('Cart')}
                    navigation={navigation}
                />
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
                            <View style={styles.buttonRow}>
                                <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
                                    <Text style={styles.clearButtonText}>Clear Filters</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.applyButton} onPress={() => refRBSheet.current.close()}>
                                    <Text style={styles.applyButtonText}>Apply Filters</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </RBSheet>

                {/** product card */}
                <View>
                    <FlatList
                        data={filteredProducts}
                        renderItem={renderProductCard}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        contentContainerStyle={{
                            paddingBottom: hp(25),
                            paddingHorizontal: wp(4),
                        }}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Products

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
    clearButton: {
        flex: 1,
        backgroundColor: COLORS.gray,
        paddingVertical: hp(1.5),
        borderRadius: hp(1),
        alignItems: 'center',
        marginRight: hp(1)
    },
    clearButtonText: {
        color: COLORS.darkgray,
        fontSize: hp(2.1)
    },
    applyButton: {
        flex: 1,
        backgroundColor: COLORS.primaryBlue,
        paddingVertical: hp(1.5),
        borderRadius: hp(1),
        alignItems: 'center'
    },
    applyButtonText: {
        color: 'white',
        fontSize: hp(2.1)
    },
    sectionTitle: {
        fontSize: hp(2),
        color: COLORS.darkgray,
        fontWeight: 'bold',
        marginVertical: hp(1),
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(2)
    },
})