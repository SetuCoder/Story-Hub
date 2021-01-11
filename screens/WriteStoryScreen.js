import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Alert,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';

import firebase from 'firebase';
import db from '../config';
import * as Permissions from 'expo-permissions';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
        title: '',
        author: '',
        story: ''
    }
}

submitStory =()=>{
    db.collection("stories").add({
      'title': this.state.title,
      'author': this.state.author,
      'story': this.state.story,
      'date':firebase.firestore.Timestamp.now().toDate(),
    })

    ToastAndroid.show('Your story has been sumitted. If your story does not appear in the read story section, please wait'
        , ToastAndroid.SHORT)
}

  render() {
    return (
      <View style={styles.container}>
      <View>
        <Image
            source = {require('../assets/BookHeader.jpg')}
            style= {{width:100, height:100}}/>
          </View>
           
        <Text style={{textAlign:'center', fontSize:30, fontWeight: "bold"}}>Story Hub</Text>

        <View style={styles.inputView}>
         <TextInput style={styles.inputBox} placeholder="Story Title" 
         onChangeText={text => {this.setState({ title: text })}}
         value={this.state.title}
        />
         </View>

         <View style={styles.inputView}>
             <TextInput style={styles.inputBox} placeholder="Author" 
             onChangeText={text => {this.setState({ author: text });}}
              value={this.state.author}
              />
            </View>
            
  <View style={styles.inputView}>
    <TextInput
      style={styles.textArea} 
      underlineColorAndroid="transparent"
      placeholder="Write Your Story"
      placeholderTextColor="grey"
      onChangeText={text => {
        this.setState({ story: text });
    }}
    value={this.state.story}
      numberOfLines={10}
      multiline={true}
    />
</View>

    <View>
       <TouchableOpacity onPress={this.submitStory}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
   </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputBox:{
    width: 300,
    height: 30,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 5
  },
  inputView:{
    flexDirection: 'row',
    margin: 5
  },
  textArea: {
    height: 150,
    width : 300,
    borderWidth: 1.5,
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:30,
    marginTop: 30
  },
  submitButtonText:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight:"bold",
    marginTop:5,
    color: 'white'
  }
});
