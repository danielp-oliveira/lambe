import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from './components/Header'
import Post from './components/Post'

const fenceImg = require('../assets/imgs/fence.jpg')

const App = () => {
  const comments = [
    {
      nickname: 'Joana Elena Silva',
      comment: 'Excelente Foto!',
    },
    {
      nickname: 'Rafael Gustavo Pereira',
      comment: 'Muito ruim! Faço melhor...',
    },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <Post image={fenceImg} comments={comments} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
