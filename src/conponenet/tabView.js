import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OverViews from '../screen/overViews';
import History from '../screen/history';
import Member from '../screen/member';
import Devices from '../screen/devices';
import Payment from '../screen/payment';



const FirstRoute = ({ }) => (
    <OverViews />
);


const SecondRoute = () => (

    <Member />
);
const ThirdRoute = ({ }) => (
    <Devices />
);


const ForthRoute = () => (

    <Payment/>
);
const getTabStyle = (index, currentIndex) => {



    return {
        backgroundColor: 'transparent',

        borderBottomWidth: 2,
        paddingBottom: 8,
        paddingHorizontal: 12,
        color: "black"
    };
};

const renderTabBar = (props) => (
    <TabBar
        {...props}
        style={{ backgroundColor: 'transparent' }}
        indicatorStyle={{ backgroundColor: '#0098DB',justifyContent:"center",alignItems:"center" }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color: getTabStyle(props.navigationState.routes.indexOf(route), props.navigationState.index).color }}>
                {route.title}
            </Text>
        )}
        tabStyle={({ route }) =>
            getTabStyle(props.navigationState.routes.indexOf(route), props.navigationState.index)
        }
    />
);
const renderScene = SceneMap({
    overView: FirstRoute,
    member: SecondRoute,
    devices: ThirdRoute,
    payment: ForthRoute,
});
const ViewTab = () => {
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: 'overView', title: 'OverView' },
        { key: 'member', title: 'Member' },
        { key: 'devices', title: 'Devices' },
        { key: 'payment', title: 'Payment' },
    ]);
    const layout = useWindowDimensions();
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />
    )
}

export default ViewTab

const styles = StyleSheet.create({})