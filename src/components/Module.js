import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity, FlatList} from 'react-native'
import ItemPhar from './ItemPhar'
import DisplayLoading from './DisplayLoading';

class Module extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      critere:'',
      items:[],
      isLoading:true
      
    }
  }
  
  componentDidMount(){
    const typeCours = this.props.route.params.routeName ? this.props.route.params.routeName : 'Module'  
    this.getItems(typeCours)
  }

  getCritere =(critere)=>{
    this.setState({
      critere:critere
    })
  }
  
  getItems =(condition)=>{
    if(condition){
      let donnee = [
        {"id":1,"nom":"Les langages pour penser et communiquer",
        "lieu":"Analakely","image":"https://cdn.futura-sciences.com/buildsv6/images/wide1920/5/d/d/5dd96ef55a_50145169_langues-monde.jpg",
        "date_created":"2021-11-09T08:03:11.000Z","date_updated":"2021-11-11T18:15:12.000Z",
        "type":"cours","categorie":"Communication",
        "description":"Le domaine des langages pour penser et communiquer recouvre quatre types de langage, qui sont à la fois des objets de savoir et des outils : la langue française ; les langues vivantes étrangères ou régionales ; les langages mathématiques, scientifiques et informatiques ; les langages des arts et du corps.",
        "parking":"001","bus":"192,145,178,156","arret":"Galaxy","notation":4,"contact":"0340921107",
        "planing": {
          '2022-03-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-17': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-18': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-19': {selected: true, marked: true, selectedColor: 'blue'}
        }},
        {"id":2,"nom":"Améliorer sa communication orale",
        "lieu":"Analakely","image":"https://nouvellesvagues.files.wordpress.com/2018/03/sans-titre1-e1520841060861.png",
        "date_created":"2021-11-09T08:03:11.000Z","date_updated":"2021-11-11T18:15:12.000Z",
        "type":"cours","categorie":"Communication",
        "description":"La qualité de votre relation avec les autres dépend en grande partie de votre communication orale. La façon dont vous vous exprimez peut avoir une influence sur de multiples facettes de votre vie, aussi bien sur le plan personnel que professionnel. C'est pourquoi il parait opportun de se former à l'art de bien communiquer et ce quel que soit son âge et sa situation. ",
        "parking":"001","bus":"192,145,178,156","arret":"Galaxy","notation":4,"contact":"0340921107",
        "planing": {
          '2022-03-19': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-20': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-21': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-22': {selected: true, marked: true, selectedColor: 'blue'}
        }},
        {"id":3,"nom":"La gestion et le gestionnaire","lieu":"Ambanidia",
        "image":"https://cours-gestion.com/wp-content/uploads/2021/11/gestion-et-gestionnaire.jpg",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "type":"cours","categorie":"Gestion","parking":"000",
        "description":"Cours s’intéressant à la gestion et le gestionnaire, mais avant commençons par définir les deux termes qui constituent le sujet proposé. Qu’est ce que la gestion? Le sens du terme en général La gestion, d’une manière générale, est défini comme l’action de gérer quelque chose.",
        "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173",
        "planing": {
          '2022-03-22': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-23': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-24': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-25': {selected: true, marked: true, selectedColor: 'blue'}
        }},
        {"id":4,"nom":"Apprendre la gestion commerciale: les bases","lieu":"Ivandry",
        "image":"https://cours-gratuit.canada-academy.com/images/apprendre%20Gestion%20de%20produit%20en%20ligne%20%C3%A0%20distance.jpg",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "type":"cours","parking":"000","categorie":"Gestion",
        "description":"Cours sur la gestion commerciale en ligne facile à comprendre, divisé en parties suivantes: L’étude de marché L’étude d’environnement (juridique, économique, ..) L’étude de consommateur: les besoins, la motivation .. L’étude de concurrence: sa nature, part de marché L’étude de distribution: canal, répondre au question ou et comment vendre le produit?",
        "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173",
        "planing": {
          '2022-03-25': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-26': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-27': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-28': {selected: true, marked: true, selectedColor: 'blue'}
        }},
        {"id":5,"nom":"Apprendre le langage de programmation","lieu":"Ankorahotra",
        "image":"https://i0.wp.com/leblogducodeur.fr/wp-content/uploads/2020/01/langages-de-programmation-%C3%A0-apprendre-en-2020.png?fit=287%2C175&ssl=1",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "type":"cours","parking":"000","categorie":"Informatique",
        "description":"Si la création de programmes pour ordinateurs vous intéresse, que ce soit pour réaliser des applications mobiles, des sites internet, des jeux ou toute autre forme d'application logicielle, il vous faudra apprendre à programmer. Les programmes informatiques sont faits à partir d'un langage de programmation qui leur permet de fonctionner sur la machine sur laquelle ils sont installés, que ce soit un téléphone mobile, une machine industrielle, un ordinateur ou tout autre équipement de ce genre.",
        "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173",
        "planing": {
          '2022-03-27': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-28': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-29': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-30': {selected: true, marked: true, selectedColor: 'blue'}
        }},
        {"id":6,"nom":"Apprendre à modéliser avec UML","lieu":"Isotry",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilRIAbFEBjPolB76wTsSiLsOQwBbEwDG6BKR1AwtR4tlV-YxLOOSc6gXSCbVOMiD8pt4&usqp=CAU",
        "date_created":"2021-11-09T08:03:43.000Z","date_updated":"2021-11-11T18:15:18.000Z",
        "type":"cours","parking":"000","categorie":"Informatique",
        "description":"La modélisation conceptuelle est l'étape fondatrice du processus de conception de BD?. Elle consiste à abstraire le problème réel posé pour en faire une reformulation qui trouvera une solution dans le cadre technologique d'un SGBD?.Si le modèle dominant en conception de bases de données a longtemps été le modèle E-A?, le modèle UML? se généralise de plus en plus.",
        "bus":"192,145,178,156","arret":"Galaxy","notation":5,"contact":"0331235173",
        "planing": {
          '2022-03-30': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-03-31': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-04-01': {selected: true, marked: true, selectedColor: 'blue'},
          '2022-04-02': {selected: true, marked: true, selectedColor: 'blue'}
        }}
      ]
      console.log(condition)
      if(condition != 'Module'){
        let list = donnee
        donnee = []
        list.forEach(element => {
          if(element.categorie == condition) donnee.push(element)
        });
      }

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
export default Module