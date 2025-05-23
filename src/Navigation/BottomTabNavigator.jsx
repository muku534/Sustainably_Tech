import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../Components/Pixel/Index';
import { Cart, Home, Products, Setting, Whishlists } from '../Screens/Index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const TabStack = ({ navigation }) => {
    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    lazy: true,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: COLORS.white,
                        // position: 'absolute',
                        // bottom: hp(2),
                        // left: wp(5),
                        // right: wp(5),
                        // elevation: 5,
                        // borderRadius: wp(10),
                        height: hp(8), // reduced height
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        paddingBottom: hp(0.5),
                        paddingTop: hp(0.5),
                    },
                    tabBarItemStyle: {
                        justifyContent: 'center', // vertically center icons
                        alignItems: 'center',
                    },
                }}
            >

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.iconContainer}>
                                {focused ?
                                    <MaterialIcons
                                        name="home"
                                        size={hp(4.1)}
                                        color={'#4A46E9'}
                                    />
                                    :
                                    <AntDesign
                                        name="home"
                                        size={hp(3.3)}
                                        color={COLORS.darkgray1}
                                    />
                                }
                            </View>
                        ),
                        tabBarLabel: "Home",
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons
                                    name={focused ? "cart" : "cart-outline"}
                                    size={hp(focused ? 3.8 : 3.5)}
                                    color={focused ? '#4A46E9' : COLORS.darkgray1}
                                />
                            </View>
                        ),
                        tabBarStyle: { display: 'none' },
                        tabBarLabel: "Cart",
                    }}
                />
                {/* Floating Central Button */}
                <Tab.Screen
                    name="Products"
                    component={Products}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Products',
                        tabBarStyle: { display: 'none' },
                        tabBarIcon: ({ focused }) => (
                            <LinearGradient
                                colors={['#4A46E9', '#B494F7', '#4A46E9', '#B494F7']}
                                style={styles.centerButton}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <MaterialCommunityIcons
                                    name="view-grid-outline"
                                    size={hp(4)}
                                    color={COLORS.white}
                                />
                            </LinearGradient>
                        ),
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                {...props}
                                style={styles.centerButtonWrapper}
                                activeOpacity={0.7}
                            >
                                <LinearGradient
                                    colors={['#4A46E9', '#B494F7']}
                                    style={styles.centerButton}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                >
                                    <MaterialCommunityIcons
                                        name="view-grid-outline"
                                        size={hp(4)}
                                        color={COLORS.white}
                                    />
                                </LinearGradient>
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Whishlists"
                    component={Whishlists}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Whishlists',
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons
                                    name={focused ? "cards-heart" : "cards-heart-outline"}
                                    size={hp(focused ? 3.8 : 3.5)}
                                    color={focused ? '#4A46E9' : COLORS.darkgray1}
                                />
                            </View>
                        ),
                        tabBarLabel: "Whishlist",
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Setting',
                        // tabBarStyle: { display: 'none' },
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.iconContainer}>
                                <FontAwesome
                                    name={focused ? "user" : "user-o"}
                                    size={hp(focused ? 3.6 : 3.3)}
                                    color={focused ? '#4A46E9' : COLORS.darkgray1}
                                />
                            </View>
                        ),
                        tabBarLabel: "Setting",
                    }}
                />
            </Tab.Navigator>
        </>
    );
};


export default TabStack;

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(6), // ensures consistent vertical centering
    },
    centerButtonWrapper: {
        top: -hp(4), // lowered slightly to fit better
        justifyContent: 'center',
        alignItems: 'center',
        width: hp(8),
        height: hp(8),
        borderRadius: hp(4),
        backgroundColor: 'transparent',
    },
    centerButton: {
        width: hp(6.8),
        height: hp(6.8),
        borderRadius: hp(3.4),
        backgroundColor: COLORS.primaryBlue,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
});
