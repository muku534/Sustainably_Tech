import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'
import fontFamily from '../../../constants/fontFamily'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../Pixel/Index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ProductCard = ({ imageSource, productName, productSubtitle, price, onToggleFavorite, isFavorited, onPress }) => {
    return (
        <View>
            <View style={{
                backgroundColor: COLORS.tertiaryWhite,
                width: wp(45),
                marginVertical: hp(1.2),
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
                <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                    <Image
                        source={imageSource}
                        resizeMode='contain'
                        style={{ width: wp(35), height: wp(30) }}
                    />
                    <View style={{ paddingTop: hp(1) }}>
                        <Text style={{ paddingVertical: hp(0.1), fontSize: hp(2), color: COLORS.darkgray, fontFamily: fontFamily.FONTS.bold }} numberOfLines={1}>{productName}</Text>
                        <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.Medium }} numberOfLines={1}>{productSubtitle}</Text>

                        <View style={{ flexDirection: 'row', paddingTop: hp(0.2), justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ paddingVertical: hp(1), fontSize: hp(2.1), color: COLORS.darkgray, fontFamily: fontFamily.FONTS.bold }}>{price}</Text>
                            <TouchableOpacity style={{ backgroundColor: COLORS.white, borderRadius: hp(1.5), }} activeOpacity={0.7} onPress={onToggleFavorite}>
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
                                        elevation: 2,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({})