
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';

class LogInScreen extends React.Component{
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
               placeholderTextColor='rgba(225,225,225,0.7)'/>

        <TextInput style = {styles.input}
              returnKeyType="go"
              ref={(input)=> this.passwordInput = input}
              placeholder='Password'
              placeholderTextColor='rgba(225,225,225,0.7)'
              secureTextEntry/>

        <TouchableOpacity style={styles.buttonContainer}
                     onPress={()=>{null}}>
             <Text  style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{marginTop:250}}>
          <Button title="Go to details" onPress={()=>this.props.navigation.navigate('Details')}/>
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to E-Logg</Text>
        <Text style={styles.welcome}>By: Sogeti GBG/Borås</Text>
        <View style={{backgroundColor: "#636f7a", marginTop:40}}>
          <Button onPress={()=>{null}} title="Leaving Port" color="white"/>
        </View>
        <Button title="Go to Login screen" onPress={()=>this.props.navigation.navigate('LogIn')}/>
      </View>
    );
  }
}

const RootStack = StackNavigator(
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
/*type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to E-Logg</Text>
        <Text style={styles.welcome}>By: Sogeti GBG/Borås</Text>
        <View style={{backgroundColor: "#636f7a", marginTop:40}}>
          <Button onPress={()=>{null}} title="Leaving Port" color="white"/>
        </View>
      </View>
    );
  }
}*/

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
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        width: 150,
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
});
