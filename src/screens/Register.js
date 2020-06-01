import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Nome'
                style={styles.input}
                autoFocus={true}
                value={name}
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                placeholder='Email'
                style={styles.input}
                keyboradType='email-address'
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderColor: '#333',
        paddingLeft: 15,
    },
})

export default Register
