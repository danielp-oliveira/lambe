import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import Icon from 'react-native-vector-icons/FontAwesome'

const AddPhoto = () => {
  const [image, setImage] = useState(null)
  const [comment, setComment] = useState('')

  const pickLocalImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!res.cancelled) {
      setImage({ uri: res.uri })
    }
  }

  const pickCameraImage = async () => {
    let res = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!res.cancelled) {
      setImage({ uri: res.uri, base64: res.data })
    }
  }

  const save = async () => {
    Alert.alert('Imagem adicionada!', comment)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.uri }} style={styles.image} />
        </View>
        <TextInput
          placeholder='Algum comentário para a foto?'
          style={styles.input}
          value={comment}
          onChangeText={(comment) => setComment(comment)}
        />
        <View style={styles.choicesContainer}>
          <Text style={styles.buttomText}> Escolha uma foto</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={pickLocalImage}
            >
              <Icon name='folder' size={30} color='#fff' />
              <Text style={styles.buttomText}> arquivos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={pickCameraImage}
            >
              <Icon name='camera' size={30} color='#fff' />
              <Text style={styles.buttomText}> câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={save}>
              <Icon name='share' size={30} color='#fff' />
              <Text style={styles.buttomText}> share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#eee',
    marginTop: 10,
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  choicesContainer: {
    flexDirection: 'column',
    width: '90%',
    marginTop: 30,
    padding: 5,
    backgroundColor: '#4286F4',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto',
    padding: 20,
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
})

export default AddPhoto
