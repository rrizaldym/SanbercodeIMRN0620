import React from 'react'
import{
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated';
import skillData from './skillData.json'


export default class App extends React.Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <View>
                    <Image 
                        source={require('./images/logo(1).png')} 
                        style={{width:187.5, 
                                height:51, 
                                alignSelf:'flex-end'}} />
                    <View style={styles.profile}>
                        <Image 
                        source={require('./images/IMG_20181230_091832_679.jpg')} 
                        style={{borderRadius:32,
                                width:32,
                                height:32,}} />
                        <View style={{margin:10}}>
                            <Text style={{fontSize:12}}>Hai,</Text>
                            <Text style={{fontSize:16,
                                        color:'#003366'}}>
                            Rizky Rizaldy M</Text>
                        </View>
                        
                    </View>
                    <Text style={{fontSize:36,
                                color:'#003366',
                                }}>
                    SKILL</Text>
                    <View style={{width:343,
                                height:4,
                                backgroundColor:'#3EC6FF'}}>            
                    </View>
                    
                </View>    
                <View style={styles.tab}>
                    <View style={styles.tabTitle}>
                        <TouchableOpacity style={{width:125,
                                                height:32,
                                                borderRadius:8,
                                                flexDirection:'row',
                                                alignItems:'center',
                                                justifyContent:'center',
                                                backgroundColor:'#B4E9FF'}}>
                            <Text style={styles.tabText}>
                            Library / Framework</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:136,
                                                height:32,
                                                borderRadius:8,
                                                flexDirection:'row',
                                                alignItems:'center',
                                                justifyContent:'center',
                                                backgroundColor:'#B4E9FF'}}>
                            <Text style={styles.tabText}>
                            Bahas Pemroraman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:70,
                                                height:32,
                                                borderRadius:8,
                                                flexDirection:'row',
                                                alignItems:'center',
                                                justifyContent:'center',
                                                backgroundColor:'#B4E9FF'}}>
                            <Text style={styles.tabText}>
                            Teknologi</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={skillData}
                        renderItem={({ item }) => (
                            <View style={styles.flatList}>
                                <Text>apaan tuh</Text>
                            </View>
                        )}
                        keyExtractor={item => skillData.id}
                    />
                    
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:375,
        alignSelf:'center',
        padding:15,
        borderWidth:2,
        borderColor:'black,'
    },
    profile:{
        flexDirection:'row',        
        alignItems:'center',        
    },
    tab:{
        justifyContent:'space-between',
    },
    tabTitle:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:10,
    },
    tabText:{
        fontSize:12,
        color:'#003366',
        fontWeight:'bold',        
    },
    flatList:{
        width:343,
        height:129,
        backgroundColor:'#B4E9FF',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    skill:{
        fontSize:24,
        fontWeight:'bold',
        color:'#003366',
    },
    
})