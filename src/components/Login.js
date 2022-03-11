import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,ScrollView,TouchableOpacity,Icon,TextInput,Dimensions,ImageBackground} from 'react-native'
import { connect } from 'react-redux'
import Profile from './user'
import axios from 'axios'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const color = Platform.OS === 'ios' ? '#007AFF' : '#2196F3'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        telephone:null,
        nom:null,
        prenom:null,
        email:null,
        MsgErrorPsd:'',
        MsgErrorTel:'',
        borderColor_psd:null,
        borderColor_tel:null,
        errorMdp:false,
        errorTel:false,
        showError:false,
        logging:false
    }
    this.image = "https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
  }
 componentDidMount(){
  this.setState({
    showError:false,
  })
 }

  HandleLogin =()=>{
    if(this.state.nom && this.state.prenom && this.state.telephone && this.state.email){
      const user ={
        nom: this.state.nom,
        prenom: this.state.prenom,
        email: this.state.email,
        telephone: this.state.telephone
      }
      const action = { type: "CHANGE_CONNEXION", value:user}
      this.props.dispatch(action)

      this.props.navigation.navigate('Menu',{
        screen:'Acueill'
      })
    }

  }
  
  Logout =()=>{
    const user ={
      logging:false
    }
    const action = { type: "CHANGE_CONNEXION", value:user}
    this.props.dispatch(action)
  }
  render() {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            
            <ImageBackground style={styles.ImageBackground} source={{uri:this.image}} resizeMode="cover" >
            
                <ScrollView style={styles.ScrollView}> 
                  {
                    this.props.user.logging ?
                    <View style={styles.main_container}>
                      <Profile/>
                      <TouchableOpacity style={styles.buttonHead} onPress={() => this.Logout()}>
                          <Text style={styles.textnHead}>
                            SE DECONNECTER
                          </Text>
                      </TouchableOpacity>
                     </View> : (
                      <View style={styles.main_container}>
                        <View style={styles.section_1}>
                            <View style={styles.box}>
                                <View style={styles.Innerbox}>
                                    <Text style={styles.boxText}>BUSINESS TRAINING</Text>
                                </View>
                                <View style={styles.Innerbox_2}>
                                    <Text style={styles.boxText_2}>{this.props.route.params.nomdata} </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.section_2}>
                            {this.state.showError ? 
                              <Text style={{color:'tomato',
                              marginTop:-15,textAlign:'center',
                              paddingBottom:10
                              }}>
                                Veuillez verifier votre informations!!! 
                              </Text> : null}
                            <View style={styles.Innerbox_3}>
                                <View style={styles.line}></View >
                                <View style={styles.connexion}>
                                    <Text style={styles.boxText_3}>INSCRIVEZ-VOUS</Text>
                                </View>
                                <View style={styles.line}></View>
                            </View >
                            {this.props.route.params.id ? 
                              <View style={styles.innersection}>
                                <TextInput
                                    style={[styles.input]}
                                    onChangeText={(text)=>this.setState({
                                      nom:text
                                    })}
                                    value={this.state.nom}
                                    maxLength={50}
                                    placeholder="Nom"
                                />
                                
                                <TextInput
                                  style={[styles.input,{borderColor:this.state.borderColor_psd}]}
                                  value={this.state.prenom}
                                  maxLength={50}
                                  onChangeText={(text)=>this.setState({
                                    prenom:text
                                  })}
                                  placeholder="Prènom"
                                />
                              
                              <TextInput
                                  style={[styles.input,{borderColor:this.state.borderColor_psd}]}
                                  value={this.state.telephone}
                                  maxLength={50}
                                  onChangeText={(text)=>this.setState({
                                    telephone:text
                                  })}
                                  placeholder="Télèphone"
                                  keyboardType="numeric"
                                />
                                
                                <TextInput
                                  style={[styles.input,{borderColor:this.state.borderColor_psd}]}
                                  value={this.state.email}
                                  maxLength={50}
                                  onChangeText={(text)=>this.setState({
                                    email:text
                                  })}
                                  placeholder="Email"
                                />
                                  <TouchableOpacity style={styles.card} onPress={()=>this.HandleLogin()}>
                                    <Text style={styles.boxText_3}>S'INSCRIRE</Text>
                                  </TouchableOpacity>
                              </View>
                              :
                              <View style={styles.section_1}>
                                  <View style={styles.box}>
                                      <View style={styles.Innerbox_2}>
                                          <Text style={styles.boxText_2}>Vous devez sélectionner un cours</Text>
                                      </View>
                                  </View>
                              </View>
                              }
                        </View>
                    </View>
                    )
                  }
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  SafeAreaView: {
    flex:1
  },
  ScrollView: {
    flex:1,
    backgroundColor:"rgba(0,0,0,0.7)",
  },
  ImageBackground: {
    flex:1,
    alignContent: 'center',
    justifyContent: "center"
  },
  main_container: {
    flex:1,
  },
  section_1: {
    flex:1,
    paddingTop: windowHeight/40,
    alignContent: 'center',
  },
  box:{
    flex:6,
    justifyContent: 'center'
  },
  Innerbox:{
    marginLeft: windowWidth/5,
    width:(windowWidth*3)/5,
    height:windowHeight/12,
    padding: 4,
    borderWidth: 1,
    borderColor: "#058B12",
    backgroundColor:'#5B2C6F',
    borderRadius:5,
    justifyContent: "center",
  },
  boxText:{
    fontSize: windowHeight/35,
    color:"white",
    textAlign:'center',
    fontWeight: 'bold',
  },
  Innerbox_2:{
    marginLeft: windowWidth/5,
    width:(windowWidth*3)/5,
    height:windowHeight/12,
    justifyContent: "center",
  },
  boxText_2:{
    fontSize: 16,
    color:"white",
    textAlign:'center',
    fontWeight: '500',
  },
  /* style second box */
  section_2: {
    flex:2,
    marginTop: windowHeight/50,
    flexDirection: 'column',
  },
  Innerbox_3:{
    flex:1,
    flexDirection: 'row',
  },
  line:{
    flex:1,
    height:4,
    marginTop: windowHeight/50,
    paddingLeft: 20,
    backgroundColor:"whitesmoke",
  },
  innersection:{
    flex:5,
  },
  connexion:{
    flex:4,
  },
  boxText_3:{
    fontSize: windowHeight/30,
    color:'white',
    textAlign:'center',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    backgroundColor:'white',
    borderColor: 'white',
    margin: 12,
    borderWidth: 1,
    padding: 15,
  },
  card:{
    borderWidth:5,
    borderColor: 'white',
    margin: 12,
    marginLeft: windowWidth/25,
    marginRight: windowWidth/25,
    padding:9
  },
  card_2:{
    marginTop: windowHeight/10,
  },
  boxText_4:{
    fontSize: windowHeight/30,
    color:'white',
    textAlign:'center',
    fontWeight: 'bold',
    textDecorationLine:'underline'
  },
  copyright:{
    marginTop:windowHeight/20
  },
  copyright_text:{
    textAlign:'center',
    color:'white'
  },
  section_3: {
    flex:2,
    marginTop: windowHeight/8,
    backgroundColor:"rgba(0,0,0,0.5)",
  },
  link:{
    flex:2,
    flexDirection: 'row',
    marginTop:windowHeight/30,
    alignContent:'center',
    justifyContent:'center'
  },
  icon:{
    marginLeft:15
  },
  error:{
    marginLeft: windowWidth/25,
    fontWeight: 'bold',
    color:'tomato'
  },
  buttonHead:{
    width:150,
    height:45,
    marginLeft:120,
    marginTop:-50,
    marginBottom:5,
    borderRadius:10,
    backgroundColor:color

  },
  textnHead:{
    textAlign:'center',
    color: 'white',
    fontWeight:'bold',
    marginTop:10
  }
})

const mapStateToProps = (state) => {
  return {
    user: state.connexion
  }
}
export default connect(mapStateToProps)(Login)