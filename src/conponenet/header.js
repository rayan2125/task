import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
    const userImg = [
        require("../assets/Image/user1.jpeg"),
        require("../assets/Image/user2.jpg"),
        require("../assets/Image/user3.jpg"),
        require("../assets/Image/user4.jpeg"),
    ];

    const screenWidth = Dimensions.get('window').width;
    const circleSize = screenWidth;

    return (
        <>
            <View style={{
                width: circleSize,
                height: 200,
                bottom: 0,
                overflow: 'hidden',
                backgroundColor: '#E1EFFA',
            }}>
                <View style={{ margin: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', padding: 10 }}>
                        <View style={{ backgroundColor: "#0098DB", height: 40, width: 40, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require("../assets/Image/user.png")}
                                style={{ height: 40, width: 40, borderRadius: 99 }}
                                resizeMode='contain'
                            />
                        </View>
                        <TouchableOpacity>
                            <Icon name="bars" size={20} color="#0098DB" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{ justifyContent: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Your Family</Text>
                        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", marginHorizontal: 120 }}>
                            <FlatList
                                horizontal
                                data={userImg}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ margin: 5, }}>
                                            <Image
                                                source={item}
                                                style={{ width: 30, height: 30, borderRadius: 25 }}
                                            />
                                        </View>
                                    );
                                }}
                            />
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: "center" }}>
                            <View style={{ backgroundColor: "green", height: 15, width: 15, borderRadius: 15, textAlign: "center", justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ color: 'white', fontSize: 10 }}>✓</Text>
                            </View>
                            <Text style={{ textAlign: "center", marginHorizontal: 10 }}>Everything looks good</Text>
                        </View>
                    </View>

                </View>
                <View style={{ position: "absolute", }}>

                </View>

            </View>

            <Svg
                height="60%"
                width="100%"
                viewBox="0 0 1440 320"
                style={{ position: 'absolute', top: 22, marginBottom: 10 }}
            >
                <Path
                    fill="#E1EFFA"
                    d="M0,32L80,42.7C160,53,320,75,480,85.3C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                />
            </Svg>





        </>
    );
};

export default Header;

const styles = StyleSheet.create({});
