import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TimePickerAndroid,
  Button,
  DatePickerAndroid,
  TouchableNativeFeedback
} from "react-native";
let date = new Date();
class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: date.getDay(),
      month: date.getMonth(),
      year: date.getFullYear(),
      hour: "00",
      minute: "00",
      title:''
    };
  }

  openDate = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(),
        mode: "spinner"
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          year,
          month,
          day
        });
       
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };
  openTime = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 23,
        minute: 0,
        is24Hour: true,
        mode: "clock"
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({
          hour,
          minute
        });
      
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  };
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={() => {
          Alert.alert("modal close");
        }}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={style.modal}>
          <TextInput
            style={style.input}
            placeholder="title"
            onChangeText={text => this.setState({title:text})}
          />
          <TouchableNativeFeedback onPress={() => this.openDate()}>
            <Text style={style.picker}>{`${this.state.day} / ${
              this.state.month
            } / ${this.state.year}`}</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.openTime()}>
            <Text style={style.picker}>{`${this.state.hour} : ${
              this.state.minute
            } `}</Text>
          </TouchableNativeFeedback>
          <View style={style.btn}>
            <Button title="add" onPress={() => this.props.add(this.state)} />
          </View>
          <View style={style.btn}>
            <Button
              onPress={() => {
                this.props.setModal();
              }}
              title="close"
            />
          </View>
        </View>
      </Modal>
    );
  }
}
const style = {
  modal: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "stretch",
    position: "relative",
    padding: 20,
    borderWidth: 1
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#a0c6e8",
    fontWeight: "400",
    fontSize: 20,
    padding: 10,
    marginBottom: 10
  },
  btn: {
    height: 60
  },
  picker: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#a0c6e8",
    fontWeight: "400",
    fontSize: 20,
    padding: 10,
    marginBottom: 20
  }
};

export default AddModal;
