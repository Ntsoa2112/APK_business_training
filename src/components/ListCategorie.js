import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Dimensions,FlatList,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import langue from '../service/MultiLangue'
import DisplayLoading from './DisplayLoading';
import { TextInput } from 'react-native-paper';
import ItemPhar from './ItemPhar'
import http from '../service/http'
import axios from 'axios'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      critere:'',
      items:[],
      isLoading:true
      
    }
  }
  
  componentDidMount(){
    const extractUrl = this.props.route.params.routeName ? this.props.route.params.routeName : ''  
    this.getItems(extractUrl)
  }

  getCritere =(critere)=>{
    this.setState({
      critere:critere
    })
  }
  
  getItems =(condition)=>{
    if(condition){
      let donnee = [
        {"id":1,"nom":"Informatique",
        "lieu":"Cours","image":"https://img.myloview.fr/images/dessin-anime-de-reseau-informatique-700-143321403.jpg",
        "date_created":"2021-11-09T08:03:11.000Z","date_updated":"2021-11-11T18:15:12.000Z",
        "longitude":"47.525228882622166","latitude":"-18.90633554528606",
        "parking":"001","bus":"192,145,178,156","arret":"Galaxy","notation":4,"contact":"0340921107"},
        {"id":2,"nom":"Gestion","lieu":"Niv 1",
        "image":"https://www.iena-consulting.com/wp-content/uploads/2016/11/logiciel-gestion-cloud.jpg",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "longitude":"47.522416220844356","latitude":"-18.90530173538965","parking":"000",
        "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173"},
        {"id":2,"nom":"Communication","lieu":"Niv 1",
        "image":"https://www.idealco.fr/image/formation/14659.jpg?v\u003d1607954037",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "longitude":"47.522416220844356","latitude":"-18.90530173538965","parking":"000",
        "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173"}
      ]
      this.setState({
        items:donnee, 
        isLoading:false
      })
    }
  }

  render() {
    
    return (
        <SafeAreaView style={styles.main_container}>
          <View style={styles.main_list}>
          {
            this.state.isLoading ? <DisplayLoading isLoading={this.state.isLoading}/> : <FlatList
              style={{flex:1}}
              data={this.state.items}
              keyExtractor={(item) =>{if(item){return item.id.toString()}} }
              renderItem={({item}) => <ItemPhar pharmacie={item} navigation={this.props.navigation}/>}
            />
          }
          </View>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor:'whitesmoke'
  },
  main_list:{
    marginTop:10,
    flex:1
  },
  container_bar:{

  },
  TextInput:{
    height: 25,
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
    elevation: 4
  },
  Icon:{
    paddingTop:22
  },

  
})
const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue
  }
}
export default  connect(mapStateToProps)(Search)
