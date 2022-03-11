import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native'
import CardStart from './CardStart'
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux'
 import langue from '../service/MultiLangue'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
    
  }
  
  componentDidMount(){
    
  }

  componentDidUpdate() {
    
  }
  render() {
    const lang = this.props.langue
    const navigation = this.props.navigation
    let items =[
      {
        index:0,
        width:100,
        height:80,
        marginLeft: 55,
        title:langue[this.props.langue].cours,
        route:'Accueil',
        routeName:'Accueil',
        innerTitle:langue[this.props.langue].a_propos,
        image:require('../../assets/accueil.png')
      },
      {
        index:1,
        title:langue[this.props.langue].categorie,
        width:100,
        height:80,
        marginLeft: 55,
        route:'Categorie',
        routeName:'categorie',
        innerTitle:langue[this.props.langue].categorie_desc,
        image: require('../../assets/categorie.png')
      },
    ]
    let items_2 =[
      {
        index:2,
        width:80,
        height:80,
        marginLeft: 70,
        title:langue[this.props.langue].module,
        route:'Module',
        routeName:'Module',
        innerTitle:langue[this.props.langue].module_desk,
        image: require('../../assets/module.jpg')
      },
      {
        index:3,
        width:140,
        height:80,
        marginLeft: 30,
        route:'MesCours',
        routeName:'MesCours',
        title:langue[this.props.langue].mesCours,
        innerTitle:langue[this.props.langue].mesCours_desk,
        image:require('../../assets/inscription.jpg')
      }
    ]
    return (
        <SafeAreaView styles={[styles.main_container]}>

          <View style={styles.head}>
            <View style={styles.head_logo}>
              <Image
                style={styles.image_logo}
                source={require('../../assets/logo.png')}
              />
              <Text style={styles.title_logo}>{langue[lang].bienvenue}</Text>
            </View>
            <View style={styles.head_bar}>
              <TextInput
                style={styles.TextInput}
                value={null}
                placeholder= {langue[lang].recherche}
                right={<TextInput.Icon name="search-web"  color="#888" style={styles.Icon} size={35}/>}
              />
            </View>
            
          </View>

          <View style={[styles.inner_container_1,styles.inner_container]}>
            {
              items.map((item) => <CardStart key={item.index.toString()} item={item} navigation={navigation}/>)
            }
          </View>
          
          <View style={styles.inner_container}>
            {
              items_2.map((item) => <CardStart key={item.index.toString()} item={item} navigation={navigation}/>)
            }
          </View>
          
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1,
    paddingTop:100,
    shadowColor: '#470000',
    shadowOffset: {width: 5, height: 1},
    shadowOpacity: 0.5,
    shadowRadius:2,
    elevation: 1,
    borderRadius:2
  },
  inner_container_1:{
    marginTop:40
  },
  inner_container:{
    flexDirection:'row',
    alignContent: 'center',
    justifyContent: "center",
    marginBottom:5,
    paddingLeft:3
  },
  head:{
    height:130,
    backgroundColor:'#8A49A6'
  },
  TextInput:{
    width:320,
    height: 20,
    marginLeft:20,
    backgroundColor:'white',
    borderColor: 'white',
    borderRadius:3,
    marginTop: 10,
    borderWidth: 1,
    borderColor:'gray',
    padding: 10,
    shadowColor: '#470000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius:3,
    elevation: 1
  },
  Icon:{
    paddingTop:22
  },
  head_logo:{
    flex:1,
    flexDirection:'row',
  },
  head_bar:{
    flex:1,
    marginTop:5,
  },
  image_logo:{
    width:100,
    height:60,
    marginLeft:10,
    marginTop:20,
  },
  title_logo:{
    flex:6,
    marginLeft:100,
    color:'white',
    marginTop:35,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  }
})
const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue
  }
}
export default connect(mapStateToProps)(Home)

