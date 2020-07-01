import React from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends React.Component{
    render(){
        let video = this.props.video
        //alert(video.id)
        return(
            <View style={styles.container}>
                <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200}} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 15
        //flex: 1,
        //backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
})