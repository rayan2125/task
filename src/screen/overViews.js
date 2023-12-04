import React from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OverViews = () => {

    const data = [
        { id: '1', title: ' 2', name: "Protected Children", type: "Change protection" },
        { id: '2', title: ' 1', name: "Pending Request", type: "See Detals" },
        { id: '3', title: ' 35.69', name: "Account Balance", type: "Add more" },
        { id: '4', title: ' 4', name: "Shared Devices", type: "Manage Devices" },

    ];

    

    const renderItem = ({ item }) => (

        <View style={styles.item}>
            <View style={{ height: 50, width: 50, borderRadius: 99, backgroundColor: "#E1EFFA", justifyContent: "center", alignItems: "center",padding:5 }}>
                <MaterialCommunityIcons name={item.id === "1" ? "account-multiple" :
                    item.id === "2" ? "source-pull" :
                        item.id === "3" ? "credit-card" :
                            item.id === "4" ? "devices" : ""
                } size={20} color="#0098DB" />

            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{ fontWeight: "500", color: "black" }}>{item.name}</Text>
            <Text style={{ color: "#0098DB" }}>{item.type}</Text>

        </View>
    );

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={{ flex: 1, margin: 5, }}>




                <View style={{ flex: 1 }}>
                    <View style={{ width: "100%", backgroundColor: "grey", height: 1, position: "absolute", bottom: "50%", zIndex: 99 }}></View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        data={data}
                        renderItem={({ item, index }) => (
                            <>
                                {renderItem({ item })}

                            </>
                        )}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={<View style={{ height: 700, backgroundColor: "grey", width: 1, position: "absolute", left: "50%", flex: 1 }}></View>}
                    />
                </View>


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
// backgroundColor:"red",
top:15,
        marginBottom: 30,
        padding:2,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "black",
        fontSize: 40,
        margin: 18,
        fontWeight: "bold",
        textAlign: "center",
        width: 150

    },
    separator: {
        height: '100%',
        width: 1,
        backgroundColor: 'black',
        position: 'absolute',
        alignSelf: 'center',
        zIndex: -1,
    },
});

export default OverViews;
