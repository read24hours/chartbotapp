import React, { Component }from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

import { SearchBar, FormLabel } from 'react-native-elements'

import { Container, Content, Header, Input, Item, Button, Label } from 'native-base';

import { createSwitchNavigator } from 'react-navigation'
import { RectButton } from 'react-native-gesture-handler';


const { height, width } = Dimensions.get('window')

class Home extends Component {
  render(){
    return (
      <ScrollView>
          {/*https://medium.freecodecamp.org/how-to-build-a-react-native-flatlist-with-realtime-searching-ability-81ad100f6699*/}
        <SearchBar
            lightTheme
            placeholder='Find Charts...' />

        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Today's Buy Signals
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/SQChartUI.jpg')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('Stocks')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold', marginTop: 10 }}> View Stocks </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Today's Top Gainers
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/SQChartUI.jpg')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        onPress={()=> this.props.navigation.navigate ('TopGainers')}
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold', marginTop: 10 }}> View Stocks </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Trending Tickers
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chartbotlock.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold', marginTop: 10 }}> Unlock </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  High Volume 
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chartbotlock.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold', marginTop: 10 }}> Unlock </Text> 
                </Button>
              </View>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Favorites List 
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of stocks verified for quality & growth

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', marginBottom: 10 }}
                      source={require('../assets/chartbotlock.png')}
                  />
                  <Button 
                        full
                        rounded
                        primary
                        >
                     <Text style = {{ color: 'white', fontWeight: 'bold', marginTop: 10 }}> Unlock </Text> 
                </Button>
              </View>
          </View>

          <View style={{height: 100}}></View>
      </ScrollView>

    )
  }
}

export default Home;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    marginTop: 50
  },
  heading: {
      marginTop: 40
  },
  text: {
      marginHorizontal: 8,
      marginVertical: 10
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
})