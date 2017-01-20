/* @flow */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

type Props = {
  text: string
}

class ShowText extends Component {

  props: Props

  render() {
    return <Text style={styles.awesomeText}>{this.props.text}</Text>
  }
}

const styles = StyleSheet.create({
  awesomeText: {
    fontSize: 36
  }
})

export default ShowText;
