import React from 'react'
import{
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Tentang Saya</Text>
                        <Image source={require('./images/IMG_20181230_091832_679.jpg')} style={styles.pp} />
                        <Text style={styles.name}>Rizky Rizaldy M</Text>
                        <Text style={styles.job}>React Native Devloper</Text>   
                    </View>

                    <View style={styles.portofolio}>
                        <Text style={styles.bodyText}>Portofolio</Text>
                        <View style={styles.listPortofolio}>
                            <TouchableOpacity style={styles.item}>
                                <Icons name='github-circle' size={45} color='#3EC6FF' />
                                <Text style={styles.linkText}>@rizaldym</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item}>
                                <Icons name='gitlab' size={45} color='#3EC6FF' />
                                <Text style={styles.linkText}>@rrizaldym</Text>
                            </TouchableOpacity>
                        </View>                    
                    </View>

                    <View style={styles.hubungisaya}>
                        <Text style={styles.bodyText}>Hubungi Saya</Text>
                        <View style={styles.listHubunginSaya}>
                            <TouchableOpacity style={styles.item2}>
                                <Icons name='facebook-box' size={45} color='#3EC6FF' />
                                <Text style={styles.linkText}>Rizky Rizaldy M</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item2}>
                                <Icons name='instagram' size={45} color='#3EC6FF' />
                                <Text style={styles.linkText}>@rizkyrizaldym</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item2}>
                                <Icons name='twitter' size={45} color='#3EC6FF' />
                                <Text style={styles.linkText}>@rizkyrizaldym</Text>
                            </TouchableOpacity>
                        </View>                    
                    </View>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'space-evenly',        
    },
    title:{
        //marginTop:64,
        alignItems:'center',
        justifyContent:'space-between',
        //margin:20,        
    },
    pp:{
        width:200,
        height:200,
        borderRadius:200,
        //alignSelf:'flex-end'
        margin:10,
    },
    titleText:{
        fontSize:36,
        color:'#003366',
        fontWeight:'bold'        
    },
    name:{
        fontSize:24,
        color:'#003366',
        fontWeight:'bold'
    },
    job:{
        fontSize:16,
        color:'#3EC6FF',
        //fontWeight:'bold'
    },
    portofolio:{
        width:359,
        height:140,
        borderRadius:16,
        backgroundColor:'#efefef',
        alignSelf:'center',
        //margin:10,
    },
    item:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    item2:{
        flexDirection:'row',
        alignItems: 'center',
        //justifyContent: 'center',
        justifyContent:'space-evenly',
    },
    bodyText:{
        fontSize: 18,
        color:'#003366',
        marginLeft:7,
        marginTop:2,
    },
    listPortofolio:{
        borderTopColor:'#003366',
        borderTopWidth: 1,
        margin:5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:10,
        height: 100,
        //borderBottomColor:'#003366',
        //borderBottomWidth:1,
    },
    linkText:{
        fontSize: 16,
        color:'#003366',
        fontWeight:'bold'
    },
    hubungisaya:{
        width:359,
        height:251,
        borderRadius:16,
        backgroundColor:'#efefef',
        alignSelf:'center',
    },
    listHubunginSaya:{
        borderTopColor:'#003366',
        borderTopWidth: 1,
        margin:5,
        padding:10,
        height: 200,
        justifyContent:'space-evenly',
        //borderBottomColor:'#003366',
        //borderBottomWidth:1,
    },
    
})