/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './presentacion/login';
import PrincipalScreen from './presentacion/principal';
import ListaAlumnosScreen from './presentacion/ListaAlumnos';
import Materias from './presentacion/Materias';
import CodigoQR from './presentacion/CodigoQR';
import LectorQR from './presentacion/LectorQR';

const RootStack = createStackNavigator(
  {
  Login : LoginScreen,
  Principal : PrincipalScreen,
  Lista : ListaAlumnosScreen,
  Materias : Materias,
  Codigo : CodigoQR,
  Lector : LectorQR
  },
  {
    initialRouteName : 'Login'
  }
);
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
