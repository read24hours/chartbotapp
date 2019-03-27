import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";

import { Button } from 'native-base';

import * as Animatable from 'react-native-animatable'

const listItems = [
'Energy',
'Materials',
'Industrials',
'Consumer Discretionary',
'Consumer Staples',
'Health Care',
'Financials',
'Information Technology',
'Telecommunication Services',
'Utilities',
'Real Estate']

import Icon from 'react-native-vector-icons/Ionicons'

class Screener extends Component {

  state = {
    searchBarFocused: false
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)


  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 80, backgroundColor: '#3b5998', justifyContent: 'center', paddingHorizontal: 5 }}>

          <Animatable.View animation="slideInRight" duration={500} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
            <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
              <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 20 }} />
            </Animatable.View>
            <TextInput placeholder="Find Stocks..." style={{ fontSize: 20, marginLeft: 15, flex: 1 }} />
          </Animatable.View>

        </View>

        <FlatList
          style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
          data={listItems}
          renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{ height: 60, backgroundColor: '#3b5998', justifyContent: 'center', paddingHorizontal: 5 }}>
            <Button
                full
                transparent
                title="Go Back"
                onPress={()=> this.props.navigation.navigate ('Stocks')}
                >
                <Text style = {{ color: 'white', fontWeight: 'bold' }}> Apply Filter </Text> 
            </Button>
        </View>
      </View>

    );
  }
}
export default Screener;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
