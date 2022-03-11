import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,TouchableOpacity, Button} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

class Cours extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],      
    }
  }
  componentDidMount(){
    const typeCours = this.props.route.params.routeName
    this.setState({
      items:this.props.route.params.data, 
    })
  }
  render() {
    return (
        <SafeAreaView>
            <View style={styles.cardTitle}>
                <Text style={styles.title}>Planning</Text>
            </View>
            
            <View style={styles.calendar}>
                <Calendar   
                markedDates={this.state.items.planing}
                />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Inscription"
              />
            </View>
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex:1
  },
  title:{
    fontWeight:'bold',
    color:'#000',
    fontSize:18
  },
  calendar:{
      marginTop:20
  },
  cardTitle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
})
export default Cours