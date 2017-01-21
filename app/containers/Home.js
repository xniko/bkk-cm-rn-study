/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native';
import ShowText from '../components/showText/showText';
import {Actions} from 'react-native-router-flux'

class Home extends Component {

  changeText(text: string) {
    // Call action setText
    this.props.setText(text)
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello!</Text>

        <ShowText text={this.props.text}></ShowText>

        <View style={styles.buttonContainer}>
          <Button onPress={() => this.changeText('Brand new text!')} title="Click to change text in view"></Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={Actions.about} title="Go to about page"></Button>
        </View>
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
  },
  buttonContainer: {
    marginBottom: 15
  }
});

// Map wanted store properties to component as props.
// This function makes it possible that we get state data to component. state.text is
// now available in component with this.props.text.
function mapStateToProps(state) {
  return {
    text: state.text
  }
}

// Map actions to component as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
