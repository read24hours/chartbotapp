import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Button } from 'native-base';

import firebase from 'firebase';
import { Permissions, Notifications } from 'expo';
class DashboardScreen extends Component {
  registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    try {
      // Get the token that uniquely identifies this device
      let token = await Notifications.getExpoPushTokenAsync();

      // POST the token to your backend server from where you can retrieve it to send push notifications.
      //NOT WORKING!!!!!!!!!!
      firebase
        .database()
        .ref('users/'+this.currentUser.uid+'/push_token')
        .set(token);
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    this.currentUser = await firebase.auth().currentUser;
    await this.registerForPushNotificationsAsync();
  }

  sendPushNotification = () => {
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: '',
        sound: 'default',
        title: 'Demo',
        body: 'Demo notificaiton'
      })
    });
  };
  render() {
    return (

     // <View style={styles.container}>
       // <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
       // <Button
         // title="Send Push Notification"
          //onPress={() => this.sendPushNotification()}
       // />
     // </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source= {require('../assets/ChartBotWhiteLogo.png')} 
                 style={{width: 100, height: 100}}></Image>
            <Text style={{ marginLeft: 20, marginRight: 20, fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
                Hello, my name is ChartBot.
             </Text>

             <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
             <Text style={{ marginLeft: 40, marginRight: 25, fontSize: 20, textAlign: 'center' }}>
             I use trading algorithms to help you find daily, weekly, and monthly stock picks. 
             </Text>

             <View style={{ marginTop: 80, paddingHorizontal: 20 }}>
              <Button
              full
              rounded
              primary
              title="Let's Get Started"
              onPress={()=> this.props.navigation.navigate ('Screener')}
              >
              <Text style = {{ color: 'white', fontWeight: 'bold' }}> Let's Get Started </Text> 
              </Button>

              <View style={{ marginTop: 16, paddingHorizontal: 20 }}></View>
              <Button
              full
              rounded
              transparent
              onPress={() => firebase.auth().signOut()}
              >
              <Text style = {{ color: '#3b5998', fontWeight: 'bold' }}> Sign Out </Text> 
              </Button>
              <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
              </View>
          </View>
      </View>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});