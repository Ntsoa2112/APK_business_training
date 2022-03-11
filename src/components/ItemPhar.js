import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Image,Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class ItemPhar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
 //star-outline
  render() {
    const {data,navigation} = this.props
    const star =[1,2,3,4,5]
    console.log()
    return (

        <Pressable style={styles.main_container} >
            <Image
              style={styles.image}
              source={{uri:data.image}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                  <Text style={styles.title_text}numberOfLines={4}>{data.nom}</Text>
              </View>
              <View style={styles.description_container}>
                
                    {
                    data.type? (
                      <Pressable style={styles.shad} onPress={()=>navigation.navigate('Cours',{
                        id:data.id,
                        nomdata:data.nom,
                        routeName:data.nom,
                        data: data,
                      })}>
                      <Text style={styles.description_text} numberOfLines={2}><FontAwesome5 name="calendar" color="green" size={26} />  Planning</Text>
                      </Pressable>
                      ):(
                      <Pressable style={styles.shad} onPress={()=>navigation.navigate('Module',{
                        id:data.id,
                        nomdata:data.nom,
                        routeName:data.nom
                      })}>
                        <Text style={styles.description_text} numberOfLines={2}><FontAwesome5 name="inbox" color="green" size={26} />  Cours</Text>
                      </Pressable>
                    )
                    }
                    
                
              </View>
              <View style={styles.description_container}>
                <Pressable style={styles.shad} onPress={()=>navigation.navigate('DetailCategorie',{
                    id:data.id,
                    nomdata:data.nom,
                    data: data
                  })}>
                  <Text style={styles.description_text} numberOfLines={2}><FontAwesome5 name="ellipsis-h" color="green" size={26} />  Détails</Text>
                    
                </Pressable>
              </View>
            </View>
        </Pressable>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    height: 140,
    flexDirection: 'row',
    backgroundColor:'white',
    marginBottom:20,
    marginTop: 20,
    borderRadius:10,
    marginLeft:5,
    marginRight:5,
    shadowColor: '#470000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius:4,
    elevation: 6
  },
  image: {
    width: 110,
    marginLeft:10,
    height:110,
    marginTop: 2,
    borderRadius:10,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5,
    marginLeft:20
  },
  header_container: {
    flex: 2,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
    color:'black',
    paddingRight: 5
  },
  description_container: {
    flex:2
  },
  description_container_2: {
    flex:2,
    flexDirection:'row'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    fontWeight: 'bold',
    fontSize: 16
  },
  bold:{
    fontWeight:'bold',
    color:'#058B12'
  },
  shad:{
    shadowColor: '#470000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius:5,
    elevation: 4,
    backgroundColor: "#EEF3F3",
    width: 100,
    marginTop:2
  }
  
})
export default ItemPhar