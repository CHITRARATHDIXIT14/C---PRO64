import * as React from 'react';
import { Text, View, StyleSheet , TextInput , Button } from 'react-native';
import {Header} from 'react-native-elements' ;
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './local'

export default class App extends React.Component {
  constructor(){
  super();
   this.state={
     text:'',
     displayText:'',
     word:[],
     lexicalCategory:[] ,
     definition:[],
   }
  }
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
      <Header centerComponent={{text:'DICTIONARY',style:{fontSize:20,color:'red',fontFamily:'Pattaya'}}} backgroundColor="yellow" />
      <TextInput onChangeText={text=>{
      
        this.setState({text:text})
      }} value={this.state.text} />

<Button title='SEARCH' onPress={()=>{
this.setState({word:db[this.state.text].word})
this.setState({lexicalCategory:db[this.state.text].lexicalCategory})
this.setState({definition:db[this.state.text].definition})
}}></Button>
<Text style={styles.text}>WORD:</Text><Text>{this.state.word}</Text>
<Text style={styles.text}>LEXICAL CATEGORY:</Text><Text>{this.state.lexicalCategory}</Text>
<Text style={styles.text}>DEFINATION:</Text><Text>{this.state.definition}</Text>
      </View>
    
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#F36C28',
  },
  text:{
color:'blue',
backgroundColor:'yellow'
  }
});