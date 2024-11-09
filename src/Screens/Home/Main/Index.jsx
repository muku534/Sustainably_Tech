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

const Home = () => {
    const [searchText, setSearchText] = useState('');
    // State to keep track of whether the product is favorited
    const [isFavorited, setIsFavorited] = useState(false);

    // Toggle the favorite status
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
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

                {/** product card */}
                <View>

                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingVertical: hp(2), marginHorizontal: wp(5) }}>
                        <Text style={{ fontSize: hp(2.5), fontFamily: fontFamily.FONTS.Medium, color: COLORS.darkgray, }}>Popular Products</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: hp(1.9), fontFamily: fontFamily.FONTS.regular, color: COLORS.darkgray1, }}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: wp(4)
                    }}>
                        <View style={{
                            backgroundColor: COLORS.tertiaryWhite,
                            justifyContent: 'center',
                            // alignItems: 'center',
                            paddingHorizontal: wp(4.2),
                            paddingBottom: hp(1.2),
                            borderRadius: wp(5),
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 2,
                            elevation: 7,
                        }}>
                            <Image
                                source={require("../../../../assets/images/Computers.png")}
                                resizeMode='contain'
                                style={{ width: wp(36), height: wp(36) }}
                            />
                            <View>
                                <Text style={{ paddingVertical: hp(0.1), fontSize: hp(2), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>MB Air M2 2022</Text>
                                <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.gray, fontFamily: fontFamily.FONTS.Medium }}>MacBook Series X</Text>

                                <View style={{ flexDirection: 'row', paddingTop: hp(0.2), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ paddingVertical: hp(1), fontSize: hp(2.1), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>$2899.99</Text>
                                    <TouchableOpacity style={{ backgroundColor: COLORS.white, }} activeOpacity={0.7} onPress={toggleFavorite}>
                                        <MaterialCommunityIcons
                                            name={isFavorited ? "cards-heart" : "cards-heart-outline"}
                                            size={hp(3.4)}
                                            color={isFavorited ? COLORS.red : COLORS.darkgray1}
                                            style={{
                                                backgroundColor: COLORS.white,
                                                borderRadius: hp(1.5),
                                                padding: hp(0.7),
                                                shadowColor: "#000",
                                                shadowOffset: { width: 0, height: 4 },
                                                shadowOpacity: 0.15,
                                                shadowRadius: 4,
                                                elevation: 5,
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: COLORS.tertiaryWhite,
                            justifyContent: 'center',
                            // alignItems: 'center',
                            paddingHorizontal: wp(4.2),
                            paddingBottom: hp(1.2),
                            borderRadius: wp(5),
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 2,
                            elevation: 7,
                        }}>
                            <Image
                                source={require("../../../../assets/images/Computers.png")}
                                resizeMode='contain'
                                style={{ width: wp(35), height: wp(35) }}
                            />
                            <View>
                                <Text style={{ paddingVertical: hp(0.1), fontSize: hp(2), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>MB Air M2 2022</Text>
                                <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.gray, fontFamily: fontFamily.FONTS.Medium }}>MacBook Series X</Text>
                                <View style={{ flexDirection: 'row', paddingTop: hp(0.2), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ paddingVertical: hp(1), fontSize: hp(2.1), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>$2899.99</Text>
                                    <TouchableOpacity style={{ backgroundColor: COLORS.white, }} activeOpacity={0.7} onPress={toggleFavorite}>
                                        <MaterialCommunityIcons
                                            name={isFavorited ? "cards-heart" : "cards-heart-outline"}
                                            size={hp(3.4)}
                                            color={isFavorited ? COLORS.red : COLORS.darkgray1}
                                            style={{
                                                backgroundColor: COLORS.white,
                                                borderRadius: hp(1.5),
                                                padding: hp(0.7),
                                                shadowColor: "#000",
                                                shadowOffset: { width: 0, height: 4 },
                                                shadowOpacity: 0.15,
                                                shadowRadius: 1,
                                                elevation: 5,
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/** Recent Viewed product card */}
                <View style={{ marginVertical: hp(1.5), }}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: hp(1), marginHorizontal: wp(5) }}>
                        <Text style={{ fontSize: hp(2.5), fontFamily: fontFamily.FONTS.Medium, color: COLORS.darkgray, }}>Recent Viewed</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: hp(1.9), fontFamily: fontFamily.FONTS.regular, color: COLORS.darkgray1, }}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    {/**Card */}
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginHorizontal: wp(4),
                        marginVertical: hp(1)
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            width: wp(90),
                            backgroundColor: COLORS.tertiaryWhite,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: wp(2),
                            paddingBottom: hp(1.2),
                            borderRadius: wp(5),
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 2,
                            elevation: 7,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require("../../../../assets/images/Computers.png")}
                                    resizeMode='contain'
                                    style={{ width: wp(22), height: wp(22) }}
                                />
                                <View style={{ paddingHorizontal: wp(3.5) }}>
                                    <Text style={{ paddingVertical: hp(0.5), fontSize: hp(2), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>MB Air M2 2022</Text>
                                    <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.gray, fontFamily: fontFamily.FONTS.Medium }}>MacBook Series X</Text>
                                    <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.gray, fontFamily: fontFamily.FONTS.Medium }}>MacBook Series X</Text>
                                </View>
                            </View>

                            <View style={{ paddingHorizontal: wp(1.5), flexDirection: 'column', paddingTop: hp(2), justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <TouchableOpacity style={{ backgroundColor: COLORS.white, paddingBottom: hp(0.5), }} activeOpacity={0.7} onPress={toggleFavorite}>
                                    <MaterialCommunityIcons
                                        name={isFavorited ? "cards-heart" : "cards-heart-outline"}
                                        size={hp(2.5)}
                                        color={isFavorited ? COLORS.red : COLORS.darkgray1}
                                        style={{
                                            backgroundColor: COLORS.white,
                                            borderRadius: hp(1.5),
                                            padding: hp(0.7),
                                            shadowColor: "#000",
                                            shadowOffset: { width: 0, height: 4 },
                                            shadowOpacity: 0.15,
                                            shadowRadius: 4,
                                            elevation: 5,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={{ paddingVertical: hp(1), fontSize: hp(2.1), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>$2899.99</Text>
                            </View>
                        </View>
                    </View>

                    {/**Card */}
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginHorizontal: wp(4),
                        marginVertical: hp(1)
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            width: wp(90),
                            backgroundColor: COLORS.tertiaryWhite,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: wp(2),
                            paddingBottom: hp(1.2),
                            borderRadius: wp(5),
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 2,
                            elevation: 7,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require("../../../../assets/images/Computers.png")}
                                    resizeMode='contain'
                                    style={{ width: wp(22), height: wp(22) }}
                                />
                                <View style={{ paddingHorizontal: wp(3.5) }}>
                                    <Text style={{ paddingVertical: hp(0.5), fontSize: hp(2), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>MB Air M2 2022</Text>
                                    <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.gray, fontFamily: fontFamily.FONTS.Medium }}>MacBook Series X</Text>
                                    <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.gray, fontFamily: fontFamily.FONTS.Medium }}>MacBook Series X</Text>
                                </View>
                            </View>

                            <View style={{ paddingHorizontal: wp(1.5), flexDirection: 'column', paddingTop: hp(2), justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <TouchableOpacity style={{ backgroundColor: COLORS.white, paddingBottom: hp(0.5), }} activeOpacity={0.7} onPress={toggleFavorite}>
                                    <MaterialCommunityIcons
                                        name={isFavorited ? "cards-heart" : "cards-heart-outline"}
                                        size={hp(2.5)}
                                        color={isFavorited ? COLORS.red : COLORS.darkgray1}
                                        style={{
                                            backgroundColor: COLORS.white,
                                            borderRadius: hp(1.5),
                                            padding: hp(0.7),
                                            shadowColor: "#000",
                                            shadowOffset: { width: 0, height: 4 },
                                            shadowOpacity: 0.15,
                                            shadowRadius: 4,
                                            elevation: 5,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={{ paddingVertical: hp(1), fontSize: hp(2.1), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>$2899.99</Text>
                            </View>
                        </View>
                    </View>
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
        bottom: hp(1.8),
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
