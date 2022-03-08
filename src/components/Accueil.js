import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity, Button, ScrollView, StatusBar} from 'react-native'

class Accueil extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    
  }
  render() {
    return (
        <SafeAreaView>
            <View style={styles.main}>
              <View style={[styles.main_desc, styles.card_container]}>
                  <Text style={styles.title}>BUSINESS TRAINING</Text>
                  <Text style={styles.sous_title}>À propos de l'application</Text>
                  <Text style={styles.paragraphe}>
                    Devenez qui vous voulez être avec BUSINESS TRAINING. Choisissez votre carrière. Suivez une formation constituée de projets professionnalisants. Obtenez un diplôme reconnu par l'État. Enrichissez votre CV avec les programmes proposés par BUSINESS TRAINING et gagnez un salaire tout en suivant votre formation. 
                  </Text>
              </View>
              <View style={styles.card_container}>
                  <Text style={styles.sous_title}>L’application permet de s’inscrire à la formation continue sur les domaines suivantes tels que:</Text>
                  <View style={styles.btn}>
                    <View style={styles.buttonView}>
                      <Button
                        title="INFORMATIQUE"
                      />
                    </View>
                    <View style={styles.buttonView}>
                      <Button
                        title="GESTION"
                      />
                    </View>
                    <View style={styles.buttonView}>
                      <Button
                        title="COMMUNICATION"
                      />
                    </View>
                  </View>
              </View>
            </View>

        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
  },
  sous_title: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 5,
  },
  main_desc: {
    height: '45%',
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    display: 'flex',
    margin: '20 20'
  },
  paragraphe: {
    marginLeft: 10,
    marginRight: 10,
    color:'gray',
    fontWeight: '500' 
  },
  card_container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
    borderColor: '#B9CDCA',
    borderWidth: 2,
    backgroundColor: '#fff',
    shadowColor: '#470000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius:2,
    elevation: 4,
    borderRadius:10
    
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  
})
export default Accueil