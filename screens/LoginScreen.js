import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(){
    super()
    this.state={
      email : "",
      password : ""
    }
  }

  alert(){
      Alert.alert("email: testuser123@gmail.com, password: testuser123")
  }

  showAlert(errorCode){
    switch(errorCode){
      case 'auth/too-many-requests':
        Alert.alert('To many requests\nTry again later')
        this.setState({
          email:"",
          password : ""
        })
        break
      case 'auth/wrong-password':
        Alert.alert('Enter Correct password')
        this.setState({
          password : ""
        })
        break
      default:
        this.setState({
          email:"",
          password : ""
        })
        return Alert.alert('Invalid email and password')
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.subContainer1}>
          <Text style={styles.title}>Story Hub</Text>
          <Text style={{fontSize:13, padding:-5}}>A sharing hub for the writers and story readers</Text>
          <Image source={{uri: 'https://i.pinimg.com/originals/e8/9c/7c/e89c7ca5e17e78904990bda912b16644.jpg'}}style={styles.image} />
          <TextInput
              placeholder="Email"
              placeholderTextColor = "#ffff"
              onChangeText= {(emailText)=>{
                  this.setState({
                      email: emailText
                  })
              }}
              value={this.state.email}
              style={styles.textInput}
              />
          <TextInput
              placeholder="Password"
              placeholderTextColor = "#ffff"
              onChangeText= {(passwordText)=>{
                  this.setState({
                      password: passwordText
                  })
              }}
              value={this.state.password}
              style={styles.textInput}
              secureTextEntry = {true}
              />
        </View>
        <View style={styles.subContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress = {async()=>{
              var email  = await this.state.email;
              var password = await this.state.password
              firebase.auth().signInWithEmailAndPassword(email, password)
              .then(()=>{
                this.props.navigation.navigate('WriteStory')
              })
              .catch((error)=> {
                var errorCode = error.code;
                var errorMessage = error.message;
                return this.showAlert(errorCode)
              })
            }}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{width:"75%",
            height:"11%",
            justifyContent:'center',
            alignItems:'center',
            borderWidth:2,
            borderColor:'#ffff',
            borderRadius:15,
            margin:15}}
            onPress = {this.alert}>
                <Text style={styles.buttonText}>Hint for Testing</Text>
            </TouchableOpacity>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#98C847'
  },
  title:{
    fontWeight:"normal",
    fontSize:43,
    padding:10,
    alignContent:'center',
    color:'#ffff',
    textAlign:'center'
  },
  image:{
    width:"60%",
    height:"40%",
    marginBottom:30,
    borderWidth:5,
    borderColor:'#ffff',
    borderRadius:20,
    margin:10
  },
  subContainer1:{
    flex:0.6,
    justifyContent:'center',
    alignItems:'center'
  },
  subContainer2:{
    flex:0.4,
    alignItems:'center'
  },
  textInput : {
    width:"70%",
    height: "8%",
    borderWidth:2,
    borderColor:'#ffff',
    padding:10,
    marginBottom:10,
    borderRadius:10
  },
  button:{
    width:"75%",
    height:"11%",
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#ffff',
    borderRadius:15
  },
  buttonText:{
    color:'white',
    fontSize:25
  }
})