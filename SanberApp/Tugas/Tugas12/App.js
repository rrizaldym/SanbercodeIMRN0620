import React from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoItem';
import data from './data.json';

export default class App extends React.Component{
    render(){
        //alert(data.kind);
        return(
            <View style = {styles.container}>
                <View style={styles.statusBar}>
                    <StatusBar translucent={false} backgroundColor={"grey"} />
                </View>
                <View style= {styles.navBar}>
                    <TouchableOpacity>
                        <Image source={require('./images/logo.png')} style={{width:98, height:22}} />
                    </TouchableOpacity>
                    <View style={styles.rightNav}>
                        <TouchableOpacity>
                            <Icon style={styles.navItem} name='search' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={styles.navItem} name='account-circle' size={25} />
                        </TouchableOpacity>
                        </View>
                </View>

                <View style={styles.body}>
                    <VideoItem video={data.items[0]} />
                </View>

                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='home' size={25}/>
                        <Text style={styles.tabTitle}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='whatshot' size={25}/>
                        <Text style={styles.tabTitle}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='subscriptions' size={25}/>
                        <Text style={styles.tabTitle}>Subscriptions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='folder' size={25}/>
                        <Text style={styles.tabTitle}>Library</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container:{
        flex: 1
        //backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    
    navBar: {
        height: 55,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: '#e5e5e5'

    },
    rightNav: {
        flexDirection: 'row'
    },
    navItem: {
        marginLeft: 25
    },
    body:{
        flex: 1
    },
    tabBar: {
        backgroundColor: 'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabItem:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabTitle:{
        fontSize: 11,
        color:'#3c3c3c',
        paddingTop: 4
    }
});