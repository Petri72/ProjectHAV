
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import firebase from 'firebase';

var config = {
    databaseURL: "https://project-hav-dc44f.firebaseio.com",
    projectId: "project-hav-dc44f",
};
firebase.initializeApp(config);

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class LogInScreen extends React.Component{
  readUserData() {
    firebase.database().ref('user/').once('value', function (snapshot) {
        console.log(snapshot.val())
    });
}
  render(){
    return(
      <View style={styles.container}>
        <TextInput style = {styles.input}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               keyboardType='default'
               returnKeyType="next"
               placeholder='Username'
               placeholderTextColor='rgba(225,225,225,0.9)'/>

        <TextInput style = {styles.input}
              returnKeyType="go"
              ref={(input)=> this.passwordInput = input}
              placeholder='Password'
              placeholderTextColor='rgba(225,225,225,0.9)'
              secureTextEntry/>

        <TouchableOpacity style={styles.buttonContainer}
                    disabled={false}
                    onPress={this.readUserData}>
             <Text  style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}
                    disabled={true}
                    onPress={()=>{null}}>
             <Text  style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
        <View style={{marginTop:250, backgroundColor:"#737b84"}}>
          <Button title="Go to details" color="#fff" onPress={()=>this.props.navigation.navigate('Details')}/>
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component{
  onP(){
    Alert.alert('The ship has left the port')
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to E-Logg</Text>
        <Text style={styles.welcome}>By: Sogeti GBG/Borås</Text>
        <View style={{backgroundColor: "#2b9064", marginTop:40}}>
          <Button onPress={this.onP} title="Leaving Port" color="white"/>
        </View>
        <View style={{marginTop:250, backgroundColor:"#737b84"}}>
          <Button title="Go to Login screen" color="#fff" onPress={()=>this.props.navigation.navigate('LogIn')}/>
        </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    LogIn: {
      screen: LogInScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'LogIn',
  }
);

export default class App extends React.Component{
  render(){
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input:{
        height: 40,
        width: 200,
        backgroundColor: 'rgba(225,225,225,0.3)',
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    buttonContainer:{
        backgroundColor: '#2b9064',
        paddingVertical: 15,
        width: 150,
        marginTop: 10,
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
});
