import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const posts = [
      {
        id: Math.random(),
        nickname: 'Rafael Pereira Filho',
        email: 'rafaelprrflh@gmail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'John Ray Sheldon',
            comment: 'Stunning!',
          },
          {
            nickname: 'Ana Julia Arruda',
            comment: 'Foto linda! Onde foi tirada?',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Francisco Leandro Lima',
        email: 'fllima@gmail.com',
        image: require('../../assets/imgs/bw.jpg'),
        comments: [],
      },
    ]

    setPosts(posts)
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
})

export default Feed
