import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity} from 'react-native'


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
            <Text>Page d'Accueil</Text>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1
  },
  
})
export default Accueil