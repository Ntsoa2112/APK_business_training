import React from 'react'
import { View, TouchableOpacity,StyleSheet,Text,ScrollView,Modal,Pressable,Platform,Image,Dimensions,TextInput,Alert,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import langue from '../service/MultiLangue'
import DisplayLoading from './DisplayLoading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const star =[1,2,3,4,5]
    
const color = Platform.OS === 'ios' ? '#007AFF' : '#2196F3'

class DetailPharmacie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoading:true,
        items:[],
        commentaire:'',
        commits:[],
        Modalnoter:false,
        Modalchat:false,
        index:0
    }
  }
  
  componentDidMount(){
   this.getDataFromApi();
  }

  getDataFromApi =()=>{
      if(this.props.route.params.id){
        let data = this.props.route.params.data;
          this.setState({
            items:data,
            isLoading:false,
        })

      }
    
  }

  setModalnoterVisible = (Modalnoter)=>{
    this.setState({ Modalnoter: Modalnoter });
  }
  setModalchatVisible = (Modalchat)=>{
    this.setState({ Modalchat: Modalchat });
  }
  setNote =(item)=>{
    this.setState({
      index:item
    })
  }
  render() {
    let star =[1,2,3,4,5]
    return (
        <View style={styles.container}>
          {
             this.state.isLoading ? <DisplayLoading isLoading={this.state.isLoading}/> : (
              <View style={styles.scrollview_container}>
                  <TouchableOpacity  style={styles.location} >
                    <AntDesign name="wechat" color="white" size={26} />
                  </TouchableOpacity>
                  <ScrollView style={styles.scrollview_container} ref={(scrollView) => { this.scrollView = scrollView }}>
                    <Image
                      style={styles.image}
                      source={{uri:this.state.items.image}}
                    />
                    <View style={styles.bgHead}>
                      <TouchableOpacity style={styles.buttonHead} onPress={() => this.setModalnoterVisible(true)}>
                          <Text style={styles.textnHead}>
                            {langue[this.props.langue].noter}
                          </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.detail}>
                      <View style={styles.detail_icon}>
                        <Image
                          style={styles.image_logo}
                          source={require("../../assets/logo.png")}
                        />
                        <View style={styles.description_container_2}>
                          {
                            star.map((item)=><Ionicons name={item <= this.state.items.notation ? 'star-sharp' :'star-outline'} key={item} color="gold" size={16} />)
                          }
                        </View>
                      </View>
                      <View style={styles.detail_all}>
                          <View style={[styles.detail_adresse,styles.union]}>
                            <MaterialCommunityIcons name="map-marker" color={color} size={25} />
                            <Text style={styles.title}>
                                Antananarivo-{ this.state.items.lieu}
                            </Text>
                          </View>
                          <View style={[styles.detail_bus,styles.union]}>
                              <MaterialCommunityIcons name="bus-marker" color={color} size={25} />
                              <Text style={styles.title_2}>
                                { this.state.items.bus}
                              </Text>
                          </View>
                          <View style={[styles.arret,styles.union]}>
                              <MaterialCommunityIcons name="bus-stop" color={color} size={25} />
                              <Text style={styles.title_2}>
                              { this.state.items.arret}
                              </Text>
                          </View>
                          {
                            this.state.items.parking?(
                              <View style={[styles.parking,styles.union]}>
                                  <MaterialCommunityIcons name="car-brake-parking" color={color} size={25} />
                                  <Text style={styles.title_2}>
                                    {langue[this.props.langue].parking}
                                  </Text>
                              </View>
                              ):null
                            }
                          
                      </View>
                    </View>

                    <View style={styles.link}>
                          <Text style={[styles.title_3, styles.union_2]}>
                            {this.state.items.description}
                          </Text>
                    </View>
                   
                  
                  </ScrollView>

                  <Modal
                      animationType="fade"
                      transparent={true}
                      visible={this.state.Modalnoter}
                      onRequestClose={() => {
                        this.setModalnoterVisible(!this.state.Modalnoter);
                      }}
                    >
                      
                      <View style={{backgroundColor: 'white',
                              shadowColor: '#470000',
                              shadowOffset: {width: 5, height: 5},
                              shadowOpacity: 0.5,
                              shadowRadius:2,
                              elevation: 10,
                              padding: 10,
                              justifyContent: 'center',
                              alignItems: 'center',
                              width:300,
                              marginLeft:35,
                              marginTop:110,
                              height:250,
                              borderRadius: 4,
                              borderColor: 'rgba(0, 0, 0, 0.1)',}}>
                        <View style={styles.modalView}>

                          <Text style={styles.modalText}>Noter cette catégorie </Text>
                          <Text style = {{fontSize:13,marginTop:10,marginBottom:10,textAlign:'center',}}>
                          Merci de noter cette catégorie d'après votre appréciation.</Text>
                          <View style={{flexDirection:"row", marginBottom:40}}>
                          {
                              star.map((item)=><Ionicons  onPress={()=>this.setNote(item)} name={item <= this.state.index ? 'star-sharp' :'star-outline'} key={item} color="gold" size={40} />)
                    
                          }
                        </View>
                          <Pressable
                            style={[styles.button, styles.buttonHead_2]}
                            onPress={() => this.setModalnoterVisible(!this.state.Modalnoter)}
                          >
                            <Text style={styles.textnHead_2}>Noter</Text>
                          </Pressable>
                        </View>
                      </View>
                      
                  </Modal>

              </View>
              
             )
          }
        </View>
      )
  }
}
const styles = StyleSheet.create({
  input_text: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor: "gray",
    padding: 10,
  },
  container: {
    flex:1
  },
  scrollview_container:{
    flex:1
  },
  image:{
    height:200
  },
  detail:{
    flex:2,
    flexDirection:'row',
    marginTop:20,
    paddingLeft:5,
    paddingBottom:10,
    marginBottom:5,
    marginLeft:4,
    marginRight:5,
    borderBottomWidth:1.5,
    borderBottomColor:'#D5DAD5'
  },
  detail_icon:{
    flex:1
  },
  detail_all:{
    flex:5,
    paddingLeft:40
  },
  link:{
    flex:2,
  },
  commentaire:{
    flex:2
  },

  location:{
    position:'absolute',
    zIndex:111111,
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'#058B12',
    top:windowHeight/1.30,
    left:windowWidth/1.2,
    textAlign:'center',
    padding:12,
    paddingLeft:12,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius:3,
    elevation: 9
  },
  image_logo:{
    width:50,
    height:50,
    borderRadius:10,
    marginLeft:20,
    marginTop:17
  },
  union:{
    flexDirection:'row'
  },
  union_2:{
    flexDirection:'row',
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth:0.5,
    paddingBottom:10,
    borderBottomColor:'#D5DAD5'
  },
  union_3:{
    marginTop:15,
    paddingLeft:10,
    marginBottom:15
  },
  title:{
    marginLeft:5,
    fontWeight:'bold',
    color:'#058B12'
  },
  title_2:{
    color:'gray',
    marginTop:5,
    marginLeft:5
  },
  description_container_2: {
    flex:2,
    flexDirection:'row',
    paddingLeft:5,
    marginTop: 10,
  },
  title_3:{
    flex:3,
    color:'#424242',
    fontWeight:'bold'
  },
  input: {
    height: 50,
    flex:4,
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    padding: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: color,
    padding: 10
  },
  bgHead:{
    position:'absolute',
    top:0,
    left:0,      
    flexDirection:'row',
    width:windowWidth,
    height:200,
    backgroundColor:'rgba(0,0,0,0.2)',
    paddingTop:150,
    paddingLeft:windowWidth-110
  },
  buttonHead:{
    width:80,
    height:40,
    marginLeft:10,
    borderRadius:10,
    backgroundColor:color

  },
  buttonHead_2:{
    width:90,
    height:40,
    marginLeft:10,
    borderRadius:10,
    paddingBottom:5,
    backgroundColor:color

  },
  textnHead:{
    textAlign:'center',
    color: 'white',
    fontWeight:'bold',
    marginTop:10
  },
  textnHead_2:{
    textAlign:'center',
    color: 'white',
    fontSize:17,
    fontWeight:'bold',
    marginTop:0
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  textStyle: {
    backgroundColor: 'lightblue',
    padding: 8,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    fontSize: 22,
  },
  modalView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  modalText: {
    fontSize: 20,
    textAlign:'center',
    color: 'blue',
  }

})



const mapStateToProps = (state) => {
  return {
    langue: state.langue.langue,
    user:state.connexion.user
  }
}
export default  connect(mapStateToProps)(DetailPharmacie)