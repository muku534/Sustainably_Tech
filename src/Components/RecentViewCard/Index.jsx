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
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
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
                            source={imageSource}
                            resizeMode='contain'
                            style={{ width: wp(22), height: wp(22) }}
                        />
                        <View style={{ paddingHorizontal: wp(3.5) }}>
                            <Text style={{ paddingVertical: hp(0.5), fontSize: hp(2), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>{productName}</Text>
                            <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.gray, fontFamily: fontFamily.FONTS.Medium }}>{productSubtitle}</Text>
                            <Text style={{ paddingVertical: hp(0.1), fontSize: hp(1.6), color: COLORS.gray, fontFamily: fontFamily.FONTS.Medium }}>{productSubtitle}</Text>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: wp(1.5), flexDirection: 'column', paddingTop: hp(2), justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={{ backgroundColor: COLORS.white, paddingBottom: hp(0.5), borderRadius: hp(1.5), }} activeOpacity={0.7} onPress={onToggleFavorite}>
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
                                    elevation: 2,
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ paddingVertical: hp(1), fontSize: hp(2.1), color: COLORS.darkgray1, fontFamily: fontFamily.FONTS.bold }}>{price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default Card

const styles = StyleSheet.create({})