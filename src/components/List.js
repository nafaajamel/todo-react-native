import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableHighlight } from 'react-native'
import {Icon} from 'react-native-elements'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.data
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps != this.props){
            this.setState({
                data:this.props.data
            })
        }
       
    }
   
    render() {
        return (
            
                <FlatList
                style={style.list}
                    data={this.state.data}
                    keyExtractor={ (item)=>item.title}
                    renderItem={({item})=> <View style={style.elem}>
                        <Text> {item.title.substring(0,15)+'...'} </Text>
                        <Text>{item.date}</Text>
                        <Text> {item.time} </Text>
                        <TouchableHighlight onPress={()=>this.props.remove(item.title)}>
                        <Icon  color='red' name="clear"/>
                        </TouchableHighlight>
                    </View>}
                />
               
         
        );
    }
}

const style = StyleSheet.create({
    list:{
     flex:2,
        backgroundColor:'#deeef7',
        borderWidth: 1,
        
    },
    elem:{
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10

    }
})


export default List;