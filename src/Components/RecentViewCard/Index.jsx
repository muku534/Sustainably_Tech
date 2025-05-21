import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'
import fontFamily from '../../../constants/fontFamily'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../Pixel/Index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({ imageSource, productName, productSubtitle, price, onToggleFavorite, isFavorited, onPress }) => {
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            marginHorizontal: wp(4),
            marginVertical: hp(1)
        }
        }>
            <TouchableOpacity style={{
                flexDirection: 'row',
                width: wp(95),
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
            }} activeOpacity={0.7} onPress={onPress}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={imageSource}
                        resizeMode='contain'
                        style={{ width: wp(22), height: wp(22) }}
                    />
                    <View style={{ paddingHorizontal: wp(3.5), width: wp(45) }}>
                        <Text style={{ paddingVertical: hp(0.5), fontSize: hp(1.9), color: COLORS.darkgray, fontFamily: fontFamily.FONTS.bold }} numberOfLines={1}>{productName}</Text>
                        <Text style={{ fontSize: hp(1.6), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.Medium }} numberOfLines={2}>{productSubtitle}</Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: wp(2), flexDirection: 'column', paddingTop: hp(2), justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{
                        backgroundColor: COLORS.white,
                        borderRadius: hp(1.5),
                        padding: hp(0.7),
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.15,
                        shadowRadius: 4,
                        elevation: 2,
                    }} activeOpacity={0.7} onPress={onToggleFavorite}>
                        <MaterialCommunityIcons
                            name={isFavorited ? "cards-heart" : "cards-heart-outline"}
                            size={hp(2.5)}
                            color={isFavorited ? COLORS.red : COLORS.darkgray1}
                        />
                    </TouchableOpacity>
                    <Text style={{ paddingVertical: hp(1), fontSize: hp(2), color: COLORS.darkgray, fontFamily: fontFamily.FONTS.bold }}>{price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})