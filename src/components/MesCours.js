import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity} from 'react-native'


class Forum extends React.Component {
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
            <Text>Page Forum</Text>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1
  },
  
})
export default Forum