/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import {
  View,
  Button,
  Text
} from 'react-native';
import ShowText from '../components/showText/showText';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  changeText(text: string) {
    // Call action setText
    this.props.setText(text)
  }

  render() {

    return (
      <View>
        <Text>Hello!</Text>
        <ShowText text={this.props.text}></ShowText>
        <Button onPress={() => this.changeText('Brand new text!')} title="Click me and see magic"></Button>
      </View>
    )
  }

}

// Map wanted store properties to component as props
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
