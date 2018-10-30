import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Head from "./src/components/Header";
import List from "./src/components/List";
import { Icon } from "react-native-elements";
import AddModal from "./src/components/Modal";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "go to dfldkfdl kfldkflk ldf fdf ",
          date: "20/12/2016",
          time: "20:44"
        },
        {
          title: "go to school fdlfmldf lmldf mldmf ",
          date: "20/12/2017",
          time: "20:44"
        },
        { title: "say hello mlf", date: "20/12/2018", time: "15:41" }
      ],
      isVisible: false
    
    };
  }

  setModal = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
  hundleTitle = val => {
   
    this.setState({
      title: val
    });
  };
  add = ({title,year,month,day,hour,minute}) => {
    
    this.setState({
      data: this.state.data.concat({ title, date:year+'/'+month+'/'+day, time:hour+':'+minute }),
      isVisible:false
    });
    
  };

  remove = (title)=>{
    this.setState({
      data: this.state.data.filter(x=>x.title !== title)
    })
  }

  render() {
    return (
      <View style={style.layout}>
        <Head />

        <List 
        data={this.state.data} 
        remove = {this.remove}
        />
         
        <View style={style.icon}>
          <TouchableHighlight onPress={() => this.setModal()}>
            <Icon name="add" />
          </TouchableHighlight>
        </View>

        <AddModal
          isVisible={this.state.isVisible}
          setModal={this.setModal}
         
          add={this.add}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  layout: {
    flex: 1,
    position: "relative"
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#42b3f4",
    color: "#fff",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 5,
    right: 5,
    borderRadius: 50
  }
});
