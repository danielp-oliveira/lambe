import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Comments = (props) => {
  let view = null
  if (props.comments) {
    view = props.comments.map((item, index) => (
      <View style={styles.commentContainer} key={index}>
        <Text style={styles.nickname}>{item.nickname}: </Text>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    ))
  }
  return <View styles={styles.container}>{view}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444',
  },
  comment: {
    color: '#555',
  },
})

export default Comments
