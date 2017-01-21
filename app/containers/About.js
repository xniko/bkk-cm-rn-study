/* @flow */

import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux'

class About extends Component {

  render() {
    const {routes} = this.context;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
      </View>
    )
  }

}

// Define view styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 15
  }
});

// We do not use any data from redux store here so we don't need connect()(About)
export default About;
