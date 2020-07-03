import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { 
  SignIn, 
  CreateAccount, 
  Profile, 
  Home, 
  Search,
  Details,
  Search2,

} from './Screen'

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const SearchStack = createStackNavigator()
const drawer = createDrawerNavigator()


const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='Home' 
      component={Home}
    />
    <HomeStack.Screen
      name='Details' 
      component={Details}
      options={({route}) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='Profile' 
      component={Profile}
    />
  </ProfileStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name='Search' 
      component={Search}
    />
    <SearchStack.Screen
      name='Search2' 
      component={Search2}
    />
  </SearchStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator>
      <Tabs.Screen 
        name='Home' 
        component={Home}
      />
      <Tabs.Screen 
        name='Profile' 
        component={Profile}
      />      
    </Tabs.Navigator>
)



export default () => {
  return(
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home' 
        component={TabsScreen}
      />
      <Drawer.Screen
        name='Profile' 
        component={ProfileStackScreen}
      />
    </Drawer.Navigator>

    <AuthStack.Navigator>
      <AuthStack.Screen 
        name='SignIn'
        component={SignIn}
        options={{title:'Sign In'}}
      />
      <AuthStack.Screen 
        name='CreateAccount' 
        component={CreateAccount} 
        options={{title: 'Create Account'}}  
      />
    </AuthStack.Navigator>
  </NavigationContainer>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
