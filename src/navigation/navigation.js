import React from 'react'

import {View,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Started from '../components/Started'
import Menu from '../components/Menu'
import ListCategorie from '../components/ListCategorie'
import { connect } from 'react-redux'
import langue from '../service/MultiLangue'

import DetailCategorie from '../components/DetailCategorie'
import Accueil from '../components/Accueil'
import Module from '../components/Module'
import Forum from '../components/Forum'

 const headerStyle = {
    headerStyle: {
      backgroundColor: '#058B12',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      shadowColor: '#470000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius:4,
      elevation: 6
    },
 }
 
const Stack = createStackNavigator();


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    const lang = this.props.langue
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Started"  screenOptions={{headerMode: 'screen',tabBarColor:'#058B12'}}>
            <Stack.Screen name="Categorie" component={ListCategorie} options={({route}) =>({
              headerShown:true,...headerStyle,title: langue[lang].liste_pharmacie})}/>
            <Stack.Screen name="Accueil" component={Accueil} options={({route}) =>({
              headerShown:true,...headerStyle})}/>
            <Stack.Screen name="Module" component={Module} options={({route}) =>({
              headerShown:true,...headerStyle})}/>
            <Stack.Screen name="Forum" component={Forum} options={({route}) =>({
              headerShown:true,...headerStyle})}/>
            <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}} />
            <Stack.Screen name="Started" component={Started} options={{headerShown:false}} />
            <Stack.Screen name="DetailCategorie" component={DetailCategorie} options={({route}) =>({
              headerShown:true,...headerStyle,title: route.params.nomPharmacie.includes('Pharmacie')? route.params.nomPharmacie :'Pharmacie ' + route.params.nomPharmacie })}/>
            
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
 
})

const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue
  }
}
export default connect(mapStateToProps)(Navigation)
