import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity,Dimensions,FlatList,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import langue from '../service/MultiLangue'
import DisplayLoading from './DisplayLoading';
import ItemPhar from './ItemPhar'

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
    const extract = this.props.route.params.routeName ? this.props.route.params.routeName : ''  
    this.getItems(extract)
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
        "lieu":"Analakely","image":"https://img.myloview.fr/images/dessin-anime-de-reseau-informatique-700-143321403.jpg",
        "date_created":"2021-11-09T08:03:11.000Z","date_updated":"2021-11-11T18:15:12.000Z",
        "description":"Apprendre la base de l’informatique, prendre des cours de robotique et de langage machine ou tout simplement comprendre les bases du traitement de texte ou naviguer sur Internet, développez votre expertise en informatique grâce aux conseils de Superprof !",
        "parking":"001","bus":"192,145,178,156","arret":"Galaxy","notation":4,"contact":"0340921107"},
        {"id":2,"nom":"Gestion","lieu":"Ankatso",
        "image":"https://www.iena-consulting.com/wp-content/uploads/2016/11/logiciel-gestion-cloud.jpg",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "description":"La gestion de la relation client (CRM) est une technologie permettant de gérer toutes les relations et interactions de votre entreprise avec les clients et les clients potentiels. L’objectif est simple : Améliorer les relations commerciales pour développer votre entreprise.","parking":"000",
        "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173"},
        {"id":2,"nom":"Communication","lieu":"Andravohangy",
        "image":"https://www.idealco.fr/image/formation/14659.jpg?v\u003d1607954037",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "description":"Peu de gens ont totalement confiance dans toutes les situations de relation à l’autre. La communication interpersonnelle est un art qui demande de l’entraînement et beaucoup de conscience. Être en mesure d’engager une conversation, de la maintenir et de la conclure s’avère une compétence très utile, au travail, en amour ou dans la vie de tous les jours.","parking":"000",
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
              renderItem={({item}) => <ItemPhar data={item} navigation={this.props.navigation}/>}
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
