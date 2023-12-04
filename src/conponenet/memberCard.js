import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const MemberCard = ({ username, source }) => {
    console.log(username)
    return (
        <View style={{}}>
            <View style={{position:"absolute",top:5,right:10}}>

            <Icon name="greater-than" size={20} color="#0098DB"/>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10 }}>
                <View style={{
                    margin: 6,
                    height: 70, width: 70, borderRadius: 100, justifyContent: "center", alignItems: 'center', backgroundColor: "#0098DB"
                }} >
                    <Image
                        source={source}
                        style={{ height: 70, width: 70, borderRadius: 99 }}
                        resizeMode='contain' />

                </View>
                <View>
                    <View style={{ flexDirection: "row", width: '85%', alignItems: "center", }}>
                        <Text style={{ color: "black", fontSize: 18, fontWeight: "500",marginHorizontal:6 }}>{username}</Text>
                        <Text style={{ color: username === "don" ? "red" : "black",fontSize:12,marginHorizontal:4 }} >{
                            username === "john" ? "Playing XBow" :
                                username === "david" ? "Watching Netflix" :
                                    username === "kevin" ? "Watching Facebook" : "offline"
                        }</Text>
                        <Text style={{ color: username === "don" ? "red" : "black",fontSize:12 }}>
                            {
                                username === "john" ? "5 min ago" :
                                    username === "david" ? "1 hours ago" :
                                        username === "kevin" ? "45 mins ago" : " "
                            }
                        </Text>

                    </View>
                    <View style={{ flexDirection: "row", width:"85%" , alignItems: "center", }}>
                        <Text style={{ color: '#0098DB',marginHorizontal:8}}>
                        {
                                username === "john" || "david"  ? "Screen time" :
                                    
                                        username === "kevin"|| "don" ? "Manage permissions" : " "
                            }
                    </Text>
                        <Text style={{ color: '#0098DB',marginHorizontal:5 }}>
                        {
                                username === "john"? "App limits" :
                                username === "david"? "App limits" :""
                            }
                        </Text>
                        <Text style={{ color: '#0098DB' }}>Ativites</Text>
                    </View>
                </View>

            </View>
            <View style={{ backgroundColor: "black", height: 1, width: '100%', }}></View>
        </View>
    )
}

export default MemberCard

const styles = StyleSheet.create({})