import { StyleSheet, Text, View, Svg, Path } from 'react-native'
import React from 'react'
import Header from '../conponenet/header'


import ViewTab from '../conponenet/tabView'

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <ViewTab />
        </View>
      </View>


    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Assuming your background color is white
  },
  content: {
    flex: 1,
    paddingHorizontal: 8, // Adjust as needed
    paddingTop: 25, // Adjust as needed
  },
});