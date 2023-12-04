import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MemberCard from '../conponenet/memberCard';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Member = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Initially set to true

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                const data = await response.json();
                setUserInfo(data.slice(0, 4));
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false); // Set to false after data is fetched (whether success or error)
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator animating={true} color="red" />
                <Text style={{color:"red"}}>Wait ...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, margin: 5 }}>
            {
                userInfo ===null ?
                <View style={styles.loader}>
                <ActivityIndicator animating={true} color="#0098DB" />
                <Text style={{color:"#0098DB"}}>Wait ...</Text>
            </View>:
            
            <FlatList
                data={userInfo}
                renderItem={({ item }) => {
                    const userName = item.name.firstname;

                    return (
                        <MemberCard
                            source={userName === 'john' ? require('../assets/Image/user4.jpeg') :
                                userName === 'david' ? require('../assets/Image/user2.jpg') :
                                    userName === "kevin" ? require("../assets/Image/user6.png") : require("../assets/Image/user3.jpg")}
                            username={userName}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
            }
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="plus" color="#0098DB" size={18} />
                <Text style={{ color: '#0098DB', marginHorizontal: 10, fontSize: 18 }}>Add Member</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        // backgroundColor:"green",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Member;
