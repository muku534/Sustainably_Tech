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
                        position: 'absolute',
                        backgroundColor: COLORS.white,
                        // borderRadius: hp(2),
                        borderTopLeftRadius: hp(2),
                        borderTopRightRadius: hp(2),
                        // marginBottom: hp(1),
                        paddingHorizontal: wp(2),
                        width: '100%',
                        alignSelf: 'center',
                        height: hp(7.5),
                        shadowColor: '#000',
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                        shadowOffset: { width: 0, height: 5 },
                    },
                    tabBarItemStyle: {
                        marginVertical: hp(0.5)
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
                                <AntDesign
                                    name="home"
                                    size={hp(focused ? 3.8 : 3.5)}
                                    color={focused ? COLORS.primaryBlue : COLORS.darkgray}
                                />
                                {focused && <AnimatedDot />}
                            </View>
                        ),
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
                                    name="shopping-outline"
                                    size={hp(focused ? 3.8 : 3.5)}
                                    color={focused ? COLORS.primaryBlue : COLORS.darkgray}
                                />
                                {focused && <AnimatedDot />}
                            </View>
                        ),
                        tabBarStyle: { display: 'none' },
                    }}
                />
                {/* Floating Central Button */}
                <Tab.Screen
                    name="Products"
                    component={Products}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Products',
                        tabBarIcon: ({ focused }) => (
                            <LinearGradient
                                colors={['#3955E9', '#6A3DE8']} // Colors for the gradient
                                style={styles.centerButton}
                                start={{ x: 0, y: 0 }} // Gradient start point
                                end={{ x: 1, y: 0 }}   // Gradient end point (horizontal)
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
                            >
                                <LinearGradient
                                    colors={['#3955E9', '#6A3DE8']} // Colors for the gradient
                                    style={styles.centerButton}
                                    start={{ x: 0, y: 0 }} // Gradient start point
                                    end={{ x: 1, y: 0 }}   // Gradient end point (horizontal)
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
                                    name="cards-heart-outline"
                                    size={hp(focused ? 3.8 : 3.5)}
                                    color={focused ? COLORS.primaryBlue : COLORS.darkgray}
                                />
                                {focused && <AnimatedDot />}
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Setting',
                        tabBarStyle: { display: 'none' },
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.iconContainer}>
                                <FontAwesome
                                    name="user-o"
                                    size={hp(focused ? 3.6 : 3.3)}
                                    color={focused ? COLORS.primaryBlue : COLORS.darkgray}
                                />
                                {focused && <AnimatedDot />}
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

const AnimatedDot = () => {
    const animation = new Animated.Value(0);

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, { toValue: 1, duration: 100, useNativeDriver: true }),
                Animated.timing(animation, { toValue: 0, duration: 100, useNativeDriver: true }),
            ])
        ).start();
    }, []);

    const dotStyle = {
        transform: [{ scale: animation.interpolate({ inputRange: [0, 1], outputRange: [1, 1.2] }) }]
    };

    return <Animated.View style={[styles.dot, dotStyle]} />;
};

export default TabStack;

const styles = StyleSheet.create({
    dot: {
        width: wp(1.5),
        height: wp(1.5),
        backgroundColor: COLORS.primaryBlue,
        borderRadius: wp(0.75),
        marginTop: hp(0.5),
    },
    iconContainer: {
        alignItems: 'center',
    },
    centerButtonWrapper: {
        top: -hp(2.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerButton: {
        width: hp(7.5),
        height: hp(7.5),
        borderRadius: hp(7.5),
        backgroundColor: COLORS.primaryBlue,
        justifyContent: 'center',
        alignItems: 'center',

    },
});
