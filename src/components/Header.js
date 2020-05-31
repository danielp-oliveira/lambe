import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import icon from '../../assets/imgs/icon.png'
import * as Font from 'expo-font'

const Header = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFont = async () => {
    await Font.loadAsync({
      shelter: require('../../assets/fonts/shelter.otf'),
    })
    setFontLoaded(true)
  }

  useEffect(() => {
    loadFont()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        {fontLoaded && <Text style={styles.title}>Lambe Lambe</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28,
  },
})

export default Header
