import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base'


class Home extends Component {
    render(){
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source= {require('../assets/ChartBotWhiteLogo.png')} 
                   style={{width: 100, height: 100}}></Image>
              <Text style={{ marginLeft: 20, marginRight: 20, fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
              Invite Friends and Earn Trade Tokens
               </Text>
  
               <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
               <Text style={{ marginLeft: 40, marginRight: 25, fontSize: 20, textAlign: 'center' }}>
               Trade tokens help you get a better return on your trades. 
               </Text>
  
               <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Button
                full
                rounded
                primary
                title="Invite Friends"
                onPress={()=> this.props.navigation.navigate ('Stocks')}
                >
                <Text style = {{ color: 'white', fontWeight: 'bold' }}> Invite Friends </Text> 
                </Button>
                </View>
            </View>
        </View>
      );
    }
  }
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
