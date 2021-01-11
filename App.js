import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
    return (
        <AppContainer style={styles.container} />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen},
}, 
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require('./assets/write.png')}
          style={{width:30, height:30}}
        />
        )
      }

      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require('./assets/read.png')}
          style={{width:27, height:27, marginTop:2}}
        />)
        
      }
    }
  })
}
);

const SwitchNavigator = createSwitchNavigator({
  LoginScreen : LoginScreen,
  TabNavigator : TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
