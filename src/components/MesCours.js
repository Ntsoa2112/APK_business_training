import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity} from 'react-native'


class Mescours extends React.Component {
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
            <Text>Page Mes cours</Text>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1
  },
  
})
export default Mescours