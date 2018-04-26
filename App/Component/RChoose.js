/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


export default class RChoose extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    }
  }
  static navigationOptions = {
    title: 'Signup',
  };


  render() {
    const radio_props = [
      { label: 'param1', value: 0 },
      { label: 'param2', value: 1 }
    ];
    return <ScrollView contentContainerStyle={style.RChoose}>
      <Text style={style.header}>Registration</Text>

      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          onPress={(value) => { this.setState({ value: value }) }}
        />
      </View>

    </ScrollView>
  }
}



const style = StyleSheet.create({
  RChoose: {
    flex: 1,
    backgroundColor: '#6C5B7B',
  },




});

