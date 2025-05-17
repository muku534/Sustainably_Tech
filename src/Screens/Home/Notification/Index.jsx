import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../../constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../Components/Header/Index';

// Sample notifications data
const notificationsData = [
    {
        id: '1',
        title: 'Order Shipped',
        message: 'Your order #12345 has been shipped and is on its way!',
        timestamp: '2 mins ago',
        type: 'order', // Can be 'order', 'message', 'alert', etc.
        isRead: false,
    },
    {
        id: '2',
        title: 'New Message',
        message: 'You have a new message from John Doe.',
        timestamp: '15 mins ago',
        type: 'message',
        isRead: true,
    },
    {
        id: '3',
        title: 'System Alert',
        message: 'Your subscription will expire in 3 days.',
        timestamp: '1 hour ago',
        type: 'alert',
        isRead: false,
    },
    {
        id: '4',
        title: 'Discount Offer',
        message: 'Get 20% off on your next purchase with the code SAVE20.',
        timestamp: '1 day ago',
        type: 'offer',
        isRead: true,
    },
];

const NotificationScreen = ({ navigation }) => {
    const [notifications, setNotifications] = useState(notificationsData);

    const markAsRead = (id) => {
        const updatedNotifications = notifications.map((notification) =>
            notification.id === id ? { ...notification, isRead: true } : notification
        );
        setNotifications(updatedNotifications);
    };

    const renderNotificationItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={[styles.notificationCard,]}
                activeOpacity={0.6}
            // onPress={() => markAsRead(item.id)}
            >
                <View style={styles.notificationIconContainer}>
                    <MaterialCommunityIcons
                        name={item.type === 'order' ? 'package-variant' : item.type === 'message' ? 'message' : 'alert'}
                        size={hp(3.4)}
                        color={COLORS.darkgray1}
                    />
                </View>
                <View style={styles.notificationTextContainer}>
                    <Text style={[styles.notificationTitle,]}>
                        {item.title}
                    </Text>
                    <Text style={[styles.notificationMessage,]}>
                        {item.message}
                    </Text>
                    <Text style={[styles.notificationTimestamp,]}>
                        {item.timestamp}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            <StatusBar backgroundColor={COLORS.white} barStyle='dark-content' />
            <Header
                text="Notifications"
                iconSize={hp(3.4)}
                navigation={navigation}
            />

            {/* FlatList for notifications */}
            <FlatList
                data={notifications}
                renderItem={renderNotificationItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.notificationList}
            />
        </SafeAreaView>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginVertical:hp(3),
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp(1.7),
        marginHorizontal: wp(4.5),
    },
    headerTitle: {
        color: COLORS.darkgray,
        fontSize: hp(2.5),
        fontFamily: fontFamily.FONTS.bold,
    },
    notificationList: {
        paddingBottom: hp(2),
    },
    notificationCard: {
        flexDirection: 'row',
        backgroundColor: '#f6f5fe',
        height: hp(12),
        width: wp(100),
        marginVertical: hp(0.2),
        padding: wp(2.5),
        alignItems: 'center',
    },
    notificationIconContainer: {
        width: hp(5),
        height: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        borderRadius: hp(2.5),
        marginRight: wp(4),
    },
    notificationTextContainer: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: hp(2.1),
        fontFamily: fontFamily.FONTS.bold,
        color: COLORS.darkgray,
    },
    notificationMessage: {
        fontSize: hp(1.8),
        fontFamily: fontFamily.FONTS.Medium,
        color: COLORS.darkgray1,
        marginVertical: hp(0.5),
    },
    notificationTimestamp: {
        fontSize: hp(1.7),
        fontFamily: fontFamily.FONTS.regular,
        color: '#949494',
    },
});
