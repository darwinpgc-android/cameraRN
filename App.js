import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button // less customizable than touchable opacity
} from 'react-native'

import { RNCamera } from 'react-native-camera'

const pendingView =() => (
    <View style={styles.container} >
        <Text style={{
            fontSize: 30,
            color: 'red'
        }}>Loading..........</Text>
    </View>
)

const App = () => {
    // state to hold are image ........
    const [image, setImage] = useState(null)

    const takePic = async (camera) => {
        try{
            const options = {
                quality: 0.9, base64: false
            }
            const data = await camera.takePictureAsync(
                options
                )
            setImage(data.uri)
        } catch(error){
            console.warn(error)
        }
    }

    return(
        <View>
        </View>
    )
}

export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})