import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from './components/Header'
import Post from './components/Post'

const fenceImg = require('../assets/imgs/fence.jpg')

const App = () => (
  <View style={styles.container}>
    <Header />
    <Post image={fenceImg} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
