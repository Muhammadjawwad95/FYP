import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  
} from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';

import SplashScreen from 'react-native-splash-screen';
import Home from './App/Component/Home';
import RegForm from './App/Component/regform';
import RChoose from './App/Component/RChoose';
import RPerInfo from './App/Component/RPerInfo';
import SignIn from './App/Component/SignIn';
import Dashboard from './App/Component/Ddashboard';


// import Home from './App/Component/Home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'A project by Jawwad, Muneeb and Arsalan Ahmed',
});


console.disableYellowBox = true;

const DrawerStack = DrawerNavigator({
  Dashboard: { screen: Dashboard },
  Home:{screen:Home}
  
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#fff' },
       title: 'Dashboard',
      headerTintColor: 'white',
    })
  })

const PrimaryNav = StackNavigator({
  Home:{screen:Home},
  RChoose:{screen:RChoose},
  RegForm:{screen:RegForm},
  Drawer: { screen: DrawerNavigation },
  SignIn: { screen: SignIn },
  RPerInfo:{screen:RPerInfo},
  //RVechInfo:{screen:RVechInfo},
   //sg: {screen:RegForm},
  // About: {screen: }
},
  {
    headerMode: 'none',
  });

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <View style={styles.container}>
      {/* <RegForm /> */}
      <PrimaryNav />
    </View >
  }
}

export default App;


const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#66B5FF',
    // paddingLeft: 60,
    // paddingRight: 60,
     
  },
    
});
