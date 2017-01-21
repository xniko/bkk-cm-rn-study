/* @flow */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

type Props = {
  text: string
}

/**
 * This is really dummy component. It takes text as a prop and shows it.
 * Component is here to demonstrate how to create new components.
 */
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
