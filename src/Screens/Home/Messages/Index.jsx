import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../../Components/Pixel/Index';
import fontFamily from '../../../../constants/fontFamily';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../Components/Header/Index';

const messagesData = [
    {
        id: '1',
        senderName: 'John Doe',
        messageText: 'Hey, how are you?',
        timestamp: '2 min ',
        avatar: require('../../../../assets/images/user1.jpg'),
    },
    {
        id: '2',
        senderName: 'Jane Smith',
        messageText: 'Can you please send me the file?',
        timestamp: '10 min ',
        avatar: require('../../../../assets/images/user2.jpg'),
    },
    {
        id: '3',
        senderName: 'Mark Taylor',
        messageText: 'Let\'s catch up tomorrow!',
        timestamp: '1 hour ',
        avatar: require('../../../../assets/images/user3.jpg'),
    },
    // Add more messages here
];

const Messages = ({ navigation }) => {

    const renderMessageItem = ({ item }) => (
        <TouchableOpacity style={styles.messageItem} activeOpacity={0.7}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.messageContent}>
                <Text style={styles.senderName}>{item.senderName}</Text>
                <Text style={styles.messageText}>{item.messageText}</Text>
            </View>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    text="Messages"
                    iconLibrary="Ionicons"
                    iconName="notifications-outline"
                    iconColor={COLORS.darkgray1}
                    iconSize={hp(3.5)}
                    onPress={() => navigation.navigate('Notification')}
                    navigation={navigation}
                />
                {/* Messages List */}
                <FlatList
                    data={messagesData}
                    renderItem={renderMessageItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.messagesList}
                />
            </View>
        </SafeAreaView>
    );
};

export default Messages;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f4f9'
    },
    container: {
        paddingVertical: hp(3.5),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp(1.7),
        marginHorizontal: wp(4.5),
    },
    iconSpacing: {
        marginRight: wp(2),
    },
    headerTitle: {
        color: COLORS.darkgray,
        fontSize: hp(2.5),
        fontFamily: fontFamily.FONTS.bold,
    },
    messagesList: {
        paddingHorizontal: wp(2),
        paddingTop: hp(1),
    },
    messageItem: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: hp(1),
        paddingHorizontal: wp(1.3),
        marginBottom: hp(1),
        borderRadius: wp(3),
        alignItems: 'center',
        backgroundColor: COLORS.white,
        shadowColor: COLORS.darkgray,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    avatar: {
        width: wp(14),
        height: wp(14),
        borderRadius: wp(14),
        marginHorizontal: wp(2),
    },
    messageContent: {
        flex: 1,
        marginHorizontal: wp(2),
    },
    senderName: {
        color: COLORS.darkgray,
        fontSize: hp(2),
        fontFamily: fontFamily.FONTS.bold,
    },
    messageText: {
        color: COLORS.secondaryGray,
        fontSize: hp(1.8),
        fontFamily: fontFamily.FONTS.Medium,
    },
    timestamp: {
        color: COLORS.secondaryGray,
        fontSize: hp(1.7),
        fontFamily: fontFamily.FONTS.bold,
    },
});
