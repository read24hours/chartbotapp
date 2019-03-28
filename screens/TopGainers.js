import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  ListView,
  TouchableOpacity,
    ActivityIndicator

} from 'react-native';

export default class TopGainers extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {

      isLoading: true,
        data:null,
      dataSource: ds.cloneWithRows([
         {image: "https://trucharts.com/Chart.aspx?Provider=DB&Code=SQ&Type=3&Scale=0&IND=AreaRSI(14){U};VOLMA(60);MACD(12,26,9);ATR(10)&OVER=MA(13);MA(50)&Skin=GreenRed&Size=520&RT=1&Start=20180927&End=20190327&Layout=2Line;Default;Price;HisDate&Cycle=DAY1&x=100&y=100"},
         {image: "https://trucharts.com/Chart.aspx?Provider=DB&Code=SQ&Type=3&Scale=0&IND=AreaRSI(14){U};VOLMA(60);MACD(12,26,9);ATR(10)&OVER=MA(13);MA(50)&Skin=GreenRed&Size=520&RT=1&Start=20180927&End=20190327&Layout=2Line;Default;Price;HisDate&Cycle=DAY1&x=100&y=100"},
         {image: "https://trucharts.com/Chart.aspx?Provider=DB&Code=SQ&Type=3&Scale=0&IND=AreaRSI(14){U};VOLMA(60);MACD(12,26,9);ATR(10)&OVER=MA(13);MA(50)&Skin=GreenRed&Size=520&RT=1&Start=20180927&End=20190327&Layout=2Line;Default;Price;HisDate&Cycle=DAY1&x=100&y=100"},
         {image: "https://trucharts.com/Chart.aspx?Provider=DB&Code=SQ&Type=3&Scale=0&IND=AreaRSI(14){U};VOLMA(60);MACD(12,26,9);ATR(10)&OVER=MA(13);MA(50)&Skin=GreenRed&Size=520&RT=1&Start=20180927&End=20190327&Layout=2Line;Default;Price;HisDate&Cycle=DAY1&x=100&y=100"},
         {image: "https://trucharts.com/Chart.aspx?Provider=DB&Code=SQ&Type=3&Scale=0&IND=AreaRSI(14){U};VOLMA(60);MACD(12,26,9);ATR(10)&OVER=MA(13);MA(50)&Skin=GreenRed&Size=520&RT=1&Start=20180927&End=20190327&Layout=2Line;Default;Price;HisDate&Cycle=DAY1&x=100&y=100"},
      ]),
    };
  }

    componentWillMount(){
        this.setState({
            isLoading: true,
        });

        return fetch("https://top-gainers-app.herokuapp.com/", {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("request is send and response is received",responseJson.results);
                // this.state ={data:responseJson.results};
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

                this.setState({
                    isLoading: false,
                    data: ds.cloneWithRows(responseJson.results)

                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });



    }







    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, justifyContent: 'center',alignItems:'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        console.log("In home screen");

    return (
      <ListView enableEmptySections={true}
        dataSource={this.state.data}
        renderRow={(service) => {
          return (
            <View style={styles.box}>
              {/*<Image style={styles.image} source={{uri: service.image}} />*/}
              <View style={styles.boxContent}>
                <Text style={styles.title}>{service.name}, {service.price}, {service.change}, {service.rating}</Text>
                <Text style={styles.description}>Volume: {service.volume} </Text>
                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.view]} onPress={()=> this.props.navigation.navigate ('Screener')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ok/androidL/30/ffffff'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.profile]} onPress={()=> this.props.navigation.navigate ('Screener')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/male-user/win8/30/ffffff'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.message]} onPress={()=> this.props.navigation.navigate ('MyChat')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/envelope/p1em/30/ffffff'}}/>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          )
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  box: {
    padding:20,
    marginTop:20,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  title:{
    fontSize:18,
    color:"#151515",
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:50,
    marginRight:5,
    marginTop:5,
  },
  icon:{
    width:20,
    height:20,
  },
  view: {
    backgroundColor: "#1E90FF",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#1E90FF",
  },
});
 