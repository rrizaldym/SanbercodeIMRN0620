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
                <View style={styles.descContainer}>
                    <Image source={{uri:'https://randomuser.me/api/portraits/men/0.jpg'}} style={{width:50, height:50, borderRadius: 25}} />
                    <View style={styles.videoDetails}>
                        <Text style={styles.videoTitle}>
                            {video.snippet.title}
                        </Text>
                        <Text>

                        </Text>
                        
                    </View>
                </View>
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
    descContainer:{
        flexDirection:'row',
        paddingTop: 15
    },
    videoTitle:{
        fontSize: 16,
        color: '#3c3c3c'
    },
    videoDetails:{
        paddingHorizontal: 15,
        flex: 1
    }
})